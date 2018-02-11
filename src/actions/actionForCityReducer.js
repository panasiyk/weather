export const addNewCity = (cityObj) =>{
    return{
        type: 'ADD_NEW_CITY',
        cityObj
    }
};
export const deleteCity = (city) =>{
    return{
        type: 'DELETE_CITY',
        city
    }
};

export const citiesFromLocalStorage = (arrayOfCities) =>{
    return{
        type: 'CITIES_FROM_LOCAL_STORAGE',
        arrayOfCities
    }
};
export const currentWeatherFromLocalStorage = (arrayOfWeather) =>{
    return{
        type: 'CURRENT_WEATHER_FROM_LOCAL_STORAGE',
        arrayOfWeather
    }
};