const testnum = document.getElementById("testnum");

///////////////////////////////////////////////////////////////
// LOCATION - translate from city, state, country to lat/lon //
///////////////////////////////////////////////////////////////

function getLocation() {
    owmGeocode.city = "Worcester, MA";
    owmGeocode.request(displayLocation);
}

function testLocation() {
    owmGeocode.testRequest(testnum.value, displayLocation);
}

///////////////////////////////////////////////////////////////
// WEATHER - the current weather conditions                  //
///////////////////////////////////////////////////////////////

function getWeather() {
    owmWeather.lat = owmGeocode.getLat();
    owmWeather.lon = owmGeocode.getLon();

    owmWeather.request(displayWeather);
}

function testWeather() {
    owmWeather.testRequest(testnum.value, displayWeather);
}

///////////////////////////////////////////////////////////////
// FORECAST                                                  //
///////////////////////////////////////////////////////////////

function getForecast() {
    owmForecast.lat = owmGeocode.getLat();
    owmForecast.lon = owmGeocode.getLon();

    owmForecast.request(displayForecast);
}

function testForecast() {
    owmForecast.testRequest(testnum.value, displayForecast);
}

///////////////////////////////////////////////////////////////
// POLLUTION - the air quality index (AQI) and contaminants  //
///////////////////////////////////////////////////////////////

function getPollution() {
    owmPollution.lat = owmGeocode.getLat();
    owmPollution.lon = owmGeocode.getLon();

    owmPollution.request(displayPollution);
}

function testPollution() {
    owmPollution.testRequest(testnum.value, displayPollution);
}

function outfitSuggestion() {
    
    if(owmWeather.json.main.temp_max>80){
        document.getElementById("outfit-suggestion").innerHTML("Short's and T-shirt, plus lot's of sunscreen");
    } else if(owmWeather.json.main.temp_max>70){
        document.getElementById("outfit-suggestion").innerHTML("Shorts and T-shirt");
    } else if(owmWeather.json.main.temp_max>63){
        document.getElementById("outfit-suggestion").innerHTML("Long pants and T-shirt");
    } else if(owmWeather.json.main.temp_max>50){
        document.getElementById("outfit-suggestion").innerHTML("Long Pants and long shirt");
    } else if(owmWeather.json.main.temp_max>35){
        document.getElementById("outfit-suggestion").innerHTML("Long Pants and long shirt, add a jacket too");
    } else if (owmWeather.json.main.temp_max>0){
        document.getElementById("outfit-suggestion").innerHTML("Heavy pants and Jacket");
    }
     else{
        document.getElementById("outfit-suggestion").innerHTML("Don't go outside bro");
    }
}


function changeBackground() {
    const loc = document.getElementById("location");
    loc.innerHTML = `Running example.js...`;

    const weatherReport = document.getElementById("weather-report");
    // See display.js for more examples
    weatherReport.innerHTML = `Weather report for ${owmGeocode.city}: ${owmWeather.json.weather[0].description}`;

    if (owmWeather.json.main.temp_max>80) {
        document.body.style.backgroundColor="red"
    } else if (owmWeather.json.main.temp_max>70) {
        document.body.style.backgroundColor="orange"
    } else 
        document.body.style.backgroundColor="blue"
}