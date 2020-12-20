import React, { useState } from "react";
import styled from "styled-components";
import Restaurant from "./components/Restaurant";
import RandomButton from "./components/RandomButton";
import { places } from "./util";
import RestOptions from "./components/RestOptions";

const App = () => {
  const [placesList, setPlacesList] = useState(places);
  const [isDisabled, setIsDisabled] = useState(false);
  const [currentRest, setCurrentRest] = useState({
    name: "",
    type: "",
  });

  return (
    <div>
      <Title>DoorDash Decider</Title>
      <Container>
        <RestOptions
          placesList={placesList}
          setPlacesList={setPlacesList}
          setIsDisabled={setIsDisabled}
        />
        <RandomButton
          setCurrentRest={setCurrentRest}
          placesList={placesList}
          isDisabled={isDisabled}
        />
      </Container>
      <Restaurant name={currentRest.name} type={currentRest.type} />
    </div>
  );
};

export default App;

const Title = styled.h1`
  color: blue;
  font-size: 2rem;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
