import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./styles.css";

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

function App() {
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
          href="https://appw.pitchdeck.io/docs/?plKFAu"
          style={{ textDecorationColor: "#10c7cd", color: "black" }}
        >
          The Pitch Deck
        </a>
      </h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
