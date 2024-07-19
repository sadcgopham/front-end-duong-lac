import React, { useState } from "react";
import useFetch from "./fetchapi";
import './Api.scss';
const WeatherHook = () => {
  const [day, setDate] = useState(new Date());
  const [city, setcity]=useState('hanoi')
  const [newcity,setnewcity] = useState('')
  const {data:weather,loading} = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b297a0db8027375c571e6c4eb4c954ae`);
  const change = () => {
   setcity(newcity)
    setDate(day)
  }
  const ceydown = (e) => {
    if(e.code==='Enter'){
       change()
      }
}
  const handleinput = (e) => {
    setnewcity(e.target.value)
  }
return (
  <div className="contener-main">
      {loading === false && weather && weather.cod === 200 && (
        <div className="vv"> 
         <div className="contener" > 
         <input
            className="seafch"
            value={newcity}
            type="text"
            onChange={(e) => handleinput(e)}
            onKeyDown={(e) =>ceydown(e) }
          />
          <div className="contener">
          <div className="title">
        <span className="city">{weather.name}.</span>
        <span className="contry">{weather.sys.country}</span>
        <span className="visit"></span>
    </div>
    <div className="time">{day.toDateString()},{day.getHours()}:{day.getMinutes()}</div>
    <div className="tt"><span className="temp">{weather.main.temp.toFixed(0)-273} C </span></div>
    <h2 className="d">{weather.weather[0].main}</h2>
    <div className="forder">
        <div>
        <br/>
            <span className="a">
               {weather.visibility + 'm'}
            </span>
        </div> 
       <div>
         <br/>
        <span className="b">
          {weather.wind.speed + 'km/h'}
        </span>
    </div> 
    <div>
    <br/>
        <span className="c">
          {weather.main.humidity    + '%'}
        </span>
     </div> 
    </div>

    </div>
    </div>
    </div>
  )}
      {loading === true  && <div>Đang tải...</div>}
      {weather  && weather.status !== 200 && <div> Nhập sai tên thành phố</div>}
  </div>
  );
};

export default WeatherHook;