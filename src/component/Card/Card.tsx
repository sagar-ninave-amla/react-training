import styled from "styled-components";

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  font-size: 1.2em;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const Disable = styled.button`
  background-color: gray;
  color: black;
  font-size: 1.2em;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    border: 1px solid #45a049;
  }
`;
const Card = () => {
  return (
    <div>
      <h1> Card</h1>
      <Button> Like</Button>
      <Button> Share</Button>
      <Button> Edit </Button>
      <Disable> Action </Disable>
    </div>
  );
};

export default Card;
