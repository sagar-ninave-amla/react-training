import { FC, ReactElement } from "react";
import { Layout } from "antd";
const { Footer } = Layout;

const FooterComponent: FC = (): ReactElement => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
  );
};

export default FooterComponent;
