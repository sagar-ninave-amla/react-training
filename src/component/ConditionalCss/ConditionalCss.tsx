import { useState } from "react";
import MyStyles from "./styles";

const ConditionalCss = () => {
  const [like, setLike] = useState(false);
  console.log("like", like);
  return (
    <button
      style={like ? MyStyles.like : MyStyles?.normal}
      // className={like ? "active" : "disabled"}
      onClick={() => setLike(!like)}
    >
      {" "}
      Like{" "}
    </button>
  );
};

export default ConditionalCss;
