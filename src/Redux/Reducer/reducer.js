import { GET_DATA } from "../ActionType";
const initialState = {
    data:[]
}


const reducer = (state = initialState ,action) =>{
    console.log("action",action);
    switch(action.type){
        case GET_DATA :
            var data_list = state.data;
            data_list.push(action.payload)
            return{
                ...state,
                data:[...data_list]
            }
            break;
            default :
             return state
    }
}


export default reducer;