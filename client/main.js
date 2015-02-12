'use strict';

$(document).ready(init);

function init() {
  $('#get-zipcode').click(clickGetZipcode);

  var getLocal = {enableHighAccuracy: true, timeout: 5000, maximumAge: 0};
  navigator.geolocation.getCurrentPosition(success, error, getLocal);
}

function clickGetZipcode() {
  var zipcode = $('#zipcode').val();
}

function success(pos) {
  var url = 'http://api.wunderground.com/api/e644b8e592dd1261/forecast10day/q/' + pos.coords.latitude + ',' + pos.coords.longitude + '.json';
  var cond = 'http://api.wunderground.com/api/e644b8e592dd1261/conditions/q/' + pos.coords.latitude + ',' + pos.coords.longitude + '.json';
  var geo = 'http://api.wunderground.com/api/e644b8e592dd1261/geolookup/q/' + pos.coords.latitude + ',' + pos.coords.longitude + '.json';
  var hourly = 'http://api.wunderground.com/api/e644b8e592dd1261/hourly10day/q/' + pos.coords.latitude + ',' + pos.coords.longitude + '.json';

}
