import "./EPC.css"

import { useState } from "react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";


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


        <h1>EPC 2.0</h1>

        <div className="ag-theme-alpine" style={{ width: "40vw", height: "50vh" }} >
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
          >
          </AgGridReact>
        </div>


      </div>

    </>
  );

}

export default EPC


