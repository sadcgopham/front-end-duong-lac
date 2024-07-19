import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Adminpay.scss";
const AllBills = () =>{
    const [bill, setbill] = useState()

    useEffect(() =>{
       try {
        async function fetch() {
              const res = await axios("http://localhost:8080/bill")
              setbill(res.data)
        }
        fetch()
       } catch (error) {
        console.log(error);
       } 
    }, [])
    return(
        <>
         <div className="container-bill-admin">
            <span>Quản lý đơn hàng</span>
            <div className="aline-container">
                <div className="colum-bill">
                    {bill && bill.length > 0 && bill.map((item, index) => {
                       return (
                       <>
                       <div className="show-bill">
                        <div className="name">
                            <span>{item.name}</span>
                        </div>
                        <div className="phone">
                            <span>{item.phone}</span>
                        </div>
                        <div className="email">
                            <span>{item.email}</span>
                        </div>
                        <div className="address">
                            <span>{item.address}</span>
                        </div>
                        <div className="items">                      
                            { item.items_pay && JSON.parse(item.items_pay).map((item,index) => {
                                return(
                                    <div className="item" key={index}>
                                        <div className="image_quatily">
                                            <div className="image">
                                                <img src={item.image} alt="img">
                                                </img>
                                            </div>          
                                            
                                                <span className="quatily">x{item.quatily}</span>
                                                     
                                        </div> 
                                        <div className="name">
                                            <span>{item.name}</span>
                                        </div>
                                        <div className="price">
                                            <span>{item.price_original.toLocaleString()}₫</span>
                                        </div>
                                    </div>
                                )
                            }) }
                        </div>
                        <div className="oder">
                            <button className="btn_oder">{item.trangthai}</button>
                        </div>
                      </div> 
                      </> )
                   })}
                </div>
            </div>
         </div>
        </>
    )
}
export default AllBills