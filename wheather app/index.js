const inputCity = document.getElementById("input-city")
const Search = document.getElementById("Search-btn")
const cityname = document.getElementById("city-name")
const cityTime = document.getElementById("city-time")
const cityTem = document.getElementById("city-temprature")

async function getdata (CityName){
    const Result = await fetch(`http://api.weatherapi.com/v1/current.json?key=5092037d32de4c79b8e120839250902&q=${CityName}&aqi=yes`)
    return await Result.json()
}

Search.addEventListener("click", async ()=>{
    const Data = await getdata(inputCity.value)
    console.log(Data)
    cityname.innerText = `${Data.location.name} - ${Data.location.region} - ${Data.location.country}`
    cityTime.innerText = `${Data.location.localtime}`
    cityTem.innerText = `${Data.current.temp_c}`
    
    
})