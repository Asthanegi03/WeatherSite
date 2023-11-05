import { Stack, Typography } from "@mui/material";
import { getDate } from "../../utilities/getDate";
import styles from './WeatherCurrent.module.css'

import AirIcon from '@mui/icons-material/Air';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const WeatherCurrent = (props) => { //object deconstructing
  const { currentWeatherData } = props;
  const currentDate = getDate(currentWeatherData.dt);
  const weatherIcon = currentWeatherData.weather[0].icon;
  return (
    <Stack alignItems={"center"} spacing={2}>
      <Typography
        variant="h5"
        fontWeight={600}
        letterSpacing={1.2}
        color={"secondary.dark"}
        className={styles.test}
      >
        CURRENT WEATHER
      </Typography>
      <Stack
        direction={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        textAlign={"center"}
        width={"100%"}
      >
        <Stack>
          <Typography
            letterSpacing={1.3}
            variant="h6"
            fontWeight={500}
            color={"primary"}
          >
            {currentWeatherData.name}, {currentWeatherData.sys.country}
          </Typography>
          <Typography variant="body1" fontSize={"0.8em"} color={"secondary"}>
            Today {currentDate.date} {currentDate.month}
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="h6" fontWeight={500} color={"primary"}>
            {currentWeatherData.main.temp} &deg;C
          </Typography>
          <Typography variant="body1" fontSize={"0.8em"} color={"secondary"}>
            {currentWeatherData.weather[0].description}
          </Typography>
        </Stack>
        <div>
          <img className={styles.weatherIcon} src={`./icons/${weatherIcon}.png`} alt="" />
        </div>
      </Stack>
      <Stack alignItems={"center"} spacing={2.5} pt={7} id={styles.airConditionDiv}>
        <Typography
          variant="h5"
          fontWeight={600}
          letterSpacing={1.2}
          color={"secondary.dark"}
          mt={-2}
        >
          AIR CONDITIONS astha
        </Typography>
        <Stack
          direction={"row"}
          spacing={5}
          textAlign={"center"}
          width={"100%"}
        >
          <Stack spacing={0.5} >
            <Typography
              variant="h6"
              fontSize={"0.9em"}
              fontWeight={300}
              color={"secondary"}
              className={`${styles.conditionText} ${styles.double}`}
            >
               <ThermostatIcon  className={styles.conditionIcon} /> Real Feel
            </Typography>
            <Typography
              letterSpacing={1.3}
              variant="body1"
              fontWeight={500}
              color={"primary"}
            >
              {currentWeatherData.main.feels_like} &deg;C
            </Typography>
          </Stack>
          <Stack spacing={0.5}>
            <Typography
              variant="h6"
              fontSize={"0.9em"}
              fontWeight={300}
              color={"secondary"}
              className={styles.conditionText}
            >
              <AirIcon   className={styles.conditionIcon} /> Wind
            </Typography>
            <Typography
              letterSpacing={1.3}
              variant="body1"
              fontWeight={500}
              color={"primary"}
              className={`${styles.conditionText} ${styles.double}`}
            >
              {currentWeatherData.wind.speed} m/s
            </Typography>
          </Stack>
          <Stack spacing={0.5} >
            <Typography
              variant="h6"
              fontSize={"0.9em"}
              fontWeight={300}
              color={"secondary"}
              className={styles.conditionText}
            >
             <FilterDramaIcon className={styles.conditionIcon} /> Clouds
            </Typography>
            <Typography
              letterSpacing={1.3}
              variant="body1"
              fontWeight={500}
              color={"primary"}
              
            >
              {currentWeatherData.clouds.all} %
            </Typography>
          </Stack>
          <Stack spacing={0.5}>
            <Typography
              variant="h6"
              fontSize={"0.9em"}
              fontWeight={300}
              color={"secondary"}
              className={styles.conditionText}
            >
             <WaterDropIcon className={styles.conditionIcon} /> Humidity
            </Typography>
            <Typography
              letterSpacing={1.3}
              variant="body1"
              fontWeight={500}
              color={"primary"}
            >
              {currentWeatherData.main.humidity} %
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default WeatherCurrent;
