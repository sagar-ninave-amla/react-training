/* eslint-disable react-hooks/exhaustive-deps */
import { Image, Button } from "antd";
import { FC, useState, useEffect, ReactElement } from "react";
import {
  useParams,
  useLocation,
  useNavigate,
  Location,
  Params,
  NavigateFunction,
} from "react-router-dom";

const PostItem: FC = (): ReactElement => {
  const { name }: Params<any> = useParams();
  const { search }: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();

  const [image, setImage] = useState<string>("");

  useEffect(() => {
    fetch(`https://cataas.com/cat/says/${name}${search}`).then((result) =>
      setImage(result?.url)
    );
  }, []);

  return (
    <>
      <div style={{ margin: "2rem" }}>
        {image ? (
          <Image src={image} width="300px" height="auto" />
        ) : (
          "Loading..."
        )}
      </div>
      <Button onClick={() => navigate(-1)} style={{ margin: "0 0 2rem 2rem" }}>
        {" "}
        Back{" "}
      </Button>
    </>
  );
};

export default PostItem;
