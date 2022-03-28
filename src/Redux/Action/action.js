import { GET_DATA, GET_POST } from "../ActionType";


export const getData = () =>{
    return{
        type : GET_DATA,
    }
}
export const getPost = () =>{
    return{
        type : GET_POST,
    }
}