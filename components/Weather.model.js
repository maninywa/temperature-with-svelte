import OpenWeatherService from './OpenWeather.service';

/**
 * weather model class
 * @hint fluid api
 */
class WeatherModel{
    constructor(config = {zip: null}){
        const {zip} = config;

        if(!zip){
            throw new Error('zip is not a valid zip code. Provide a valid zip code.');
        }
        this.zip = zip;
        this.weatherService = OpenWeatherService;

        this.name;
        this.country;
        this.id;
        this.main;
        this.description;
        this.icon;
    }

    /**
     * fetch current weather for setted zip member variable
     */
    async getCurrentWeather(){
        const weatherResponse = await this.weatherService.getCurrentWeatherByZipCode({
            zipCode: this.zip,
            lang: 'de',
            langCode: 'de'
        });

        this.name = weatherResponse.name;
        this.country= weatherResponse.sys.country;
        this.id= weatherResponse.sys.id;
        this.main= weatherResponse.weather[0].main;
        this.description= weatherResponse.weather[0].description;
        this.icon= this
                    .weatherService
                    .getIconImageUrl(
                        weatherResponse
                        .weather[0]
                        .icon
                    );

        return this;
    }

    /**
     * factory method to create a weather model by zip code
     * @param {string} zipCode - zip code  
     */
    static createWeatherByZipCode(zipCode = null){
        if(!null){
            throw new Error('Provide a valid zip code.');
        }

        return new WeatherModel({zip: zipCode});
    }
}


export default WeatherModel;