import { Outlet } from "react-router-dom";
import FooterComponent from "./Footer";
import HeaderComponent from "./Header";

const Layout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default Layout;
