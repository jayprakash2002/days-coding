import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SeachBox.css";
import { useState } from 'react';



export default function searchBox(){
    let [city,setCity]=useState("");


    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="0375434a1802c588c046e4d3138395e4";


    let getWeatherInfo = async ()=>{
        let response= await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        let jsonResponse= await response.json();
        let result={
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,

        };
        console.log(result);

    };
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    };


    let handleSubmit=(evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }


  return (
    <div className="searchbox">
        <h3>Search for the weather</h3>

        <form action="" onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required  value={city} onChange={handleChange}/> 
        <br /> <br /> <br />
        <Button variant="contained" type='submit'>Search</Button>
        </form>
    </div>
    
  );
}