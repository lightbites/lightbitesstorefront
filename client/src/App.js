import React from "react";
import Container from "@material-ui/core/Container";
import SignInSide from "../src/pages/Sign-In";
import Header from "../src/components/Header";

function App() {
  return <Container maxWidth="xl">
    <Header />
    <SignInSide />
  </Container>;
}

export default App;
