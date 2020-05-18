var url = "https://api.openweathermap.org/data/2.5/weather?q=Ankara,tr&appid=4869a7a8271ae1b636c0c0f0f5140659&lang=ru";
var day;
var night;
let imgWeather;
fetch("http://localhost:8090/").then((data) => data.json()).then((res) =>{
	let tmp;	
	tmp = res.find((el) => el.id === 'Egypt');
	day = tmp.sunrise;
 	night = tmp.sunset;
});


function gg () {
	var today = new Date(); 
		today = today.getHours();
		console.log(today);
		switch(imgWeather){
			case "Clear" : 
				if (today < night && today > day ){
					document.getElementById("weatherImageDisplay").innerHTML = `<img id = "weatherPhoto" src="Images/WeatherForecastImages/sun.png" alt="weatherForecastImg">`;
					console.log('day')
				}else {
					document.getElementById("weatherImageDisplay").innerHTML = `<img id = "weatherPhoto" src="Images/WeatherForecastImages/full-moon.png" alt="weatherForecastImg">`;
					console.log('night')
				}
				
			break;
			case "Clouds": 
			if (today < night && today > day){
				document.getElementById("weatherImageDisplay").innerHTML = `<img id = "weatherPhoto" src="Images/WeatherForecastImages/cloudy.png" alt="weatherForecastImg">`;
				console.log('day')
			}else{
				document.getElementById("weatherImageDisplay").innerHTML = `<img id = "weatherPhoto" src="Images/WeatherForecastImages/cloudy (1).png" alt="weatherForecastImg">`;
				console.log('night')
			}
			
			break;
			case "Thunderstorm":
				document.getElementById("weatherImageDisplay").innerHTML = `<img id = "weatherPhoto" src="Images/WeatherForecastImages/thunder.png" alt="weatherForecastImg">`;
			break;
		};
};


axios.post(url)
	 .then(response => {
	 	console.log(response)
	 	let currentWind = response.data.wind.speed;
	 	let currentTemp = response.data.main.temp;
	 	let currentHumidity = response.data.main.humidity;
	    imgWeather = response.data.weather["0"].main;
		currentTemp = currentTemp - 273.15;	 
		console.log (response.data.weather[0].description); // уже на русском говорит о текущей погоде
		console.log(imgWeather);

	 	document.getElementById("currentTemp").innerHTML = currentTemp.toFixed(1);
	 	document.getElementById("currentWind").innerHTML = currentWind;
		 document.getElementById("currentHumidity").innerHTML = currentHumidity;
		 
	}).then(() => gg());



