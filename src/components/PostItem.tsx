import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const PostItem = () => {
  const [image, setImage] = useState("");
  const { name } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://cataas.com/cat/says/${name}${search}`).then((result) => {
      console.log("result : ", result?.url);
      setImage(result?.url);
    });
  }, []);
  return (
    <>
      <div style={{ margin: "2rem" }}>
        <button onClick={() => navigate(-1)}> Previous </button>
        <button onClick={() => navigate(1)}> Next </button>
        <button onClick={() => navigate("/post")}> Posts </button>
      </div>

      <img src={image} style={{ width: "300px", height: "auto" }} />
    </>
  );
};

export default PostItem;
