import { createContext, useState } from "react";

export const DataContext = createContext({} as any);

const DataProvider = ({ children }: any) => {
  const [data, setData] = useState<any>({} as any);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
