import React from "react";
import Container from "@material-ui/core/Container";
import Header from "../src/components/Header-Welcome";
import StickyFooter from "../src/components/Footer";
import Welcome from "./pages/Welcome";

function App() {
  return <div>
    <Header />
    <Container>
    
      <Welcome />
    </Container>
    <StickyFooter />
  </div>;
}

export default App;
