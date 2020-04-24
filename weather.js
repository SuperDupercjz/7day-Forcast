
document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault()
    let inPut = document.getElementById("inPut").value
    $.get(
        "https://api.openweathermap.org/data/2.5/weather?q=" + inPut + "&appid=a10f29a3b35ebdb6dc5540adcd49970c&units=imperial", function(weatherData){
     document.getElementById("name").innerText = weatherData.name
     document.getElementById("temp").innerText = weatherData.main.temp;
console.log(weatherData)
        });

    
})