var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#getDescription').click(function() {
    var city = $('#location2').val();
    $('#location2').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').prepend("<br>" + "The weather in " + city + " is " + response.weather[0].description);
        console.log(JSON.stringify(response));
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
