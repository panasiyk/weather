export const fetchCurrentWeather = () => dispatch =>{
    fetch('http://api.openweathermap.org/data/2.5/group?id=524901,703448&units=metric&appid=0348a0dd5eca47da5e0a077aa2fc7ae9')
        .then(response => response.json())
        .then(json => dispatch({type: 'FETCH_CURRENT_WEATHER', isLoaded: true,json}))
};


