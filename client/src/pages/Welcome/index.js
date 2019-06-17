import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    ...theme.typography.button,
    margin: theme.spacing(1),
  },
  input: {
    display: "none",
  },

  text: {
    textAlign: "center"
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <img src="https://images.unsplash.com/photo-1559598466-e661b0d4a62b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="intro"></img>
        </Grid>
        <Grid item xs={3}>
          <h1>About Us</h1>
          <h6>Our Mission is to provide our community with fresh, nutritious meal options for the busy lifestyle.</h6><br /> 
          <p>1. Please order Tuesday thru Saturday.</p><br />
          <Divider />
          <p>2. Monday is cook , deliver & pickup day 4-7pm.</p><br />
          <Divider />
          <p>3. Order from the corresponding week of the month: For example: Week one menu goes with Week One of the month.</p><br />
          <Divider />
          <p>Please email us with questions; We are happy to help</p><br />
          <Link to="/signup"><Button variant="contained" color="primary" className={classes.button}>
            Get Started
          </Button></Link>
          
        </Grid>
        <Grid item xs={12}>
          <h1 className={classes.text}>Take a look at some of the food we have to offer.</h1>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}