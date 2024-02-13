async function fetchWeatherData(cityName) {
	let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1c84b526829ff1e1ce9585567ae57e91`
	const responce = await fetch (url)
	const data = await responce.json();
	console.log(data.name)
	
}

function fetchCity(){
	let cityName = document.getElementById("city_name");
	if (cityName.value==="") {
		alert("Enter a city name")
	}
	else{
		fetchWeatherData(cityName.value);
		cityName.value="";
	}



}