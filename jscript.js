const input=document.querySelector(".input");
const temp1=document.querySelector(".weather .temp");
const image=document.querySelector(".weather img");
const description4=document.querySelector(".description");
const humidity1=document.querySelector(".humidity");
const windspeed=document.querySelector(".windspeed");
const cname=document.querySelector(".cname");

input.addEventListener('keypress',(event)=>{
   if(event.keyCode==13){
	getweather(input.value);
   }
});
document.querySelector(".search button").addEventListener("click",function(){
	getweather(input.value);	 
});
// getting an api and return it
function getweather(city){
 let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9e96a37a30a039ffacf859925bbcd2c3`;
 fetch(api)
 .then(response => 
	{
		if(!response.ok){
			alert("Enter A valid city.");
			throw new Error("No Weather Found");
		}
		return response.json();
	})
 .then(info=>weatherDetails(info));
}
function weatherDetails(info){
	const cityname=info.name;
	let {humidity,temp}=info.main;
	const {speed}=info.wind;
	const {icon ,description}=info.weather[0];

	cname.innerText="Weather in "+ cityname;
	temp1.innerText=temp+ "°C";
	description4.innerText=description;
	windspeed.innerText="Wind Speed: " + speed+"km/h";
	humidity1.innerText="Humidity: " + humidity+"%";
	image.src = "http://openweathermap.org/img/wn/"+icon+ "@2x.png";
	document.querySelector(".weather").classList.remove("loading");
	document.body.style.backgroundImage =
	"url('https://source.unsplash.com/1600x900/?" + cityname + "')";

	
}




getweather("Delhi");