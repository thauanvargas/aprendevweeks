import React from "react";
import "./App.css";
import Authentication from "./pages/Authentication";
import Core from "./pages/Core";

import { Router } from "@reach/router";

function App() {
  return (
    <div>
      <Router>
        <Authentication path="/" />
        <Core path="/dashboard" />
      </Router>
    </div>
  );
}

export default App;
