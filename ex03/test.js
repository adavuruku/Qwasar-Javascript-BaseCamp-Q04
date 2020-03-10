// myjs = {
//    "consolidated_weather":[
//       {
//          "id":4705083537227776,
//          "weather_state_name":"Light Rain",
//          "weather_state_abbr":"lr",
//          "wind_direction_compass":"WSW",
//          "created":"2020-03-10T09:16:02.521503Z",
//          "applicable_date":"2020-03-10",
//          "min_temp":11.685,
//          "max_temp":14.92,
//          "the_temp":14.17,
//          "wind_speed":12.485327158535485,
//          "wind_direction":250.1660606579943,
//          "air_pressure":1004.5,
//          "humidity":83,
//          "visibility":8.976328243060525,
//          "predictability":75
//       },
//       {
//          "id":6710687839551488,
//          "weather_state_name":"Light Rain",
//          "weather_state_abbr":"lr",
//          "wind_direction_compass":"WSW",
//          "created":"2020-03-10T09:16:03.918318Z",
//          "applicable_date":"2020-03-11",
//          "min_temp":9.335,
//          "max_temp":13.01,
//          "the_temp":12.67,
//          "wind_speed":10.99420230305151,
//          "wind_direction":244.1662386062378,
//          "air_pressure":1011.5,
//          "humidity":63,
//          "visibility":12.44823977968663,
//          "predictability":75
//       },
//       {
//          "id":5293465577455616,
//          "weather_state_name":"Showers",
//          "weather_state_abbr":"s",
//          "wind_direction_compass":"WSW",
//          "created":"2020-03-10T09:16:03.814623Z",
//          "applicable_date":"2020-03-12",
//          "min_temp":5.35,
//          "max_temp":9.835,
//          "the_temp":9.625,
//          "wind_speed":12.62137324944723,
//          "wind_direction":249.50007617320762,
//          "air_pressure":1013.0,
//          "humidity":51,
//          "visibility":12.32427622683528,
//          "predictability":73
//       },
//       {
//          "id":6741855075041280,
//          "weather_state_name":"Light Rain",
//          "weather_state_abbr":"lr",
//          "wind_direction_compass":"W",
//          "created":"2020-03-10T09:16:04.109538Z",
//          "applicable_date":"2020-03-13",
//          "min_temp":5.245,
//          "max_temp":11.045,
//          "the_temp":10.36,
//          "wind_speed":9.909161991622259,
//          "wind_direction":265.9993901614561,
//          "air_pressure":1017.0,
//          "humidity":57,
//          "visibility":12.424006303189373,
//          "predictability":75
//       },
//       {
//          "id":5112266502438912,
//          "weather_state_name":"Heavy Rain",
//          "weather_state_abbr":"hr",
//          "wind_direction_compass":"SW",
//          "created":"2020-03-10T09:16:02.217270Z",
//          "applicable_date":"2020-03-14",
//          "min_temp":4.715,
//          "max_temp":12.260000000000002,
//          "the_temp":11.440000000000001,
//          "wind_speed":8.92882067350672,
//          "wind_direction":215.06143929874167,
//          "air_pressure":1013.0,
//          "humidity":73,
//          "visibility":10.319422075081523,
//          "predictability":77
//       },
//       {
//          "id":6234730435444736,
//          "weather_state_name":"Heavy Rain",
//          "weather_state_abbr":"hr",
//          "wind_direction_compass":"SW",
//          "created":"2020-03-10T09:16:05.016466Z",
//          "applicable_date":"2020-03-15",
//          "min_temp":6.09,
//          "max_temp":11.315000000000001,
//          "the_temp":7.87,
//          "wind_speed":9.030861568440308,
//          "wind_direction":226.49999999999997,
//          "air_pressure":1005.0,
//          "humidity":78,
//          "visibility":9.973629006601445,
//          "predictability":77
//       }
//    ]
// }

// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// let i = 0
// len = myjs.consolidated_weather.length
// while (i < len){
//     var dd = new Date(myjs.consolidated_weather[i].applicable_date);
//     let jsDate = dd.getFullYear()+'-'+(dd.getMonth()+1)+'-'+dd.getDate()
//     if (jsDate == date){
//         console.log(myjs.consolidated_weather[i].weather_state_name)
//         break;
//     }
//     i++;
// }

// [
//     {
//        "title":"San Francisco",
//        "location_type":"City",
//        "woeid":2487956,
//        "latt_long":"37.777119, -122.41964"
//     },
//     {
//        "title":"San Diego",
//        "location_type":"City",
//        "woeid":2487889,
//        "latt_long":"32.715691,-117.161720"
//     },
//     {
//        "title":"San Jose",
//        "location_type":"City",
//        "woeid":2488042,
//        "latt_long":"37.338581,-121.885567"
//     },
//     {
//        "title":"San Antonio",
//        "location_type":"City",
//        "woeid":2487796,
//        "latt_long":"29.424580,-98.494614"
//     },
//     {
//        "title":"Santa Cruz",
//        "location_type":"City",
//        "woeid":2488853,
//        "latt_long":"36.974018,-122.030952"
//     },
//     {
//        "title":"Santiago",
//        "location_type":"City",
//        "woeid":349859,
//        "latt_long":"-33.463039,-70.647942"
//     },
//     {
//        "title":"Santorini",
//        "location_type":"City",
//        "woeid":56558361,
//        "latt_long":"36.406651,25.456530"
//     },
//     {
//        "title":"Santander",
//        "location_type":"City",
//        "woeid":773964,
//        "latt_long":"43.461498,-3.810010"
//     },
//     {
//        "title":"Busan",
//        "location_type":"City",
//        "woeid":1132447,
//        "latt_long":"35.170429,128.999481"
//     },
//     {
//        "title":"Santa Cruz de Tenerife",
//        "location_type":"City",
//        "woeid":773692,
//        "latt_long":"28.46163,-16.267059"
//     },
//     {
//        "title":"Santa Fe",
//        "location_type":"City",
//        "woeid":2488867,
//        "latt_long":"35.666431,-105.972572"
//     }
//  ]


