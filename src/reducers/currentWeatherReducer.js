export default function currentWeatherReducer(state={currentWeatherJson:[]},action){
    switch(action.type){
        case 'FETCH_CURRENT_WEATHER':{
            console.log(action.json.list);
            return state;
        }
        default:
            return state;
    }

}