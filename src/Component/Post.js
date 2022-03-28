import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../Redux/Action/action";

const Post = () => {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.reducer.posts)
    const post_list = list.data;
    console.log("posts", post_list)
    useEffect(() => {
        dispatch(getPost());
    }, [])
    return (
        <div>
            <h1>Post page</h1>
            {
                post_list ?
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Discription</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    post_list.map((item,i)=>        
                                     <tr key={i}>
                                      <td>{item.title}</td>
                                      <td>{item.body}</td>
                                     </tr>
                            
                                    )
                                }
                            </tbody>
                        </table>

                    </div>
                    :
                    <div>
                        <p>Record Not Found</p>
                    </div>
            }
        </div>
    )
}

export default Post;