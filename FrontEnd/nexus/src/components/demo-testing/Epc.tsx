import { useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";

import { rowData, columnDefinitions, gridOptions } from "./demodata";
import MainLayout from "@/templates/MainLayout";
import "./Epc.css"


function Epc() {

  const [rowData1] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 }
  ]);

  const [columnDefs1] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ]);


  return (
    <MainLayout>
      <div className="epc-container">

        <div className="epc-header">
          <h1 className="font-bold lg:text-2xl"> EPC 2.0 </h1>
          <div className="epc-controls">
            <button className="bg-blue-500 rounded-t-lg text-white">Download CSV</button>
            <button className="bg-green-600 rounded-t-lg text-white">Save View</button>
            <button className="bg-slate-600 rounded-t-lg text-white">Default View</button>
          </div>
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