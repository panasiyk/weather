export default function forecastReducer(state={forecast:[],isLoadedForecast: false},action){
    switch (action.type){
        case 'FETCH_FORECAST_FOR_FIVE_DAYS':{
            let obj = [];
            let d = new Date();
            let curr_date = d.getDate();
            let curr_month = d.getMonth() + 1;
            let curr_year = d.getFullYear();
            let ms = Date.parse(curr_year + "-" + curr_month + "-" + curr_date);
            action.json.forEach(el=>{
                let differenceInDays = (Date.parse(el.dt_txt.substr(0,10))-ms)/1000/60/60/24;
                if(differenceInDays > 1 && differenceInDays < 5){
                    obj.push(el);
                }
            });
            let doubleArray = [];
            let k = 0;
            for(let i =0; i<4; i++){
                doubleArray[i]=[];
                for(let j =0; j<8; j++){
                    doubleArray[i][j]=obj[k];
                    k++;
                }
            }
            console.log(doubleArray);
            return {...state, forecast: doubleArray, isLoadedForecast: true};
        }
        default:
            return state;
    }
}