document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let inPut = document.getElementById("inPut").value;
  let weatherContainer = document.getElementById("weatherContainer")
  weatherContainer.style.border = '5px solid black'
  weatherContainer.style.marginRight = '960px'
  weatherContainer.style.textAlign = 'center'
  weatherContainer.style.fontSize = '30px'
  $.get(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inPut +
      "&appid=a10f29a3b35ebdb6dc5540adcd49970c&units=imperial",
    function (weatherData) {
      document.getElementById("name").innerText = weatherData.name;
      document.getElementById("date").innerText = moment().format(
        "MMMM Do YYYY, h:mm:ss a"
      );
      document.getElementById("temp").innerText = weatherData.main.temp;
      console.log(weatherData);
      $.get(
        "http://api.openweathermap.org/data/2.5/uvi?appid=a10f29a3b35ebdb6dc5540adcd49970c&lat=" +
          weatherData.coord.lat +
          "&lon=" +
          weatherData.coord.lon,

        function (data) {
          console.log(data);
          document.getElementById("uv").innerText = data.value;
          if (data.value <= 2) {
              document.getElementById("uv").style.backgroundColor= "green";
          } else if (data.value >= 3 && data.value <= 5) {
            document.getElementById("uv").style.backgroundColor= "yellow";
          } else {
            document.getElementById("uv").style.backgroundColor= "red";
          }
        }
      );
        $.get(
            "http://api.openweathermap.org/data/2.5/forecast?q=" + inPut +  "&appid=a10f29a3b35ebdb6dc5540adcd49970c",
            function(fiveday){
                console.log(fiveday)
                document.getElementById
            }
        )
    }

  );

});
