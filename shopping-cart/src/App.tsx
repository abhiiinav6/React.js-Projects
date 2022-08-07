import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import NavBar from "./components/NavBar";
import { ShoppingCartProvider } from "./context/shoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Container>
        <NavBar />
        <Container
          className="bg-light mb-4 mx-0"
          style={{ width: "100%", textAlign: "center" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
