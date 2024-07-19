import React, {  useState } from "react";
import "./carosel.scss";
const Carosel = () => {
     const [currenindex, setcur] = useState(0); 
      const image_carosel = [
          {id : "1", img : "http://localhost:8080/image/sline1.JPG", alt : "sline1"},
          {id : "2", img : "http://localhost:8080/image/sline2.JPG", alt : "sline2"}
        ]  
       let carosel_sline = image_carosel[currenindex].img
        const handleonclickprev = () => {
       setcur(currenindex-1)
       if (currenindex === 0) {
          setcur(image_carosel.length - 1)
       }
      }
      const handleonclicknext = () => {
        setcur(currenindex+1)
        if (currenindex === image_carosel.length - 1) {
          setcur(0)
        }
       }
    return(
    <>
    <div className="container-carosel">
      <div className="image">
        {carosel_sline && 
             <img className="sline"  src={carosel_sline} alt="sline"></img>
         }   
         <div className="prev-next">
             <button className="prev" onClick={() => handleonclickprev()}><i class="fa-solid fa-angles-left"></i></button>
             <button className="next" onClick={() => handleonclicknext()}><i class="fa-solid fa-angles-right"></i></button>
         </div> 
      </div>
   
    </div>
    </>
    )
}
export default Carosel;