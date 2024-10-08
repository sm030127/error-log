import React, { useEffect, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import StyledTable from "../src/components/StyledTable";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef, GridApi } from "ag-grid-community";
import * as XLSX from "xlsx"; // Import the xlsx library
import StyledButton from "../src/components/StyledButton";
import styled from "styled-components";

import { placeholderText } from "./constants";
import { configureCellAlignment } from "./utilities";

const StyledHeading = styled.h1`
  color: #0c97ed;
  font-size: 2rem;
`;

import { Questions } from "./interfaces/commonInterfaces";

import {
  rowData as row,
  columnDefs as columns,
} from "./constants/mockResponse";

const App: React.FC = () => {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<Questions[]>(row);
  const [columnDefs, setColumnDefs] = useState<ColDef[]>(columns);
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
    }),
    []
  );

  useEffect(() => {
    const cols = columnDefs;
    cols.forEach((col) => {});
  }, []);

  // Function to handle Excel export using xlsx
  const onExportClick = () => {
    if (gridRef.current && gridRef.current.api) {
      const gridApi: GridApi = gridRef.current.api;
      const rowData: any[] = [];

      // Get row data from the grid
      gridApi.forEachNode((node) => {
        rowData.push(node.data);
      });

      // Create a worksheet from row data
      const worksheet = XLSX.utils.json_to_sheet(rowData);

      // Create a new workbook
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

      // Generate Excel file and download
      XLSX.writeFile(workbook, "grid_data.xlsx");
    }
  };

  const onAdd = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Add 1 as months are zero-based
    const year = currentDate.getFullYear();
    const row = [
      {
        name: "_",
        forum: "_",
        date: `${day}-${month}-${year}`,
        difficulty: "_",
        time: "0:00",
        result: "-",
        mistakeAndNotes: "-",
      },
      ...rowData,
    ];
    setRowData(row);
  };

  return (
    <div>
      <StyledHeading>Error Log</StyledHeading>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <StyledButton primary onClick={onAdd}>
          Add
        </StyledButton>
        <StyledButton primary onClick={onExportClick}>
          Download as Excel
        </StyledButton>
      </div>
      <div className="ag-theme-alpine" style={{ height: 500, width: "100%" }}>
        <StyledTable
          gridRef={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
};

export default App;
