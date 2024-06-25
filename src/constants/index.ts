import { IImageValue, INavLink } from "../interface";

export const navLinks: INavLink[] = [
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

export const colorOptions: IImageValue[] = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
  { value: "black", label: "Black" },
  { value: "white", label: "White" },
];

export const sizeOptions: IImageValue[] = [
  { value: "100", label: "100" },
  { value: "200", label: "200" },
  { value: "300", label: "300" },
  { value: "400", label: "400" },
  { value: "500", label: "500" },
];
