import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from "./fetchapi";
import './blogNB.scss';
const BlogNB = () => {
   let {id} = useParams()
   const navigate = useNavigate();
   const {data:detelblog, loading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   const handleonclick = (e) => {
    navigate("/blog")
   }
    return(
    <>
        <div><button className='btn'
           onClick={(e) => handleonclick(e)}
        >
            back
        </button>
        </div>
        {loading === false && detelblog  &&  (
        <div className="main">
           <h3> id:{detelblog.id}</h3><br/>
           <br/>
           <h2>{detelblog.title}</h2><br/>
           <br/>
           <p>{detelblog.body}</p>
        </div>)}
        {loading === true && <div>Đang tải...</div>}
    </>
    )
}
export default BlogNB;
