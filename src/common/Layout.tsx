import { ReactElement, FC } from "react";
import { Outlet } from "react-router-dom";
import FooterComponent from "./Footer";
import HeaderComponent from "./Header";

const Layout: FC = (): ReactElement => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default Layout;
