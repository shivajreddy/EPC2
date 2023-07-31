// import { Button } from "";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FileMaintananse() {

  const handleClick = (params) => {
    console.log("params:", params);
  }

  return (
    <div>
      <h1> FileMaintananse </h1>


      <form>
        <label htmlFor="file_name" />
        <input id="file_name" />
        <p>choose file</p>
        <button onClick={handleClick}>Upload</button>
      </form>

      <Input type="file" />
      <Button type="submit" onClick={handleClick}>Upload</Button>

    </div>
  )
}