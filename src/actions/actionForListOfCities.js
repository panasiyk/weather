
export const showList = (pathOfCity) =>{
    return{
        type: 'SHOW_LIST',
        pathOfCity
    }
};
export const changeInputText = (name) =>{
    return{
        type: 'CHANGE_INPUT_TEXT',
        name
    }
};
export const hideList = () =>{
    return{
        type: 'HIDE_LIST'
    }
};


