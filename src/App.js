import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage.js";
import PitchPage from "./components/PitchPage/PitchPage.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={LandingPage} />
        <Route path="/pitch/" component={PitchPage} />
      </div>
    </Router>
  );
}

export default App;
