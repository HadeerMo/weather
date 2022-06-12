"use strict";
let homeLi = document.querySelector("li a")
let myWeather=document.querySelector(".items")
let searchInput=document.querySelector(".search-input")
let searchButtom=document.querySelector(".search-buttom")
if (window.location.href.includes("weather/index.html")) {
    homeLi.style = "border:solid rgb(0, 154, 216) 2px; color: rgb(0, 154, 216)!important"
}
async function searchCountry(country) {
    var response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q='+country+'&days=3');
    if (response.ok &&  response.status == 200 ) {
        let myday = new Date()
        var result = await response.json();
        let months=["January","February","March","April","May","June","July","August","September","October","November","December"]
        let days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        let dayNum=myday.getDay()
        let afterDay=dayNum+1;
        if(afterDay>6){
            afterDay=0
        }
        let afterTwoDay=afterDay+1;

        if(afterTwoDay>6){
            afterTwoDay=0
        }
        myWeather.innerHTML=`<div class="col-md-4 item px-0 mb-3 rounded-l-5">
        <div class="d-flex justify-content-between px-3 item-top pt-2 pb-0">
          <p>${days[dayNum]}</p>
          <p>${myday.getDate()+months[myday.getMonth()]}</p>
        </div>
        <div class="p-4">
          <p class="fs-5 light-white">${result.location.name}</p>
          <h2 class="text-white mb-3">${result.current.temp_c}<sup>o</sup>C</h2>
          <span class="ms-3">
            <img src="https:${result.current.condition.icon}" width="30%">
          </span>
          <h5 class="mt-2 mb-4 blue-sky">${result.current.condition.text}</h5>
          <div class="info-icon light-white">
            <span><img src="imges/icon-umberella.png" class="me-2">20%</span>
            <span><img src="imges/icon-wind.png" class="mx-2">18Km/h</span>
            <span><img src="imges/icon-compass.png" class="mx-2">East</span>
          </div>

        </div>
      </div>
      <div class="col-md-4 item middle-item px-0 mb-3">
        <div class="d-flex justify-content-center px-3 item-top middle-item-top rounded-0 pt-2 pb-0">
          <p>${days[afterDay]}</p>
        </div>
        <div class="p-4 text-center">
          <span class="mt-4 d-flex justify-content-center">
            <img src="https:${result.forecast.forecastday[1].day.condition.icon}" class="w-15">
          </span>
          <p class="mt-3 mb-0 fs-4 fw-bold text-white">${result.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</p>
          <p class="light-white">${result.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</p>
          <h5 class="mt-2 mb-4 blue-sky">${result.forecast.forecastday[1].day.condition.text}</h5>
        </div>
      </div>
      <div class="col-md-4 item  px-0 rounded-r-5 mb-3">
        <div class="d-flex justify-content-center px-3 item-top rounded-l-none pt-2 pb-0">
          <p>${days[afterTwoDay]}</p>
        </div>
        <div class="p-4 text-center">
          <span class="mt-4 d-flex justify-content-center">
            <img src="https:${result.forecast.forecastday[2].day.condition.icon}" class="w-15">
          </span>
          <p class="mt-3 mb-0 fs-4 fw-bold text-white">${result.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</p>
          <p class="light-white">${result.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</p>
          <h5 class="mt-2 mb-4 blue-sky">${result.forecast.forecastday[2].day.condition.text}</h5>
        </div>
      </div>`
    }

}

searchCountry("cairo")
searchInput.addEventListener("keyup",e=> searchCountry(e.target.value))

searchButtom.addEventListener("click",()=> searchCountry(searchInput.value))



