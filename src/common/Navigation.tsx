import { Link } from "react-router-dom";
import { FC, ReactElement } from "react";
import { INavLink, INavigationProps } from "../interface";

const Navigation: FC<INavigationProps> = ({
  navLinks,
}: INavigationProps): ReactElement => {
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
    </ul>
  );
};

export default Navigation;
