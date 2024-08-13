async function getWeather(url, cityName) {
  try {
    let responseObj = await fetch(url);
    console.log(responseObj);
    if (responseObj.ok) {
      let jsonObj = await responseObj.json();

      let temprature = (jsonObj.main.temp - 273.15).toFixed(2);

      let div = document.querySelector("#weather-info");

      div.innerHTML = `The temperature of ${cityName} is ${temprature}°C`;
    } else {
      let div = document.querySelector("#weather-info");
      div.innerHTML = "please enter the valid input";
    }
  } catch (err) {
    alert("something went wrong");
  }
}

let form = document.querySelector("#weather-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let input = document.querySelector("#city");

  let cityName = input.value;
  // console.log(cityName);

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=48ba8930003d07d6c9943b9949efca45`;
  getWeather(url, cityName);

  input.value ="";
});


