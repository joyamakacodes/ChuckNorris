const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city);

const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

// Change location Event
document.getElementById('w-change-btn').addEventListener('click', (e) =>{
    const city = document.getElementById('city').value;

// chnage location

weather.changeLocation(city);
// set location
storage.setLocationData(city)

// get and display 
getWeather();
// close modal
$('#locmodal').modal('hide');
})
function getWeather(){
weather.getWeather()
.then(function (results){
    ui.paint(results)
})
.catch(err => console.log(err));
   
}
