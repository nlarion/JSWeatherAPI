var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#getTemperature').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').html("<br>" + "The temperature in " + city + " is " + kelvinToCelsius(response.main.temp) + " Celsius" + "<br>" + "The temperature in " + city + " is " + kevlinToFahrenheit(response.main.temp) + " Fahrenheit");
        console.log(JSON.stringify(response));
    }).fail(function(error) {
      $('.showWeather').text(error.message);
    });
  });
});
