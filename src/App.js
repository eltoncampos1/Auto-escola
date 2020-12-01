import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ThemeProvider from "../src/styles/ThemeProvider";
import GlobalStyle from "../src/styles/GlobalStyle";
import Routes from "./routes";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
