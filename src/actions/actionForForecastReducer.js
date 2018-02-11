export const fetchForecast = (city) => dispatch =>{
    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${city.id}&appid=0348a0dd5eca47da5e0a077aa2fc7ae9`)
        .then(response => response.json())
        .then(json => dispatch({type: 'FETCH_FORECAST_FOR_FIVE_DAYS', isLoaded: true,json: json.list}))
};