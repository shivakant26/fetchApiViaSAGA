import { GET_DATA, GET_POST } from "../ActionType";


export const getData = () =>{
    return{
        type : GET_DATA,

    }
}
export const getPost = () =>{
    console.log(333)
    return{
        type : GET_POST,
        
    }
}