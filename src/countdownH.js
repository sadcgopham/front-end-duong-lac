import {useState, useEffect} from 'react';

const Countdown = () => {
    const [count, setcount] = useState(10)
    useEffect(()=>{
        if(count === 0) {
            alert('hết giờ')
            return;
        };
      const interval =  setInterval(() => {
            setcount(count - 1)
        },1000);
       
        return ()=> {
            clearInterval(interval);
        };
    },[count])

    return(
        <div>
            <h1>{count}</h1>
        
        </div>
    );
}
export default Countdown;