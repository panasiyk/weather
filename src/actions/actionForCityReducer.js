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