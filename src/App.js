import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ThemeProvider from "../src/styles/ThemeProvider";
import GlobalStyle from "../src/styles/GlobalStyle";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import ProductDetail from "./components/pages/productDetail/ProductDetail";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<ProductDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
