import json from '../otherFiles/listOfCities';

export default function dropListReducer(state={showList:false,listOfCities:[], inputText:''},action){
    switch (action.type){
        case 'SHOW_LIST':{
            if(action.pathOfCity.length !== 0) {
                let jsonToShow = json.filter((item) => {
                    return item.name.substring(0, action.pathOfCity.length).toLowerCase().search(
                        action.pathOfCity.substring(0, action.pathOfCity.length).toLowerCase()) !== -1;
                });
                return {...state, listOfCities: jsonToShow, showList: true,inputText:action.pathOfCity};
            }
            else {
                return {...state,listOfCities: '', showList: false,inputText:''};
            }
        }
        case 'CHANGE_INPUT_TEXT':{
            return {...state,inputText:action.name};
        }
        case 'HIDE_LIST':{
            return {...state,showList:false};
        }
        case 'ADD_NEW_CITY':{
            return {...state,inputText:''};
        }
        default:
            return state;
    }
}