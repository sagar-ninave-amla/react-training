import { FC, ReactElement } from "react";
import { Button, Result } from "antd";
import { NavigateFunction, useNavigate } from "react-router-dom";

const PageNotFound: FC = (): ReactElement => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={(): void => navigate("/")}>
          Back Home
        </Button>
      }
    />
  );
};

export default PageNotFound;
