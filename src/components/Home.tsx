import { ChangeEvent, FC, ReactElement, useContext, useState } from "react";
import { DataContext } from "../common/DataProvider";
import { Button, Input } from "antd";

const Home: FC = (): ReactElement => {
  const { data, setData } = useContext(DataContext);
  const [name, setName] = useState<string>("");

  return (
    <>
      <h1> Home </h1>
      <Input
        type="text"
        onChange={(event: ChangeEvent<HTMLInputElement>): void =>
          setName(event.target.value)
        }
      />
      <Button onClick={(): void => setData({ ...data, name: name })}>
        {" "}
        Submit{" "}
      </Button>
    </>
  );
};
export default Home;
