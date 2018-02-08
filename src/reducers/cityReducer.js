export default function cityReducer(state={cityName:['Lviv']},action){
    switch(action.type){
        case 'ADD_NEW_CITY':{
            return {...state,cityName:[...state.cityName,action.city]};
        }
        case 'DELETE_CITY':{
            let arrayOfCities = [...state.cityName];
            let index = arrayOfCities.indexOf(action.city);
            arrayOfCities.splice(index,1);
            return {...state,cityName:arrayOfCities};
        }
        default:
            return state;
    }

}