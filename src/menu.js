import React from "react";
import  "./menu.scss";
import { NavLink } from "react-router-dom";
  const Menu = () => {

    return(
        <div className="menu">
          <ul>
             <li><NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "" } to='/' >Trang chủ</NavLink></li>
             <li><NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "" } to='/contain' >Diễn đàn</NavLink></li>
             <li><NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "" } to='/blog' >Tin tức</NavLink></li>
             <li><NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "" } to='/quesion' >Hỏi đáp</NavLink></li>
             <li><NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "" } to='/link' >Liên hệ</NavLink></li>
          </ul>
        </div>
    );
}
export default Menu;