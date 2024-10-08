import { AgGridReact } from "ag-grid-react";
import { defaultColDef, Questions } from "../interfaces/commonInterfaces";
import { type ColDef } from "ag-grid-community";

// import { useEffect } from "react";

interface TableProps {
  gridRef: any;
  rowData: Questions[];
  columnDefs: ColDef[];
  defaultColDef: defaultColDef;
}

export default function StyledTable({
  gridRef,
  rowData,
  columnDefs,
  defaultColDef,
}: TableProps) {
  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: "100%" }}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        singleClickEdit={true}
        sideBar={true} //not supported in aggrid community
      />
    </div>
  );
}
