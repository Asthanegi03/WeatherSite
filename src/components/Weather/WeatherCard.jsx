import { Stack, Typography } from "@mui/material";
import React from "react";
import styles from './WeatherCard.module.css'
import AirIcon from '@mui/icons-material/Air';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import WaterDropIcon from '@mui/icons-material/WaterDrop';



const WeatherCard = (props) => {
  const { weatherData } = props;

  const weatherIcon = weatherData.icon.replace('n','d')
  return (
    <div className={styles.weatherCardDiv}>
      <Stack sx={{transform:"translateY(4px)"}} spacing={0.5} >
        <Typography fontWeight={600} variant="h6" fontSize={"1.1em"} color={"primary.main"}>{weatherData.day}</Typography>
        <Stack direction={"row"} spacing={1.3} alignItems={"center"} >
          <img
            height={"30px"}
            width={"30px"}
            src={`./icons/${weatherIcon}.png`}
            alt="weatherIcon"
          />
          <Typography variant="body1" color={"secondary.light"}>{weatherData.description}</Typography>
        </Stack>
      </Stack>
      <Stack spacing={0.5} justifySelf={"center"} alignItems={"c"} >
        <Typography color={"primary"} variant="body1" fontWeight={500}> <ThermostatIcon className={styles.conditionIcons} /> {weatherData.temp.toFixed()} &deg;C </Typography>
        <Typography color={"primary"} variant="body1" fontWeight={500}> <FilterDramaIcon className={styles.conditionIcons} /> {weatherData.clouds.toFixed()} % </Typography>
      </Stack>
      <Stack spacing={0.5} justifySelf={"flex-end"}>
        <Typography color={"primary"} variant="body1" fontWeight={500}> <AirIcon className={styles.conditionIcons} /> {weatherData.wind.toFixed()} m/s </Typography>
        <Typography color={"primary"} variant="body1" fontWeight={500}> <WaterDropIcon className={styles.conditionIcons} /> {weatherData.humidity.toFixed()} % </Typography>
      </Stack>
      
    </div>
  );
};

export default WeatherCard;
