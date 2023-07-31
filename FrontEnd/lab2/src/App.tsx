import EPC from "./EPC2/EPC";
import FileMaintananse from "./FileMaintanance/FileMaintananse";
import MainLayout from "./Layouts/MainLayout/MainLayout";


function App() {

  return (
    <MainLayout>
      <FileMaintananse />
      <EPC />
    </MainLayout>
  )
}

export default App
