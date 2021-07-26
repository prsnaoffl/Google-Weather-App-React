import React,{useState} from 'react'
import Input from './Component/Input';
import axios from "axios";
import Result from "./Component/Result"


const App = () => {
  const [input, setInput] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  const findWeather =async() =>{
     const apikey="d455e263a71e589153cd2052a9026f0c";
     const unit= "metric";
     const url="https://api.openweathermap.org/data/2.5/weather?q= "+
     input +
     "&appid=" +apikey +
     "&units=" +unit;
     const response =await axios.get(url);
     const temp= await response.data.main.temp;
     const weatherDescription= await response.data.weather[0].description;
     const icon= await response.data.weather[0].icon;
     const imageURL= "https://openweathermap.org/img/wn/" + icon +"@2x.png";
    //  console.log(temp,weatherDescription,imageURL);
     setTemp(temp);
     setDescription(weatherDescription);
     setIcon(imageURL);
     setInput("");

    };

  return (
    <div className="app">
      {temp === "" ? (
        <Input input={input} setInput={setInput} findWeather={findWeather} />
      ) : (
        <Result temp={temp} desc={description} icon={icon} setTemp={setTemp}/>
      )}
    </div>
)
 
}

export default App
