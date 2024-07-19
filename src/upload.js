import React, { useEffect, useState } from "react";
import "./login.scss"
import axios from "axios";
const Upload = () => {  
    const [response, setresponse] = useState()
    useEffect(() => {
        try{
        async function fetchData() { 
          let data = await axios.get('http://localhost:8080/product')
          console.log('checkkkk',data.data);
           setresponse(data.data.dataproduct)
        } 
        fetchData();
        }
       
        catch(err){
            console.log('lỗi ảnh', err);
        }
   
    
}, [])
    return(
    <div className="container-Upload">
        {response && response.map(imageload =>{
          return  <img src={imageload.image} alt="mromro"  />   
        }
         )}
    </div>
    )
}
export default Upload;