// const data = [
//     {
//       name: 'Bob',
//       gender: 'male',
//       age: 34,
//     },
//     {
//       name: 'Carol',
//       gender: 'female',
//       age: 36,
//     },
//     {
//       name: 'Ted',
//       gender: 'male',
//       age: 38,
//     },
//     {
//       name: 'Alice',
//       gender: 'female',
//       age: 40,
//     },
//   ];
  
//   const arr1 = data.filter(d => d.age > 37);
//   console.log('arr1', arr1);
  
//   const arr2 = data.filter(d => d.gender === 'female');
//   console.log('arr2', arr2);
  
//   const ageAndGender = d => d.age > 37 && d.gender === 'female';
  
//   const arr3 = data.filter(ageAndGender);
//   console.log('arr3', arr3);


JSON.parse({"consolidated_weather":[{"id":6578403383705600,"weather_state_name":"Light Rain","weather_state_abbr":"lr","wind_direction_compass":"WSW","created":"2020-03-10T12:16:02.968689Z","applicable_date":"2020-03-10","min_temp":11.685,"max_temp":15.115,"the_temp":14.085,"wind_speed":12.499101725202152,"wind_direction":250.83342272221,"air_pressure":1004.5,"humidity":83,"visibility":7.896695796548158,"predictability":75},{"id":5843725873840128,"weather_state_name":"Light Rain","weather_state_abbr":"lr","wind_direction_compass":"WSW","created":"2020-03-10T12:16:02.945579Z","applicable_date":"2020-03-11","min_temp":9.275,"max_temp":13.145,"the_temp":12.73,"wind_speed":11.036490036384846,"wind_direction":243.83289342920466,"air_pressure":1011.5,"humidity":64,"visibility":12.957453471725124,"predictability":75},{"id":5272870764675072,"weather_state_name":"Light Rain","weather_state_abbr":"lr","wind_direction_compass":"WSW","created":"2020-03-10T12:16:03.164517Z","applicable_date":"2020-03-12","min_temp":5.52,"max_temp":9.885,"the_temp":9.504999999999999,"wind_speed":13.60698318278056,"wind_direction":250.16660269767468,"air_pressure":1013.0,"humidity":51,"visibility":12.996910542432195,"predictability":75},{"id":6350053998329856,"weather_state_name":"Showers","weather_state_abbr":"s","wind_direction_compass":"W","created":"2020-03-10T12:16:03.857665Z","applicable_date":"2020-03-13","min_temp":4.74,"max_temp":10.89,"the_temp":10.21,"wind_speed":9.037211658288927,"wind_direction":275.4505766213559,"air_pressure":1017.0,"humidity":58,"visibility":12.375228664598744,"predictability":73},{"id":6471321435242496,"weather_state_name":"Heavy Rain","weather_state_abbr":"hr","wind_direction_compass":"SW","created":"2020-03-10T12:16:02.564999Z","applicable_date":"2020-03-14","min_temp":4.865,"max_temp":12.14,"the_temp":11.675,"wind_speed":8.729784706840055,"wind_direction":214.41095144775065,"air_pressure":1013.0,"humidity":72,"visibility":10.338373896444763,"predictability":77},{"id":6595431385530368,"weather_state_name":"Heavy Rain","weather_state_abbr":"hr","wind_direction_compass":"SW","created":"2020-03-10T12:16:05.174925Z","applicable_date":"2020-03-15","min_temp":6.165,"max_temp":11.84,"the_temp":7.87,"wind_speed":8.070861568440309,"wind_direction":220.99999999999997,"air_pressure":1005.0,"humidity":74,"visibility":9.772304740316551,"predictability":77}],"time":"2020-03-10T15:04:35.476123Z","sun_rise":"2020-03-10T06:25:00.838594Z","sun_set":"2020-03-10T17:57:14.098847Z","timezone_name":"LMT","parent":{"title":"England","location_type":"Region / State / Province","woeid":24554868,"latt_long":"52.883560,-1.974060"},"sources":[{"title":"BBC","slug":"bbc","url":"http://www.bbc.co.uk/weather/","crawl_rate":360},{"title":"Forecast.io","slug":"forecast-io","url":"http://forecast.io/","crawl_rate":480},{"title":"HAMweather","slug":"hamweather","url":"http://www.hamweather.com/","crawl_rate":360},{"title":"Met Office","slug":"met-office","url":"http://www.metoffice.gov.uk/","crawl_rate":180},{"title":"OpenWeatherMap","slug":"openweathermap","url":"http://openweathermap.org/","crawl_rate":360},{"title":"Weather Underground","slug":"wunderground","url":"https://www.wunderground.com/?apiref=fc30dc3cd224e19b","crawl_rate":720},{"title":"World Weather Online","slug":"world-weather-online","url":"http://www.worldweatheronline.com/","crawl_rate":360}],"title":"London","location_type":"City","woeid":44418,"latt_long":"51.506321,-0.12714","timezone":"Europe/London"})