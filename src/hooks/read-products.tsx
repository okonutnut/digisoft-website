import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

export interface ParsedFile {
  fileName: string;
  sheets: {
    [sheetName: string]: Record<string, any>[]; // Parsed data per sheet
  };
}

export default function UseExcelData() {
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

export function GetExcelData(code: string) {
  const excelData = UseExcelData();
  const data = excelData.find(
    (data) => data.fileName === `${code.toUpperCase()}.xlsx`
  );
  return data?.sheets;
}

export function GetAllProducts() {
  const dbProducts = UseExcelData();
  return dbProducts.map((prod) => {
    const item = prod.sheets;
    return {
      title: `${item?.Info[0].Title} (${item?.Info[0].Code})`,
      description: item?.Info[0].Short,
      href: `/digisoft/products/${item?.Info[0].Code}`,
      faq: `${item?.FAQ[0].FAQ}`,
    };
  });
}
