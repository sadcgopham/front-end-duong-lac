import  { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (url="") => {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState(null);
    useEffect(() => {
        try {
          async function fetch() {
            const response = await axios.get(url);
            setdata(response.data);
            setloading(false);
            console.log(response);
          }
          fetch();
        } catch (error) { 
          console.log('hate');
          alert('nhập sai')
          console.error(error);
         
          setloading(true);
        }
      }, [url]);
    return {loading,data}
}
export default useFetch;