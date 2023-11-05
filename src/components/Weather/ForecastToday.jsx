import { Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "./ForecastToday.module.css";
import { getDate } from "../../utilities/getDate";

const ForecastToday = (props) => {
  const { todayForecastData } = props;
  const iconUrl = "./icons";

  const forecastCards = todayForecastData.map((data) => {
    const time = getDate(data.dt);
    return (
      <div className={styles.cardContent} key={data.dt}>
        <Typography color={"secondary.main"} variant="body2" fontWeight={500}>
          {time.hour}:{time.minute}
        </Typography>
        <img
          height="50px"
          src={`${iconUrl}/${data.weather[0].icon}.png`}
          alt=""
        />
        <Typography
          color={"primary.main"}
          variant="body1"
          fontWeight={600}
          fontSize={"0.9em"}
        >
          {data.main.temp} &deg;C
        </Typography>
      </div>
    );
  });

  return (
    <Stack alignItems={"center"} spacing={1} className={styles.forecast} >
      <Typography
        variant="h5"
        fontWeight={600}
        mt={3}
        mb={-1}
        letterSpacing={1.2}
        color={"secondary.dark"}
      >
        TODAY'S FORECAST
      </Typography>
      <Typography variant="body1" fontSize={"0.8em"} color={"secondary"}>
        {`${todayForecastData.length} avaliable forecast`}
      </Typography>

      <Stack pt={3} direction={"row"} gap={1} flexWrap={"wrap"}  justifyContent={"center"}>
        {forecastCards}
      </Stack>
    </Stack>
  );
};

export default ForecastToday;
