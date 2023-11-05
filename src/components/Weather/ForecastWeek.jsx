import React from 'react'
import styles from './ForecastWeek.module.css'
import { Stack, Typography } from '@mui/material'
import WeatherCard from './WeatherCard'

const ForecastWeek = (props) => {

  const {weekForecastData} = props
  const weeklyForecast = weekForecastData.map(currentDay=>(
    <WeatherCard key={currentDay.date} weatherData={currentDay}  />
  ))
  return (
    <Stack alignItems={"center"} className={styles.weeklyForecast} spacing={2} >
        <Typography
          variant="h5"
          fontWeight={600}
          letterSpacing={1.2}
          color={"secondary.dark"}
        >
          WEEKLY FORECAST
        </Typography>
        <Stack  className={styles.responsiveWeek} alignItems={"center"} spacing={0.7}>
        {weeklyForecast}
        </Stack>
        
    </Stack>
  )
}

export default ForecastWeek