import React from 'react'
import WeatherCurrent from './WeatherCurrent'
import styles from './WeatherContent.module.css'
import ForecastToday from './ForecastToday'
import ForecastWeek from './ForecastWeek'

const WeatherContent = (props) => {
  return (
    <div className={styles.container}>
        <WeatherCurrent currentWeatherData={props.currentWeatherData} />
        <ForecastToday todayForecastData={props.todayForecastData}/>
        <ForecastWeek weekForecastData={props.weekForecastData} />
    </div>
  )
}

export default WeatherContent