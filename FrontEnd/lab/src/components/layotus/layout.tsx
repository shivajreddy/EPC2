import Sidebar from "../sidebar/sidebar";
import { SLayout, SMain } from "./styles";

const Layout = ({ children }) => {

  return (
    <SLayout>
      <Sidebar />
      <SMain>{children}</SMain>
    </SLayout>
  )

}

export default Layout;
