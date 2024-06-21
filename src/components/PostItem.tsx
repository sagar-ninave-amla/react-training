import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const PostItem = () => {
  const [image, setImage] = useState("");
  const { name } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://cataas.com/cat/says/${name}${search}`).then((result) =>
      setImage(result?.url)
    );
  }, []);
  return (
    <>
      <div style={{ margin: "2rem" }}>
        <button onClick={() => navigate(-1)}> Previous </button>
        <button onClick={() => navigate(1)}> Next </button>
      </div>
      {image ? <img src={image} width="300px" height="auto" /> : "Loading..."}
    </>
  );
};

export default PostItem;
