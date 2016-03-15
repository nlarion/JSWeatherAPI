var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').html("The humidity in " + city + " is " + response.main.humidity + "%");
        console.log(JSON.stringify(response));
    }).fail(function(error) {
      $('.showWeather').text(error.message);
    });
  });
});
