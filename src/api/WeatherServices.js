import { getDate } from "../utilities/getDate";
const weatherUrl = "https://api.openweathermap.org/data/2.5";
const cityUrl = "https://api.openweathermap.org/geo/1.0/direct?q";
const dateToday = new Date();

const apiKey = import.meta.env.VITE_apiKey


export async function findCoordinates(cityName) {
  const response = await fetch( 
    `${cityUrl}=${cityName}&limit=5&appid=${apiKey}`
  );
  const data = await response.json();
  if (data.cod == 429 || data.length === 0) {
    throw new Error("Cannot find the city you are looking for!");
  }
  
  return data[0];
}

export async function get5DayForecast(lat, lon) {
  try {
    const response = await fetch(
      `${weatherUrl}/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    let currentDate = getDate(data.list[0].dt);
    let avg_temp = 0,
      avg_clouds = 0,
      avg_wind = 0,
      avg_humid = 0,
      totalCount = 0;
    let iconDay, descriptionDay;
    const weekForecast = [];
    data.list.forEach((element) => {
      const elementDate = getDate(element.dt);
      // && condition is for the last element since the forEach will end
      // without going in the else part if the dates of the last 2 elements are the same

      if (
        elementDate.date === currentDate.date &&
        element.dt !== data.list[data.list.length - 1].dt
      ) {
        avg_temp += element.main.temp;
        avg_clouds += element.clouds.all;
        avg_wind += element.wind.speed;
        avg_humid += element.main.humidity;
        iconDay = element.weather[0].icon;
        descriptionDay = element.weather[0].description;
        totalCount++;
      } else {
        avg_temp /= totalCount;
        avg_clouds /= totalCount;
        avg_wind /= totalCount;
        avg_humid /= totalCount;

        weekForecast.push({
          day: currentDate.day,
          date: currentDate.date,
          icon: iconDay,
          description: descriptionDay,
          temp: avg_temp,
          clouds: avg_clouds,
          wind: avg_wind,
          humidity: avg_humid,
        });

        currentDate = elementDate;
        avg_temp = element.main.temp;
        avg_clouds = element.clouds.all;
        avg_wind = element.wind.speed;
        avg_humid = element.main.humidity;
        iconDay = element.weather.icon;
        descriptionDay = element.weather.description;
        totalCount = 1;
      }
    });

    return weekForecast;
  } catch (err) {
    console.log(err);
  }
}

export async function getCurrentWeather(lat, lon) {
  try {
    const response = await fetch(
      `${weatherUrl}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getTodayForecast(lat, lon) {
  let count = 1;
  try {
    const response = await fetch(
      `${weatherUrl}/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    const todayForecast = [];
    data.list.forEach((element) => {
      const elementDate = new Date(element.dt_txt);
      if (elementDate.getDate() === dateToday.getDate() && count <= 5) {
        todayForecast.push(element);
        count++;
      }
    });

    return todayForecast;
  } catch (err) {
    console.log(err);
  }
}
