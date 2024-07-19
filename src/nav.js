import React, {useEffect, useState} from 'react';
import {  NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

import './nav.scss';


const Menu = () => {
  const user = useSelector((state) => state.User)
  const quatily = useSelector((state) => state.Carts)
  const [open, setOpen ] =  useState(true)
  // let quatily_local = JSON.parse(localStorage.getItem('cart'))
  // console.log('test lôcall',quatily_local);
  // const handleonclick = () =>{
  //   window.location.href = "/carts";
  // }
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 150) {
        setOpen(false)
      } else {
       
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(()=>{
    if( localStorage.getItem("pay")){
      localStorage.removeItem("pay");   
    }
  })
  const handleOnclickNavigation = () =>{
    if(open === true){
      setOpen(false)
    }
    else{
      setOpen(true)
    }
      
  }
  return (
  <>
<div className="menu">
  <div className='start-menu'>
   <div className='Navigation'> 
    <div className='all-list'>
      <button onClick={ handleOnclickNavigation}>
        <div className='list'>
         <i class="fa-solid fa-list"></i>
        </div> 
      </button>
      <span>Danh mục</span> 
    </div>  
       <ul className={open === true ? "list-product" : open === false ? "hidden-list":""} >
    <li><NavLink className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active" : "" }  to='/' >
          <h5>Thời trang công sở nữa</h5> 
         </NavLink>
      </li>
      <li><NavLink className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active" : "" }  to='/' >
          <h5> Đồng phục</h5>
         </NavLink>
      </li>
      <li><NavLink className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active" : "" }  to='/' >
          <h5> Giá tốt </h5>
         </NavLink>
      </li>
      <li><NavLink className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active" : "" }  to='/' >
          <h5>Phụ kiện</h5>
         </NavLink>
      </li>
    </ul>
    </div>
   
  </div>
  <div className='mid-menu'>
    <div className='logo'>
      <img src='http://localhost:8080/image/Asset1.png' alt='logo'/>
    </div>
    <div className='search'>
      <input type='text'/>
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div className='address-tell'>
      <span>Hotline tư vấn</span>
      <h3><a href='/'>096 241 1902</a></h3>
    </div>
    <div className='information'>
      <li><NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : "" } id='usern' to='/Product' >
          <div className='username'>
            <i class="fa-solid fa-user"></i>
            {user && user.name && <span>{user.name}</span>}
          </div>
          </NavLink>
      <div className='menu-2'>
     {(!user || !user.email) && <ul className='menulv2'>
      <li><a  href='/Login' >
           Đăng nhập
         </a>
      </li>
      <li><NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : "" }  to='/Register' >
         Đăng kí  
        </NavLink>
      </li>
      </ul>} 
      {user && user.name && <ul className='menulv2'>
      <li>
        <a href='sign_out'>
           Đăng xuất 
        </a>           
      </li>
      <li><NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : "" }  to='/Register' >
         Trang tài khoản  
        </NavLink>
      </li>
      </ul>} 
      </div>
    </li>
    </div>
  </div>
  <div className='end-menu'>
    <div>
      <li>
      <a href='/carts' >
      <div className='btn-cart'>
        <span className = 'title-cart'>Giỏ Hàng</span>
        <div className='img-cart'> 
        <div className = 'cart-icon'>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        {quatily && <div className='quatily'>   <i class="cartCount count_item_pr">{quatily.item_count}</i></div>} 
        
        </div>
      </div>
     </a>
    </li>
    </div>
  </div>
</div> 
    </>
  );
};

export default Menu;