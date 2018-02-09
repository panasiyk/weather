export default function currentWeatherReducer(state={currentWeather:[{temp:'',windSpeed:'',humidity:'', weather:''}],isLoaded: true},action){
    switch(action.type){
        case 'FETCH_CURRENT_WEATHER':{
            let currentWeather=[];
            action.json.list.forEach((el)=>{
                currentWeather.push({temp:el.main.temp,windSpeed:el.wind.speed,humidity:`${el.main.humidity}%`, weather:el.weather[0].main});
            });
            return {...state,currentWeather:currentWeather, isLoaded: action.isLoaded};
        }
        case 'LOADING':{
            return {...state,isLoaded: false};
        }
        default:
            return state;
    }
}