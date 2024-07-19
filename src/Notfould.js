import React from "react";
import {  useNavigate } from 'react-router-dom';
const Notfould = () => {
    const navigate = useNavigate();
    const handleonclick = (e) => {
        navigate("/")
       }
    return(
      <div>
        <h2>error</h2>
        <button onClick={(e) => handleonclick(e)}>back HomePage</button>
      </div>
    );
}
export default Notfould;