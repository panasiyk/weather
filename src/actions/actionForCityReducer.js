export const addNewCity = (city) =>{
    return{
        type: 'ADD_NEW_CITY',
        city
    }
};
export const deleteCity = (city) =>{
    return{
        type: 'DELETE_CITY',
        city
    }
};