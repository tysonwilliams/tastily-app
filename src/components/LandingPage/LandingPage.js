import React from "react";
import styled from "styled-components";
// import Signup from '@bit/rajatk16.hooks-form.signup';

// import 'bulma/css/bulma.css';

import SignupForm from '../SignupForm';

const Title = styled.h1`
  color: #10c7cd;
`;

const Subtitle = styled.h2`
  color: black;
`;

const Tastily = styled.span`
  color: #10c7cd;
`;

const ThetaNutrition = styled.span`
  color: black;
`;

function LandingPage() {
  return (
    <div className="App">
      <Title>
        Tastily / <ThetaNutrition>Theta Nutrition</ThetaNutrition>
      </Title>
      <Subtitle>
        Welcome to the future site of <Tastily>Tastily</Tastily>, the{" "}
        <span style={{ textDecoration: "underline" }}>AI based</span> nutrition
        management app!
      </Subtitle>
      <SignupForm />
    </div>
  );
}

export default LandingPage;
