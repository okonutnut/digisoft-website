import { User } from "lucide-react";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

export interface ParsedFile {
  fileName: string;
  sheets: {
    [sheetName: string]: Record<string, any>[]; // Parsed data per sheet
  };
}

export default function UseProductsData() {
  const [filesData, setFilesData] = useState<ParsedFile[]>([]);

  useEffect(() => {
    async function fetchAndParseFiles() {
      try {
        // Fetch file list from JSON
        const res = await fetch("/products/files.json");
        const { files } = await res.json();

        if (!files || files.length === 0) return;

        const parsedFiles: ParsedFile[] = await Promise.all(
          files.map(async (fileName: string) => {
            const filePath = `/products/${fileName}`;
            const fileResponse = await fetch(filePath);
            const arrayBuffer = await fileResponse.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: "array" });

            // Parse all sheets in the file
            const sheetsData: ParsedFile["sheets"] = {};
            workbook.SheetNames.forEach((sheetName) => {
              sheetsData[sheetName] = XLSX.utils.sheet_to_json(
                workbook.Sheets[sheetName]
              );
            });

            return { fileName, sheets: sheetsData };
          })
        );

        setFilesData(parsedFiles);
      } catch (error) {
        console.error("Error fetching/parsing Excel files:", error);
      }
    }

    fetchAndParseFiles();
  }, []);

  return filesData;
}

interface UseReadExcelProps {
  path: string;
}
export function UseReadExcel({ path }: UseReadExcelProps) {
  const [fileData, setFileData] = useState<ParsedFile | null>(null);

  useEffect(() => {
    async function fetchAndParseFile() {
      try {
        // Fetch file list from JSON
        const res = await fetch(`${path}/files.json`);
        const { files } = await res.json();

        if (!files || files.length === 0) return;

        // Only process the first file
        const fileName = files[0];
        const filePath = `${path}/${fileName}`;
        const fileResponse = await fetch(filePath);
        const arrayBuffer = await fileResponse.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });

        if (workbook.SheetNames.length !== 1) return; // Ensure only one sheet exists

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
  }, []);

  return fileData;
}

export function GetExcelData(code: string) {
  const excelData = UseProductsData();
  const data = excelData.find(
    (data) => data.fileName === `${code.toUpperCase()}.xlsx`
  );
  return data?.sheets;
}

export function GetAllProducts() {
  const dbProducts = UseProductsData();
  return dbProducts.map((prod) => {
    const item = prod.sheets;
    return {
      title: `${item?.Info[0].Title} (${item?.Info[0].Code})`,
      description: item?.Info[0].Short,
      href: `/products/${item?.Info[0].Code}`,
      faq: `${item?.FAQ[0].FAQ}`,
    };
  });
}

export function GetListOfClients() {
  const data = UseReadExcel({ path: "/listofclients" });
  return data?.sheets.ListOfClients;
}
