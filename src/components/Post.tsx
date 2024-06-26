import { ChangeEvent, FC, ReactElement, useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { colorOptions, sizeOptions } from "../constants";

const Post: FC = (): ReactElement => {
  const navigate: NavigateFunction = useNavigate();

  const [name, setName] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [size, setSize] = useState<string>("");

  const onHandleSubmit = (): void =>
    navigate(`${name}?fontSize=${size}&fontColor=${color}`);

  const onHandleName = (event: ChangeEvent<HTMLInputElement>): void =>
    setName(event.target.value);

  const onHandleColor = (event: string): void => setColor(event);

  const onHandleSize = (event: string): void => setSize(event);

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ maxWidth: 600, margin: "1rem", display: "block" }}
    >
      <Form.Item label="Name">
        <Input placeholder="enter name" onChange={onHandleName} />
      </Form.Item>
      <Form.Item label="Font Size">
        <Select onChange={onHandleSize} options={sizeOptions} />
      </Form.Item>
      <Form.Item label="Font Color">
        <Select onChange={onHandleColor} options={colorOptions} />
      </Form.Item>
      {name && (
        <Form.Item>
          <Button onClick={onHandleSubmit}>Submit</Button>
        </Form.Item>
      )}
    </Form>
  );
};
export default Post;
