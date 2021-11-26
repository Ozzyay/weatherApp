import './style.css';
import weatherObject from './weatherObject';
import domUpdates from './domUpdates';
import { ftoc, ctof } from './weatherConversion';

let objectifiedWeather = {};

const APIKey = '3f9a5d5974334409e8c763223dca80a0';
let format = 'f';
const link = 'http://api.openweathermap.org/data/2.5/weather?q=';
const apiLink = `&APPID=${APIKey}`;
const getter = async function (arg) {
  try {
    const response = await fetch(arg, { mode: 'cors' });
    const data = await response.json();
    const description = data.weather[0].main;
    const city = data.name;
    const { country } = data.sys;
    const { temp } = data.main;
    const feelsLike = data.main.feels_like;
    const { pressure } = data.main;
    const { humidity } = data.main;
    objectifiedWeather = weatherObject({
      description, city, country, temp, feelsLike, pressure, humidity,
    });
    domUpdates.refreshPage(objectifiedWeather, format);
  } catch (error) {
    alert('There was an error searching for your location, please try again!');
  }
};

window.addEventListener('load', () => {
  const baseLoc = 'Gold%20Coast';
  const call = link + baseLoc + apiLink;
  getter(call);
});

const toggle = document.querySelector('input[name=checkbox]');
toggle.addEventListener('change', () => {
  if (format === 'f') {
    format = 'c';
    domUpdates.refreshPage(objectifiedWeather, format);
  } else {
    format = 'f';
    domUpdates.refreshPage(objectifiedWeather, format);
  }
});

const searchBar = document.querySelector('form');
searchBar.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(searchBar);
  const searchTerm = formData.get('search');
  const noSpaceSearchterm = searchTerm.replace(/ /g, '%20');
  const search = link + noSpaceSearchterm + apiLink;
  getter(search);
});
