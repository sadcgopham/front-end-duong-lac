import React from "react";
import useFetch from "./fetchapi";
import {  Link } from 'react-router-dom';
import './blog.scss';
const Blog = () => {
    const {data:blog, loading} = useFetch(`https://jsonplaceholder.typicode.com/posts`)
    console.log('blog',blog);
    let newblog = []
    if(blog && blog.length > 0){
      newblog = blog.slice(0, 12)
    }
    return(
        <div className="main">
            {loading === false &&  newblog && newblog.length > 0 && newblog.map(item => {
              return(
              <div className="card" key={item.id}><h3>{item.title}</h3>
              <p>{item.body}</p> 
              <button className="btn"><Link to={`/blog/${item.id}`}>view</Link></button></div>
              )  
            })} 
            {loading === true && <div>loading...</div>}
        </div>
    )
}
export default Blog;