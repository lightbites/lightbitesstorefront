import React from "react";
import Container from "@material-ui/core/Container";
import SignInSide from "../src/pages/Sign-In";
import Header from "../src/components/Header";

function App() {
  return <div>
    <Header />
    <Container maxWidth="xl">
    
      <SignInSide />
    </Container>
  </div>;
}

export default App;
