// const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
//remember, make a .env file and save your key
// const api_key = 'Your key here';
import axios from "axios";
const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;
let cont = document.getElementById("box");
let input = document.getElementById("city");
let btn = document.getElementById("getTemp");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  let city = input.value.toLowerCase();
  console.log(city);

  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`;

  const sys = axios
    .get(url)
    .then(function (response) {
      // handle success : This is too target the endpoints to the api
      cont.innerHTML = `<h2 id="return">The Temperture in ${city} is ${response.data.main.temp}</h2>`;
      console.log(response.data.main.temp);
    })
    .catch(function (error) {
      // handle error
      cont.innerHTML = `<h2>"Please try again, error</h2>`;
      console.log(error);
    });
});
