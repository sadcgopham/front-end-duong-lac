import React,{useState, useEffect} from "react";
import { useSelector} from "react-redux";
//import {  useNavigate } from 'react-router-dom';   
import "./thanhtoan.scss";
import axios from "axios";
const Muahang = () =>{
  const Users = useSelector((state) => state.User);
  const [loading, setloading] = useState(false);
   //const navigate = useNavigate();
  const [pay, setpay] = useState("Thanh toán khi nhận hàng(COD)")
  const [name, setname] = useState() 
  const [email, setemail] = useState() 
  const [phone, setphone] = useState() 
  const [address, setaddress] = useState()
  const [err, seterr] = useState(true)
  useEffect(() => {  
      if(Users.email){
        setname(Users.name)
        setemail(Users.email)
        setphone(Users.phone)
        setaddress(Users.address)
      }
}, [Users])
  const items = JSON.parse(localStorage.getItem('pay'));
  let total_price = 0;
  let total_quatily = 0;
   for(let i = 0; i < items.length; i++){   
     total_price = +(items[i].price_original + total_price);
     total_quatily = +(items[i].quatily + total_quatily)
   }
   const Validate = () => {
    if(!email ){
        
        return false
    }
    if(!name ){
        
        return false
    }
    if(!phone ){
        
        return false
    }
    if(!address ){
        
      return false
    }
    var re = /\S+@\S+\.\S+/;
    
    if(!re.test(email) ){
     return false
    }
    return true
  }
  function handleKeyDown(e) {
    const allowedKeys = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace']);
    if (!allowedKeys.has(e.key)) {
      e.preventDefault();
    }
  }
   const payOder = async() => {
    let val = Validate()
    if(val === true){
      await axios.post("http://localhost:8080/pay", {name,email,phone,address,pay,items,total_price,total_quatily}, { withCredentials: true })
      setloading(true)
      window.location.href = "/";
    }
    else{
      seterr(false)
    }
     
     
    }
    return (<>
    <div className="container-pay">
      <div className="information-pay">
        <div className="content-pay">
          <div className="pay-title">
          <h1><span>Đường Lạc</span>-Lưu giữ những giá trị</h1>
        </div>
        <div className="form-pay">
          <div className="User">
            {Users && Users.email &&
            <span>
               {Users.name}
            </span>
            } 
            {(!Users || !Users.email) &&
             <span>
               <a href="/Login">Đăng Nhập</a>
             </span>
            } 
          </div>         
          <h2>Thông tin thanh toán</h2>
        <form>
            <div className="Thôngtin">
              <input  type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder="Họ và tên"></input>
            </div> 
            {err === false && (
                <span  className="err">Bạn cần nhập đầy đủ thông tin cá nhân để thanh toán.</span>
                )}
            <div className="email-number">
              <input className="email" type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email"></input>
              <input className="sdt" type="text" value={phone} inputMode="numeric" onChange={(e) => setphone(e.target.value)} onKeyDown={(e) => handleKeyDown(e)} placeholder="Điện thoại"></input>
            </div>
            <div className="Thôngtin">
              <input  type="text" value={address} onChange={(e) => setaddress(e.target.value)} placeholder="Địa chỉ"></input>
            </div>
        </form>
        </div>
        <div className="methot-pay">
            <div className="selection-header">
              <h2 className="selection-title">Phương thức thanh toán</h2>
            </div>
            <div className="content-box">
               <div className="content-box-row">
                <label className="radio-lable">
                  <div className="radio-input">
                    <input className="input-radio" type="radio" defaultChecked ></input>
                  </div>
                  <div className="content-input">
                    <div className="image">
                      <img className="main-img" src="http://localhost:8080/image/pay.png" alt="COD"></img>
                    </div>
                    <div className="title-methot-pay">
                    <select value={pay}  onChange={(e) => setpay(e.target.value)} >
                       <option >
                          Thanh toán khi nhận hàng(COD)
                       </option>
                       <option>
                          Thanh toán qua VNpay
                       </option>
                    </select>
                    
                    </div>
                  </div>
                </label>
               </div>
            </div>
            <div>
              
            </div>
        </div>
          <div className="footer-pay">
          <div className="cart-return">
          <a href="carts"> <button>Giỏ hàng </button></a>
          </div>
          {loading === false && 
          <div className="oder-item">
           <button onClick={() => payOder()}>Đặt Hàng</button>
          </div>
          }
          {loading === true && 
          <div className="oder-item">
           <button disabled onClick={() => payOder()}>Loading...</button>
          </div>
          }
          </div> 
          <div className="business">
              <div className="business-footer">
                <span>
                 Powered by Haravan
                </span>
              </div>
          </div>
        </div>
         
      </div>    
      <div className="information-items">
        <div className="map-items">
          <div className="items">
          <ul className="list-item">
           {items && items.length > 0 && items.map(item => {
            return(
                <li className="item" key={item.id}>
                  <div className="img-name">
                    <div className="image">
                      <img src={item.image} alt={item.name}></img>
                    </div>
                    <div className="item-name">
                     <span>{item.name}</span>
                    </div>
                  </div>           
                  <div className="price-late">
                    <span className="number-price">{item.price_original.toLocaleString()}₫</span>
                  </div>
            </li>
            )
          
           })}
          </ul>
          </div>
        </div>
        <div className="price-all-item">
          <div className="price-title">
           <span>Tạm tính</span>
           {items && items.price_original !== null && <span>{total_price.toLocaleString()}₫</span>}
          </div>
        </div>
        <div className="sum">
          <div className="sumsum">
            <div>
              <span>Tổng tiền</span>
              {items && items.price_original !== null && <span>{total_price.toLocaleString()}₫</span>}
            </div>
           
          </div>
          <div className="chuy">
             <span>Khách hàng vui lòng thanh toán phí ship khi nhận hàng</span>
          </div>
        </div>
      </div>
    </div>  
    </>)
}
export default Muahang