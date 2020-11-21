import React from "react";
import ThemeProvider from "../src/styles/ThemeProvider";
import GlobalStyle from "../src/styles/GlobalStyle";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
