export const fetchCurrentWeather = (cities) => dispatch =>{
    let id = cities.map((el)=>{ return el.id}).join(',');
    fetch(`http://api.openweathermap.org/data/2.5/group?id=${id}&units=metric&appid=0348a0dd5eca47da5e0a077aa2fc7ae9`)
        .then(response => response.json())
        .then(json => dispatch({type: 'FETCH_CURRENT_WEATHER', isLoaded: true,json}))
};

export const loading = () =>{
    return{
        type: 'LOADING'
    }
};
