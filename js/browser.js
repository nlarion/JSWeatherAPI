var apiKey = "64778dc3e2447a8db3666e2878a78b1a";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
  });
});
