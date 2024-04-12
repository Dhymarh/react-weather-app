export const getBackground = (weather, time) => {
  let backgroundImageUrl = '';
if (time >= 0 && time < 12) {
   //12am to 12pm
      if (weather === 'broken clouds') {
        backgroundImageUrl = require('./images/broken-clouds/broken-clouds-day.jpg');
      } else if (weather === 'few clouds') {
        backgroundImageUrl = require('./images/few-clouds/few-clouds-day.jpg');
      } else if (weather === 'scattered clouds') {
        backgroundImageUrl = require('./images/scattered-clouds/scattered-clouds-day.jpg');
      } else if (weather === 'overcast clouds') {
        backgroundImageUrl = require('./images/scattered-clouds/scattered-clouds-day.jpg');
      } else if (weather === 'clear sky') {
        backgroundImageUrl = require('./images/clear-sky/clear-sky-day.jpg');
      }  else if (weather === 'moderate rain') {
        backgroundImageUrl = require('./images/rain/rain-day.jpg');
      } else if (weather === 'light rain') {
        backgroundImageUrl = require('./images/shower-rain/shower-rain-day.jpg');
      } else if (weather === 'mist') {
        backgroundImageUrl = require('./images/mist/mist-day-1.jpg');
      } else if (weather === 'snow') {
        backgroundImageUrl = require('./images/snow/snow-day.jpg');
      } else if (weather === 'thunderstorm') {
        backgroundImageUrl = require('./images/thunderstorm/thunderstorm-day.jpg');
      } else {
        backgroundImageUrl = require('./images/weather-background.jpg');
      }
    } else if (time >= 12 && time < 18) {
 //12pm to 6pm 
 if (weather === 'broken clouds') {
        backgroundImageUrl = require('./images/broken-clouds/broken-clouds-night.jpg');
      } else if (weather === 'few clouds') {
        backgroundImageUrl = require('./images/few-clouds/few-clouds-evening-1.jpg');
      } else if (weather === 'scattered clouds') {
        backgroundImageUrl = require('./images/scattered-clouds/scattered-clouds-evening.jpg');
      }else if (weather === 'overcast clouds') {
        backgroundImageUrl = require('./images/scattered-clouds/scattered-clouds-evening.jpg');
      } else if (weather === 'clear sky') {
        backgroundImageUrl = require('./images/clear-sky/clear-sky-evening.jpg');
      }  else if (weather === 'moderate rain') {
        backgroundImageUrl = require('./images/rain/rain-evening.jpg');
      } else if (weather === 'light rain') {
        backgroundImageUrl = require('./images/shower-rain/shower-rain-evening.jpg');
      } else if (weather === 'mist') {
        backgroundImageUrl = require('./images/mist/mist-evening.jpg');
      } else if (weather === 'snow') {
        backgroundImageUrl = require('./images/snow/snow-evening.jpg');
      } else if (weather === 'thunderstorm') {
        backgroundImageUrl = require('./images/thunderstorm/thunderstorm-evening.jpg');
      } else {
        backgroundImageUrl = require('./images/weather-background.jpg');
      }
    } else {
         //6pm to 12am
if (weather === 'broken clouds') {
        backgroundImageUrl = require('./images/broken-clouds/broken-clouds-night.jpg');
      } else if (weather === 'few clouds') {
        backgroundImageUrl = require('./images/few-clouds/few-clouds-night.jpg');
      } else if (weather === 'scattered clouds') {
        backgroundImageUrl = require('./images/scattered-clouds/scattered-clouds-night.jpg');
      } else if (weather === 'overcast clouds') {
        backgroundImageUrl = require('./images/scattered-clouds/scattered-clouds-night.jpg');
      }else if (weather === 'clear sky') {
        backgroundImageUrl = require('./images/clear-sky/clear-sky-night.jpg');
      }  else if (weather === 'moderate rain') {
        backgroundImageUrl = require('./images/rain/rain-night.jpg');
      }
       else if (weather === 'light rain') {
        backgroundImageUrl = require('./images/shower-rain/shower-rain-night.jpg');
      } else if (weather === 'mist') {
        backgroundImageUrl = require('./images/mist/mist-night.jpg');
      } else if (weather === 'snow') {
        backgroundImageUrl = require('./images/snow/snow-night.jpg');
      } else if (weather === 'thunderstorm') {
        backgroundImageUrl = require('./images/thunderstorm/thunderstorm-night.jpg');
      } else {
        backgroundImageUrl = require('./images/weather-background.jpg');
      }
    }
 

  return backgroundImageUrl;
};