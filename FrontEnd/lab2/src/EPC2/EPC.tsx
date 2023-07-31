import "./EPC.css"

import { useEffect, useMemo, useState } from "react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";

import defaultColumnDefinitions from "./defaultColumnDefinitions";
import { GetFromLS, SaveToLS } from "../utils";
import { rowData, columnDefinitions, gridOptions } from "./DemoData";


const EPC = () => {


  // Default Column Defs
  // Get user-preferances

  /* ! TODO- save the state to localstorage (or) database
  const [userColumnDefs, setUserColumnDefs] = useState(defaultColumnDefinitions);

  useEffect(() => {
    const localUserColumnDefs = GetFromLS('epc-home-user-pref-columnDefs')
    if (localUserColumnDefs === null) {
      SaveToLS("epc-home-user-pref-columnDefs", defaultColumnDefinitions)
      setUserColumnDefs(defaultColumnDefinitions);
    }
    setUserColumnDefs(localUserColumnDefs);
  }, [])

  console.log("userColumnDefs:", userColumnDefs);
  */



  console.log("data=", rowData);


  return (
    <>
      <div className="epc-view-home">
        <div className="epc-header">
          <h1 className="font-bold lg:text-4xl">
            EPC 2.0
          </h1>
          <div className="epc-controls">
            <button className="bg-blue-500 rounded-t-lg text-white">Download CSV</button>
            <button className="bg-green-600 rounded-t-lg text-white">Save View</button>
            <button className="bg-slate-600 rounded-t-lg text-white">Default View</button>
          </div>
        </div>

        {/* <div id="epc-grid-home" className="ag-theme-myCustomTheme" > */}
        <div id="epc-grid-home" className="ag-theme-alpine" >
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefinitions}
            gridOptions={gridOptions}
          >
          </AgGridReact>
        </div>


      </div>

    </>
  );

}

export default EPC



