export default function cityReducer(state={city:[{id:702550,name:'Lviv'}]}, action){
    switch(action.type){
        case 'ADD_NEW_CITY':{
            return {...state,city:[...state.city,action.cityObj]};
        }
        case 'DELETE_CITY':{
            let arrayOfCities = [...state.city];
            let index;
            for (let i = 0; i < arrayOfCities.length; i++){
                if (arrayOfCities[i].name === action.city)
                    index =i;
            }
            arrayOfCities.splice(index,1);
            return {...state,city:arrayOfCities};
        }
        default:
            return state;
    }

}