import { useEffect, useState, useMemo } from "react";
import * as XLSX from "xlsx";

export interface ParsedFile {
  fileName: string;
  sheets: {
    [sheetName: string]: Record<string, any>[]; // Parsed data per sheet
  };
}

export default function UseProductsData() {
  const [fileData, setFileData] = useState<ParsedFile[]>([]);

  useEffect(() => {
    async function fetchAndParseFiles() {
      try {
        const cacheKey = "productsDataCache";
        const cachedData = localStorage.getItem(cacheKey);
        const cacheExpiration = localStorage.getItem(`${cacheKey}_expiration`);

        if (
          cachedData &&
          cacheExpiration &&
          Date.now() < parseInt(cacheExpiration, 10)
        ) {
          setFileData(JSON.parse(cachedData));
          return;
        }

        const res = await fetch("/products/files.json");
        const { files } = await res.json();

        if (!files || files.length === 0) return;

        // Fetch all files concurrently
        const fetchFilePromises = files.map(async (fileName: string) => {
          const filePath = `/products/${fileName}`;
          const fileResponse = await fetch(filePath);
          const arrayBuffer = await fileResponse.arrayBuffer();
          const workbook = XLSX.read(arrayBuffer, { type: "array" });

          const sheetsData: ParsedFile["sheets"] = {};
          workbook.SheetNames.forEach((sheetName) => {
            sheetsData[sheetName] = XLSX.utils.sheet_to_json(
              workbook.Sheets[sheetName]
            );
          });

          return { fileName, sheets: sheetsData };
        });

        const parsedFiles = await Promise.all(fetchFilePromises);
        setFileData(parsedFiles);

        // Cache the data with expiration
        localStorage.setItem(cacheKey, JSON.stringify(parsedFiles));
        localStorage.setItem(
          `${cacheKey}_expiration`,
          (Date.now() + 60 * 60 * 1000).toString() // 1 hour expiration
        );
      } catch (error) {
        console.error("Error fetching/parsing Excel files:", error);
      }
    }

    fetchAndParseFiles();
  }, []);

  return fileData;
}

export function GetAllProducts() {
  const dbProducts = UseProductsData();

  return useMemo(() => {
    return dbProducts.flatMap((prod) => {
      const item = prod.sheets;
      if (!item || !item.Info) return [];

      return item.Info.map((info) => ({
        code: info.Code,
        title: `${info.Title} (${info.Code})`,
        description: info.Description,
        href: `/products/${info.Code}`,
        faq: (item.FAQ || [])
          .filter((faq) => faq.Code === info.Code)
          .slice(0, 1)
          .map((faq) => faq.FAQ),
        download:
          (item.Download || []).find((dl) => dl.Code === info.Code)?.Link ||
          null,
        brochure:
          (item.Brochure || []).find((br) => br.Code === info.Code)?.Link ||
          null,
        short_des: info.Short,
      }));
    });
  }, [dbProducts]);
}

export function GetProductDetails(code: string) {
  const dbProducts = UseProductsData();

  return useMemo(() => {
    for (const prod of dbProducts) {
      const item = prod.sheets;
      if (!item || !item.Info) continue;

      const info = item.Info.find((p) => p.Code === code);
      if (info) {
        return {
          title: `${info.Title} (${info.Code})`,
          description: info.Short,
          href: `/products/${info.Code}`,
          faq: (item.FAQ || [])
            .filter((faq) => faq.Code === code)
            .map((faq) => faq.FAQ),
          download: (item.Download || [])
            .filter((dl) => dl.Code === code)
            .map((dl) => ({
              version: dl.Version,
              link: dl.Link,
            })),
          brochure: (item.Brochure || [])
            .filter((br) => br.Code === code)
            .map((br) => ({
              title: br.Title,
              link: br.Link,
            })),
        };
      }
    }

    return null; // Return null if the product is not found
  }, [dbProducts, code]);
}

interface UseReadExcelProps {
  path: string;
}
export function UseReadExcel({ path }: UseReadExcelProps) {
  const [fileData, setFileData] = useState<ParsedFile | null>(null);

  useEffect(() => {
    async function fetchAndParseFile() {
      try {
        const res = await fetch(`${path}/files.json`);
        const { files } = await res.json();

        if (!files || files.length === 0) return;

        const fileName = files[0];
        const filePath = `${path}/${fileName}`;
        const fileResponse = await fetch(filePath);
        const arrayBuffer = await fileResponse.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });

        if (workbook.SheetNames.length !== 1) return;

        const sheetName = workbook.SheetNames[0];
        const sheetsData: ParsedFile["sheets"] = {
          [sheetName]: XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]),
        };

        setFileData({ fileName, sheets: sheetsData });
      } catch (error) {
        console.error("Error fetching/parsing Excel file:", error);
      }
    }

    fetchAndParseFile();
  }, [path]);

  return fileData;
}

export function GetListOfClients() {
  const data = UseReadExcel({ path: "/listofclients" });
  return useMemo(() => data?.sheets.ListOfClients, [data]);
}
