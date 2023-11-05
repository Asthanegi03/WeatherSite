import React from 'react'
import { useState } from 'react'
import { getCurrentWeather,getTodayForecast,get5DayForecast,findCoordinates } from '../api/WeatherServices'

const useGetWeather = () => {             //arrow fun
    const [isLoading, setIsLoading] = useState(false)
    const [errorState, setErrorState] = useState(false)

    const [weatherInfo, setWeatherInfo] = useState([]) //value of state changes react rerenders page


    const getCoordinatesData = async (cityName)=>{
      setErrorState(false)
      setIsLoading(true)
      try{
        const cityData = await findCoordinates(cityName)
        getWeatherInfo(cityData.lat,cityData.lon,cityName)
      }
      catch(err){
        setErrorState(err.message)
      }
      
    }



    const getWeatherInfo = async(lat,lon,cityName)=>{
      try{
        let currentWeather = await getCurrentWeather(lat, lon)
        const todayForecast = await getTodayForecast(lat,lon)
        const weekForecast = await get5DayForecast(lat,lon)
        currentWeather = {...currentWeather,name:cityName.toUpperCase()}
        setWeatherInfo([currentWeather,todayForecast,weekForecast])
        setIsLoading(false)
      }
      catch(err){
        console.log("what error")
      }
    }

  return {
    isLoading,
    getCoordinatesData,
    errorState,
    weatherInfo
  }
}

export default useGetWeather