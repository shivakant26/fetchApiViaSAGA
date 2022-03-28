import React from 'react'
import { useDispatch } from 'react-redux';
import { getData , getPost} from '../Redux/Action/action';


const Home = () =>{

    const dispatch = useDispatch();

    const getapi = () =>{
        dispatch(getData());
    }

    const getpost = () =>{
        dispatch(getPost());
    }

    return(
        <>
        <h1>Home Component</h1>
        <button onClick={getapi}>Get User</button>
        <button onClick={getpost}>Get Posts</button>
        </>
                   
    )
}


export default Home;