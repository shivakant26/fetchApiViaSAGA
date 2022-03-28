import { GET_DATA , GET_DATA_S , GET_POST_S} from "../ActionType";
const initialState = {
    data:[],
    posts:[]
}


const reducer = (state = initialState ,action) =>{
    
    switch(action.type){
        case GET_DATA_S :
            return{
                ...state,
                data:action.payload    
            }
            break;
            case GET_POST_S :
            return{
                ...state,
                posts:action.payload    
            }
            break;
            default :
             return state
    }
}


export default reducer;