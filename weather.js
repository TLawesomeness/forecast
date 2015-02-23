'use strict';

var Weather = function() {

  var base_url = 'http://api.wunderground.com/api/e644b8e592dd1261/';
  var forecastEndpoint = 'forecast10day' ;
  var conditionsEndpoint = 'conditions';
  var yesterdayEndpoint = 'yesterday';

  var request = function(query, endpoint , callback) {
    var q;
    if (query.coords) {
      q = '/q/' + query.coords.latitude + ',' + query.coords.longitude + '.json';
    }
    else if (query.zipCode) {
      q = '/q/zip' + query.zipCode + '.json';
    }
    var errorCallback = function(err) {
      console.log('in error callback', err);
    };

    $.ajax({
       method: 'GET',
       url: base_url + endpoint + q,
       success: callback,
       error: errorCallback
    });
  };

  var requestForecast = function(query, callback) {
    request(query, forecastEndpoint, callback);
  };

  var requestConditions = function(query, callback) {
    request(query, conditionsEndpoint, callback);
  };

  var requestYesterday = function(query, callback) {
    request(query, yesterdayEndpoint, callback);
  };

  return {
    request: request,
    requestConditions: requestConditions,
    requestForecast: requestForecast,
    requestYesterday: requestYesterday
  };

};
