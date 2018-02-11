import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import cityReducer from "./cityReducer";
import dropListReducer from "./dropListReducer";
import currentWeatherReducer from "./currentWeatherReducer";
import forecastReducer from "./forecastReducer";

const rootReducer = combineReducers({
    router: routerReducer,
    cityReducer,
    dropListReducer,
    currentWeatherReducer,
    forecastReducer
});
export default rootReducer;