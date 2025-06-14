let inputval = document.querySelector("input");
let btn = document.querySelector("button");
let icon = document.querySelector(".icon");
let body = document.querySelector(".body")
const ApiKey = ""  // Enter Your Api Key..
let Api = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function CheckWeather(city){
    try{
    const response = await fetch(`${Api}&q=${city}&appid=${ApiKey}`);
    let raw = await response.json()

    if(raw.cod == "404"){
        document.querySelector(".error").style.display = "block";
        body.style.display = "none";
    }
    else{
    document.querySelector(".city").innerHTML = raw.name;
    document.querySelector(".Temp").innerHTML = `${Math.round(raw.main.temp)}°C`
    document.querySelector(".wind").innerHTML = `${raw.wind.speed} km/h`;
    document.querySelector(".humidity").innerHTML = `${raw.main.humidity}%`;
    body.style.color = "white";

    if(raw.weather[0].main == "Clouds"){
        icon.src = "./images/clouds.png"
    }
    else if(raw.weather[0].main == "Clear"){    
        icon.src = "./images/clear.png"
    }
    else if(raw.weather[0].main == "Rain"){    
        icon.src = "./images/rain.png"
    }
    else if(raw.weather[0].main == "Drizzle"){    
        icon.src = "./images/drizzle.png"
    }
    else if(raw.weather[0].main == "Mist"){    
        icon.src = "./images/mist.png"
    }
    body.style.display = "block";
    document.querySelector(".error").style.display = "none"
    } 
    }
    catch(err){
        console.log(err);
        console.log("Network or unexpected error:", err);
        document.querySelector(".error").innerHTML = "Something went wrong!";
        document.querySelector(".error").style.display = "block";
        body.style.display = "none";
    }
    
}

btn.addEventListener("click",()=>{
    CheckWeather(inputval.value.trim())
});
