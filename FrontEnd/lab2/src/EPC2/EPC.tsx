import "./EPC.css"

import { useState } from "react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";

import columnDefinitions from "./columnDefinitions";

const EPC = () => {

  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ]);

  const [columnDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" }
  ]);

  return (
    <>
      <div className="epc-view-home">
        <div className="epc-header">
          <h1 className="text-2xl text-center font-bold p-0">EPC 2.0</h1>
          <div className="epc-controls">
            <button className="bg-slate-500 rounded-t-lg text-white">Default View</button>
            <button className="bg-blue-500 rounded-t-lg text-white">Download</button>
          </div>
        </div>

        <div id="epc-grid-home" className="ag-theme-alpine" >
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefinitions}
          >
          </AgGridReact>
        </div>


      </div>

    </>
  );

}

export default EPC


