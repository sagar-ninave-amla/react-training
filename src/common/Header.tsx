import { Layout } from "antd";
import { navLinks } from "../constants";
import { FC, ReactElement } from "react";
import Navigation from "./Navigation";

const { Header } = Layout;

const HeaderComponent: FC = (): ReactElement => {
  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <Navigation navLinks={navLinks} />
    </Header>
  );
};

export default HeaderComponent;
