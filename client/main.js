'use strict';

$(document).ready(init);

function init() {
  getLocation();
  $('#get-zip').click(getZip);
}

function getZip() {
  var zipcode = $('.zip').val();
  getLocationByZip(zipcode);
  console.log(zipcode);
}

function getLocal() {
  var getLocation = getLocation;
}

function getLocation() {
  var getLocal = {enableHighAccuracy: true, timeout: 5000, maximumAge: 0};
  navigator.geolocation.getCurrentPosition(success, error, getLocal);
}

var weather = {};

function success(pos) {
  var forecast = 'http://api.wunderground.com/api/e644b8e592dd1261/forecast10day/q/' + pos.coords.latitude + ',' + pos.coords.longitude + '.json';
  var cond = 'http://api.wunderground.com/api/e644b8e592dd1261/conditions/q/' + pos.coords.latitude + ',' + pos.coords.longitude + '.json';

  $.getJSON(cond, function(response) {
    weather.current = response;
    displayForecast();
  });

  $.getJSON(forecast, function(response) {
    weather.forecast = response;
    displayForecast();
  });
}

function getLocationByZip(zip) {
  var forecast = 'http://api.wunderground.com/api/e644b8e592dd1261/forecast10day/q/zip' + zip + '.json';
  var cond = 'http://api.wunderground.com/api/e644b8e592dd1261/conditions/q/zip' + zip + '.json';

  $.getJSON(cond, function(response) {
    weather.current = response;
    displayForecast();
  });

  $.getJSON(forecast, function(response) {
    weather.forecast = response;
    displayForecast();
  });
}


function error(err) {
  console.log('Could not compute.', err);
}

function displayForecast() {
  if (Object.keys(weather).length === 2) {
    $('#currcity').text(weather.current.current_observation.display_location.city + ', ' + weather.current.current_observation.display_location.state);
    $('#currstate').text(weather.forecast.forecast.simpleforecast.forecastday[0].date.weekday_short + ', ' + weather.forecast.forecast.simpleforecast.forecastday[0].date.day + ' ' + weather.forecast.forecast.simpleforecast.forecastday[0].date.monthname);
    $('#currtemp').html(weather.current.current_observation.temp_f + '&deg;' + ' F');
    $('#currclimate').html('<img src ="' + weather.current.current_observation.icon_url + '">');

    $('#day1').text(weather.forecast.forecast.simpleforecast.forecastday[1].date.weekday_short);
    $('#d1date').text(weather.forecast.forecast.simpleforecast.forecastday[1].date.month + '/' + weather.forecast.forecast.simpleforecast.forecastday[1].date.day);
    $('#d1icon').html('<img src = "' + weather.forecast.forecast.simpleforecast.forecastday[1].icon_url + '">');
    $('#high1').html(weather.forecast.forecast.simpleforecast.forecastday[1].high.fahrenheit + '&deg;');
    $('#low1').html(weather.forecast.forecast.simpleforecast.forecastday[1].low.fahrenheit + '&deg;');

    $('#day2').text(weather.forecast.forecast.simpleforecast.forecastday[2].date.weekday_short);
    $('#d2date').text(weather.forecast.forecast.simpleforecast.forecastday[2].date.month + '/' + weather.forecast.forecast.simpleforecast.forecastday[2].date.day);
    $('#d2icon').html('<img src = "' + weather.forecast.forecast.simpleforecast.forecastday[2].icon_url + '">');
    $('#high2').html(weather.forecast.forecast.simpleforecast.forecastday[2].high.fahrenheit + '&deg;');
    $('#low2').html(weather.forecast.forecast.simpleforecast.forecastday[2].low.fahrenheit + '&deg;');

    $('#day3').text(weather.forecast.forecast.simpleforecast.forecastday[3].date.weekday_short);
    $('#d3date').text(weather.forecast.forecast.simpleforecast.forecastday[3].date.month + '/' + weather.forecast.forecast.simpleforecast.forecastday[3].date.day);
    $('#d3icon').html('<img src = "' + weather.forecast.forecast.simpleforecast.forecastday[3].icon_url + '">');
    $('#high3').html(weather.forecast.forecast.simpleforecast.forecastday[3].high.fahrenheit + '&deg;');
    $('#low3').html(weather.forecast.forecast.simpleforecast.forecastday[3].low.fahrenheit + '&deg;');

    $('#day4').text(weather.forecast.forecast.simpleforecast.forecastday[4].date.weekday_short);
    $('#d4date').text(weather.forecast.forecast.simpleforecast.forecastday[4].date.month + '/' + weather.forecast.forecast.simpleforecast.forecastday[4].date.day);
    $('#d4icon').html('<img src = "' + weather.forecast.forecast.simpleforecast.forecastday[4].icon_url + '">');
    $('#high4').html(weather.forecast.forecast.simpleforecast.forecastday[4].high.fahrenheit + '&deg;');
    $('#low4').html(weather.forecast.forecast.simpleforecast.forecastday[4].low.fahrenheit + '&deg;');

    $('#day5').text(weather.forecast.forecast.simpleforecast.forecastday[5].date.weekday_short);
    $('#d5date').text(weather.forecast.forecast.simpleforecast.forecastday[5].date.month + '/' + weather.forecast.forecast.simpleforecast.forecastday[5].date.day);
    $('#d5icon').html('<img src = "' + weather.forecast.forecast.simpleforecast.forecastday[5].icon_url + '">');
    $('#high5').html(weather.forecast.forecast.simpleforecast.forecastday[5].high.fahrenheit + '&deg;');
    $('#low5').html(weather.forecast.forecast.simpleforecast.forecastday[5].low.fahrenheit + '&deg;');

    $('#day6').text(weather.forecast.forecast.simpleforecast.forecastday[6].date.weekday_short);
    $('#d6date').text(weather.forecast.forecast.simpleforecast.forecastday[6].date.month + '/' + weather.forecast.forecast.simpleforecast.forecastday[6].date.day);
    $('#d6icon').html('<img src = "' + weather.forecast.forecast.simpleforecast.forecastday[6].icon_url + '">');
    $('#high6').html(weather.forecast.forecast.simpleforecast.forecastday[6].high.fahrenheit + '&deg;');
    $('#low6').html(weather.forecast.forecast.simpleforecast.forecastday[6].low.fahrenheit + '&deg;');
  }
}
