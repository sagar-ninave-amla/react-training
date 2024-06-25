export interface INavLink {
  key: number;
  url: string;
  label: string;
}

export interface INavigationProps {
  navLinks: INavLink[];
}

export interface IImageValue {
  value: string;
  label: string;
}
