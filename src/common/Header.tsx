import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const items = [
  {
    key: 1,
    url: "/",
    label: "Home",
  },
  {
    key: 2,
    url: "/about",
    label: "About",
  },
  {
    key: 3,
    url: "/post",
    label: "Post",
  },
];

const HeaderComponent: React.FC = () => {
  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <ul>
        {items.length > 0 &&
          items.map((item) => (
            <li key={item?.key} style={{ display: "inline", margin: "0 1rem" }}>
              {" "}
              <Link to={item?.url}> {item?.label} </Link>
            </li>
          ))}
      </ul>
    </Header>
  );
};

export default HeaderComponent;
