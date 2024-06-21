import React, { useState } from "react";
import { Input, Select } from "antd";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const navigate = useNavigate();
  return (
    <div style={{ width: "200px" }}>
      Name
      <Input
        placeholder="enter name"
        onChange={(e) => setName(e.target.value)}
      />
      Font Color
      <Select
        style={{ width: 120 }}
        onChange={(e) => setColor(e)}
        options={[
          { value: "red", label: "Red" },
          { value: "green", label: "Green" },
          { value: "blue", label: "Blue" },
          { value: "black", label: "Black" },
          { value: "white", label: "White" },
        ]}
      />
      Font Size
      <Select
        style={{ width: 120 }}
        onChange={(e) => setSize(e)}
        options={[
          { value: "100", label: "100" },
          { value: "200", label: "200" },
          { value: "300", label: "300" },
          { value: "400", label: "400" },
          { value: "500", label: "500" },
        ]}
      />
      {name && (
        <button
          onClick={() =>
            navigate(`${name}?fontSize=${size}&fontColor=${color}`)
          }
        >
          {" "}
          Submit{" "}
        </button>
      )}
    </div>
  );
};
export default Post;
