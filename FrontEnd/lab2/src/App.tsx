import { BiCircle, BiSolidConfused, BiSolidHappy } from "react-icons/bi";
import MainLayout from "./Layouts/MainLayout";


function App() {

  return (
    <MainLayout>
      <p className="color-primary">lab2</p>
      <p className="bg-skin-fill">lab2</p>

      <p>test-very wide content</p>

      <div className="text-6xl">
        <h1>test content</h1>
      </div>
      <div>
        <BiSolidHappy size={"6em"} />
      </div>

    </MainLayout>
  )
}

export default App
