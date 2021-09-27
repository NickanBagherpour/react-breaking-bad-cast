import React from "react";
import spinner from "../../assets/img/spinner.gif";
import classes from "./Spinner.module.css";

const Spinner = () => {
  return <img className={classes.spinner} src={spinner} alt="Loading" />;
};

export default Spinner;
