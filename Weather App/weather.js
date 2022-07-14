class Weather{
    constructor(city){
        this.apiKey = '000ac2ad7c6d48f1a6932035222206';
        this.city = city;
    }

    // Fetch weather from API
    async getWeather(){
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}&aqi=no`);

        const responseData = await response.json();

        return responseData.current_observation;

        // Change weather location
        changeLocation(city)
            this.city = city;
        


    }
}