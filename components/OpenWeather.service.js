class OpenWeatherService{
    static apiRootPath = 'https://api.openweathermap.org/data';
    static apiVersion = '2.5';
    static apiKey = '2b015c78c42b316407812b7344742790';

    /**
     * getter for the API base path for open weather map endpoint
     */
    static getApiBasePath(){
        return `${apiRootPath}/${apiVersion}`;
    }

    static async getCurrentWeatherByZipCode(config = {
        zipCode : null, 
        lang : 'en', 
        langCode : null}
        ){
            const {zipCode, lang, langCode} = config;

            if(!zipCode || langCode){
                throw new Error('zipCode or langCode is not a valid parameter. Provide a valid zipcode language code ');
            }

            const currentWeatherResp = await fetch(`${getApiBasePath()}/weather=zip=${zipCode},${langCode}&appid=${this.apiKey}&lang=${lang}`);

            return currentWeatherResp.json();
    }

    /**
     * get static open weather icon url with icon id placeholder replacement
     * @param {string} iconId - open weather icon id string 
     */
    static getIconImageUrl(iconId = null){
        if(!iconId){
            throw new Error('Invalid icon id. Provide a valid icon id: https://openweathermap.org/weather-conditions');
        }
        return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
    }

}

export default OpenWeatherService