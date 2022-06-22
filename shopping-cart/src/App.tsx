import React from "react";
import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import NavBar from "./components/NavBar";

function App() {
  return (<>
    <NavBar />
    <Container className="bg-light mb-4 mx-0">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Container> </>
  );
}

export default App;
