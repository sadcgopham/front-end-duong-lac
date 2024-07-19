import React, { useState,useEffect } from "react";
import { Link} from 'react-router-dom';
import {Provider, useDispatch, useSelector} from "react-redux";
import Action from "../redux/Action";
import Menu from "../nav";
import store from "../redux/store";
import Footer from "../footter/footer";
//import axios from 'axios';
import "./Cartlocal.scss";
import axios from "axios";
const Carts = () => {
  const Dispath = useDispatch()
  //const [carts, setcarts] = useState()
  const [count, setcount] = useState(0)
   const cartitem= useSelector((state) => state.Carts) 
   
     console.log("time");
   const user = useSelector((state) => state.User);
  useEffect(() => {
    try {
          
          if((!user || !user.email) && localStorage.getItem('cart') ){
            Dispath(Action.cartlocal(JSON.parse(localStorage.getItem('cart'))))
            return
          }
          else{
           return
          }
    } 
    catch(err){
     console.log(err);
    }
    
  }, [user,Dispath]);
  useEffect(() => {  
          setcount(1)
          
            if(!user.email && count !== 0){
            localStorage.setItem("cart", JSON.stringify(cartitem));
            }
  }, [cartitem, user, count])
  const payAll = () =>{
    localStorage.setItem("pay", JSON.stringify(cartitem.items));
  }
  const addcartitem = async(item) => {
    console.log("time1");
    Dispath(Action.additem(item))
    if(user && user.email){
      let name = item.name
      let quatily = item.quatily
      let price_original = item.price_original;
      let total_weight= +(cartitem.total_weight + item.grams );
      let item_count = +(cartitem.item_count + 1);
      let total_discounts = 0;
      let total_price = +(cartitem.total_price + item.price)
       await axios.post("http://localhost:8080/change",{name,quatily,price_original,total_weight,item_count,total_discounts,total_price}, { withCredentials: true }) 
    }
    
  }
  const reduction = async(item) =>{
  
    Dispath(Action.reduction(item))
    if(user && user.email){
      let name = item.name
      let quatily = item.quatily
      let price_original = item.price_original  
      let total_weight= +(cartitem.total_weight - item.grams ) ;
      let item_count = +(cartitem.item_count - 1);
      let total_discounts = 0;
      let total_price = +(cartitem.total_price - item.price)     
      await axios.post("http://localhost:8080/change",{name,quatily,price_original,total_weight,item_count,total_discounts,total_price}, { withCredentials: true }) 
   }
  }
  const deleteitem = async(item) =>{
    Dispath(Action.delete(item))
    if(user && user.email){
      let name = item.name 
      let total_weight= +(cartitem.total_weight - item.grams_final ) ;
      let item_count = +(cartitem.item_count - item.quatily);
      let total_discounts = 0;
      let total_price = +(cartitem.total_price - item.price_original)     
      await axios.post("http://localhost:8080/delete",{name,total_weight,item_count,total_discounts,total_price}, { withCredentials: true }) 
   }
  }
  return (
    <> 
    
      <Provider store = {store}>
         <Menu 
           
         />
      </Provider>
    
    <div className="cart">
      <div className="right"></div>
      <div className="left">
      <h2>Giỏ Hàng Của Bạn</h2>
    <div className="cart-body">
      <div className="cart-header">
        <div className="row-img">Ảnh sản phẩm</div>
        <div className="row-title">Tên sản phẩm</div>
        <div className="row-price">Đơn giá</div>
        <div className="row-quatily">Số lượng</div>
        <div className="row-price_final">Thành tiền</div>
        <div className="row-delete">Xoá</div>
      </div>
      {cartitem && cartitem.items.length > 0 && cartitem.items[0].grams !== null && cartitem.item_count > 0 && cartitem.items.map(item => {      
       return <div className="cartitem" key={item.id}>
          <div className="row-img" >
            <img className="item-img" src={item.image} alt={item.name} />
          </div>
          <div className="row-title">
            <h5><Link to={`/${item.url}`}>{item.name}</Link></h5>
          </div>
          <div className="row-price">
             <span className="number-price">{item.price.toLocaleString()}₫</span>
          </div>
          <div className="row-quatily">
             <div className="quatily-child">
             <button className="changequatily" disabled = {item.quatily <= 1} onClick={() => reduction(item)}>-</button>
             <span className="quatily" >{item.quatily}</span>
             <button className="changequatily" onClick={() => addcartitem(item)}>+</button></div>
          </div>
          <div className="row-price_final">
             <span className="number-price">{item.price_original.toLocaleString()}₫</span>
          </div>
          <div className="row-delete">
             <span><button onClick={() => deleteitem(item)}><i className="fa-solid fa-trash"></i></button></span>
          </div>
        </div>
      })}
      {(!cartitem || !cartitem.items.length > 0 || cartitem.item_count === 0 || cartitem.item_count === null) && (<div><h4>bạn chưa có sản phẩm</h4></div>)}
    </div>
    <div className="itemcart-bottom">
      <Link to="/"><div className="form-product"><h5>TIẾP TỤC MUA HÀNG</h5></div></Link>
      <div className="shopping-cart-pay">
       {cartitem && cartitem.total_price !== null && <div className="price-final-late">
          <div className="sun-pay"><span>Tổng tiền thanh toán</span></div>
          <div className="price-all"><span className="number-price">{cartitem.total_price.toLocaleString()}₫</span></div>
        </div>}
       <div className="pay-All"> 
       {cartitem && cartitem.items.length > 0 && cartitem.item_count > 0 &&
         <button className="pay-all-item" onClick={payAll}>
          <a href="/Thanhtoan">TIẾN HÀNH THANH TOÁN</a>
         </button>}
         {(!cartitem || !cartitem.items.length > 0 || cartitem.item_count === 0) &&
         <button className="pay-all-item"
          onClick={payAll}
          disabled
          >
          <h5>TIẾN HÀNH THANH TOÁN</h5>
         </button>}
       </div>
      </div>
    </div>
    </div>
    </div>
    <div>
        <Footer />
      </div>
    </>
  );
};

export default Carts;