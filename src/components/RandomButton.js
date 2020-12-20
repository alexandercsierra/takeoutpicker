import React from "react";
import styled from "styled-components";

const RandomButton = ({ setCurrentRest, placesList, isDisabled }) => {
  const pickRest = () => {
    const randomNum = Math.floor(Math.random() * placesList.length);
    return placesList[randomNum];
  };

  const handleClick = () => {
    setCurrentRest(pickRest());
  };

  return (
    <div>
      <Button
        style={{
          background: isDisabled ? "black" : "dodgerblue",
          color: isDisabled ? "grey" : "white",
        }}
        disabled={isDisabled}
        onClick={handleClick}
      >
        WHAT DO I EAT???
      </Button>
    </div>
  );
};

export default RandomButton;

const Button = styled.button`
  fontsize: 1.2rem;
  fontweight: 900;
  background: dodgerblue;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
`;
