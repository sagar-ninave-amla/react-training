import { Link } from "react-router-dom";
import { FC, ReactElement, useContext } from "react";
import { INavLink, INavigationProps } from "../interface";
import { DataContext } from "./DataProvider";

const Navigation: FC<INavigationProps> = ({
  navLinks,
}: INavigationProps): ReactElement => {
  const { data } = useContext(DataContext);

  return (
    <ul>
      {navLinks.length > 0 &&
        navLinks.map(
          (navLink: INavLink): ReactElement => (
            <li
              key={navLink?.key}
              style={{ display: "inline", margin: "0 1rem" }}
            >
              {" "}
              <Link to={navLink?.url}> {navLink?.label} </Link>
            </li>
          )
        )}
      {data?.name && (
        <li style={{ display: "inline", margin: "0 1rem", color: "#fff" }}>
          Hello {data?.name}
        </li>
      )}
    </ul>
  );
};

export default Navigation;
