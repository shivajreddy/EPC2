import MainLayout from "@/templates/MainLayout"

import { AgGridReact } from "ag-grid-react";
import '@assets/pages/Epc/Epc.css';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { rowData, columnDefinitions, gridOptions } from "./demodata";

import EpcMenu from "./EpcMenu";


function Epc() {
  return (
    <MainLayout>
      <div className="epc-container">

        <div className="epc-header">
          <h1 className="font-bold lg:text-2xl"> EPC 2.0 </h1>
          <EpcMenu />
        </div>

        <div id="epc-grid-home"
          className="ag-theme-myCustomTheme"
        // className="ag-theme-alpine"
        >
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefinitions}
            gridOptions={gridOptions}
          >
          </AgGridReact>
        </div>

      </div>
    </MainLayout>
  )
}

export default Epc