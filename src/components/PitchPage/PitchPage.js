import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: #10c7cd;
`;

const Subtitle = styled.h2`
  color: black;
`;

const Tastily = styled.span`
  color: #10c7cd;
`;

const AlgoHealth = styled.span`
  color: black;
`;

function PitchPage() {
  return (
    <div className="App">
      <Title>
        Tastily / <AlgoHealth>Algo Health</AlgoHealth>
      </Title>
      <Subtitle>
        Welcome to the future site of <Tastily>Tastily</Tastily>, the{" "}
        <span style={{ textDecoration: "underline" }}>AI based</span> nutrition
        management app!
      </Subtitle>
      <h2>
        <a
          href="https://appw.pitchdeck.io/docs/?lyE2Kb"
          style={{ textDecorationColor: "#10c7cd", color: "black" }}
        >
          The Pitch Deck
        </a>
      </h2>
    </div>
  );
}

export default PitchPage;
