import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData , getPost} from '../Redux/Action/action';


const Home = () =>{

    const dispatch = useDispatch();
    // const [data , setData ] = useState();
    const record = useSelector((state)=>state.reducer.data);
    const list = record.data;
    console.log("datacome",list);

    useEffect(()=>{
        dispatch(getData());
    },[])

    // const getapi = () =>{
    //     dispatch(getData());
    // }

    const getpost = () =>{
        dispatch(getPost());
        
    }

    return(
        <>
        <h1>Home Component</h1>
        {/* <button onClick={getapi}>Get User</button> */}
        <button onClick={getpost}>Get Posts</button>
        {
            list ? 
            <div className='card_Wr'>
                {
                    list.map((item,i)=>
                    <div className='card' key={i}>
                        <div className='card_header'>
                            <h2>{item.name}</h2>
                        </div>
                        <div className='card_body'>
                            <p>Username:{item.username}</p>
                            <p>email:<p>{item.email}</p></p>
                            
                        </div>
                        <div className='card_footer'></div>
                    </div>
                    )
                }
            </div>
            : "no"
        }
        </>
                   
    )
}


export default Home;