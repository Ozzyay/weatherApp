import { ktoc, ktof } from './weatherConversion';

const domUpdates = (() => {
  const refreshPage = function (weatherObject, limiter) {
    const descDiv = document.querySelector('.readout');
    const locDiv = document.querySelector('.loc');
    const tempDiv = document.querySelector('.bigTemp');
    const feelsDiv = document.querySelector('.feelsLike');
    const pressureDiv = document.querySelector('.wind');
    const humiDiv = document.querySelector('.humidity');
    const bigUnit = document.querySelector('.smallDeg');
    if (limiter === 'c') {
      tempDiv.innerHTML = Math.ceil(ktoc(weatherObject.temp));
      bigUnit.innerHTML = '°C';
      const feelsNum = Math.ceil(ktoc(weatherObject.feelsLike));
      feelsDiv.innerText = `Feels Like: ${feelsNum}°C`;
    } else {
      tempDiv.innerHTML = Math.ceil(ktof(weatherObject.temp));
      const feelsNum = Math.ceil(ktof(weatherObject.feelsLike));
      feelsDiv.innerHTML = `Feels Like: ${feelsNum}°F`;
      bigUnit.innerText = '°F';
    }
    descDiv.innerHTML = `${weatherObject.description}`;
    locDiv.innerHTML = `${weatherObject.city}, ${weatherObject.country}`;
    pressureDiv.innerHTML = `Pressure: ${weatherObject.pressure}mb`;
    humiDiv.innerHTML = `Humidity: ${weatherObject.humidity}%`;
  };
  return {
    refreshPage,
  };
})();

export default domUpdates;
