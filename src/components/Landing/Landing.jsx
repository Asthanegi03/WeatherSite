import React from "react";
import styles from "./Landing.module.css";
import splashImg from "../../assets/splash-icon.svg";
import { Typography } from "@mui/material";

const Landing = () => {
  return (                     //div container
    <div className={styles.outerdiv}>   
      <div className={styles.Landing}>          
        <img  src={splashImg} alt="" />
        <Typography variant="body1" color={"primary.main"}>
          Explore current weather data and 6-day forecast of more than 200,000
          cities!
        </Typography>                 
      </div>
    </div>
  );
};

export default Landing;
