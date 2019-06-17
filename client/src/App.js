import React from "react";
import Container from "@material-ui/core/Container";
import Header from "../src/components/Header-Welcome";
import StickyFooter from "../src/components/Footer";
import Welcome from "./pages/Welcome";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "5%"
  }
}));



function App() {
  const classes = useStyles();
  return <div>
    <Header />
    <Container className={classes.root}>
      <Welcome />
    </Container>
    <StickyFooter />
  </div>;
}

export default App;
