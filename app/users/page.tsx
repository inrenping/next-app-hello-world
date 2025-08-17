import React from 'react'

interface WeatherResponse {
  message: string;
  status: number;
  date: string;
  time: string;
  cityInfo: {
    city: string;
    citykey: string;
    parent: string;
    updateTime: string;
  };
  data: {
    shidu: string;
    pm25: number;
    pm10: number;
    quality: string;
    wendu: string;
    ganmao: string;
    forecast: Array<{
      date: string;
      high: string;
      low: string;
      ymd: string;
      week: string;
      sunrise: string;
      sunset: string;
      aqi: number;
      fx: string;
      fl: string;
      type: string;
      notice: string;
    }>;
    yesterday: {
      date: string;
      high: string;
      low: string;
      ymd: string;
      week: string;
      sunrise: string;
      sunset: string;
      aqi: number;
      fx: string;
      fl: string;
      type: string;
      notice: string;
    };
  };
}

const UsersPage = async () => {
  const res = await fetch('http://t.weather.sojson.com/api/weather/city/101030100',
  )
  const weather: WeatherResponse = await res.json()
  return (
    <>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {weather.data.forecast.map((w) => (
            <tr key={w.date}>
              <td>{w.date}</td>
              <td>{w.high}</td>
              <td>{w.low}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default UsersPage
