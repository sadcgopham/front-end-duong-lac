
import React from "react";
import './pagination.scss'
const Pagination = (props) =>{
 const {handlepagenext, handlepageprev, totalPages, page, setpage} = props
  

 return (
    <>
    <div className="pagination">
        <button
        className="prev"
        disabled = {page <= 1}
        onClick={handlepageprev}
        > 
        Prev
        </button>
         {Array.from({length : totalPages}, (index, item) => (
        <li key={item}>
    <button
     id = {item + 1 === page ? "active-pagination" : ""}
      className="btn-number"
      onClick={  () => setpage(item + 1) }
   
    >
      {item + 1}
    </button>
      </li>
         
        ) )}
        <button
        className="next"
        disabled = {page >= totalPages}
        onClick={handlepagenext}
        > 
        Next
        </button>
    </div>
    </>
 )
}
export default Pagination;