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
  const res = await fetch('http://t.weather.sojson.com/api/weather/city/101030100', { cache: 'no-store' }
  )
  const weather: WeatherResponse = await res.json()
  return (
    <>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>date</th>
            <th>high</th>
            <th>low</th>
            <th>ymd</th>
            <th>week</th>
            <th>sunrise</th>
            <th>sunset</th>
            <th>aqi</th>
            <th>fx</th>
            <th>fl</th>
            <th>type</th>
            <th>notice</th>
          </tr>
        </thead>
        <tbody>
          {weather.data.forecast.map((w) => (
            <tr key={w.date}>
              <td>{w.date}</td>
              <td>{w.high}</td>
              <td>{w.low}</td>
              <td>{w.ymd}</td>
              <td>{w.week}</td>
              <td>{w.sunrise}</td>
              <td>{w.sunset}</td>
              <td>{w.aqi}</td>
              <td>{w.fx}</td>
              <td>{w.fl}</td>
              <td>{w.type}</td>
              <td>{w.notice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default UsersPage
