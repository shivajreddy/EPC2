
// type Props = {}

import { convertLength } from "@mui/material/styles/cssUtils";
import axios from "axios";
import { useEffect, useState } from "react";

type Section = {
  _id: string
  title: string,
  name: string,
  contract_date: string,
  editable: boolean,
}

const server_uri = "http://localhost:7812/test2"



function Lab() {

  const [data, setData] = useState<Section>();

  const fetchData = async () => {
    try {
      const response = await axios.get(server_uri)
      console.log("response.data=", response.data[0]);
      setData(response.data[0])
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  let convertedDate = '';
  if (data !== undefined) {
    console.log("data = ", data)
    convertedDate = data.contract_date.split(' ')[0]; // Extract date part
    console.log("converteddate=", convertedDate, typeof (convertedDate))
  }

  return (
    <div>
      <h3>Lab</h3>
      <input type="date" value={convertedDate} disabled={true} />
    </div>
  )
}

export default Lab