import React, { useState,useEffect } from 'react';
import Modall from "./modal";
import axios from "axios";
import './home.scss'
//import Pagination from "./pagination";
//import Modall from "./modal";
//import Modalll from "./edituser";
import Modaldelete from "./modaldelete";
//import Upload from "./upload";
//import { debounce } from "lodash";
//import {  NavLink } from 'react-router-dom';

const Hometwo = () => {
  const [loading, setloading] = useState(true);
  const [users, setdata] = useState();
 const [show,setshow] = useState(false)
 const [showde,setshowde] = useState(false)
 const [user,setuser] = useState()
 const [userid,setuserid] = useState()
 const handleCloseModal = () =>{
  setshow(false)
 }
 const CloseModal = () =>{
  setshowde(false)
 }
//  const handlopenModal = () => {
//   setshow(true)
//  }
  useEffect(() => {
        try {
          async function fetch() {
            const response = await axios.get(`http://localhost:8080/AllUser`);
           console.log(response);
            setdata(response.data.DT);
           // setTotalPages(Math.ceil(response.data.total / response.data.data.length))
            setloading(false);

          }
          fetch();
        } catch (error) {
          console.error(error);
          setloading(true);
        }
      }, []);
      const GetUser = (item) =>{
        setshow(true)
        setuser(item)
      }
      const Delete = async(item) =>{
        setshowde(true)
        setuserid(item)
           
      }
    // {loading === false && userr && userr.map((users) => {
    //           return (
    //           <tr className='dong' key={users.id}>
    //             <td>{users.id}</td>
    //             <td>{users.email}</td>
    //             <td>{users.username}</td>
    //             <td>{users.phone}</td>
    //             <td>{users.address}</td>
    //             <td>
    //               <button className='btn-red'
    //                 onClick={() => openmodals(users)} 
    //                  >
    //                 Edits
    //               </button>
    //               <button className='btn-yellow'
    //               onClick={() => opendelete(users)}
    //               >
    //                 delete
    //               </button>
    //             </td>
    //           </tr>
    //         );})} 
      

    return (
      <>
      <Modall 
        isShow = {show}
        handleCloseModal = {handleCloseModal}
        user = {user}
      />
      <Modaldelete 
        Show = {showde}
        CloseModal = {CloseModal}
        userid = {userid}
      />
      <div className="table-container">
      <table>
        <caption>Quản lý người dùng</caption>
        <tr>
          <th>Stt</th>
          <th>Email</th>
          <th>Tên</th>
          <th>Giới tính</th>
          <th>SĐT</th>
          <th>Địa chỉ</th>
          <th>Điều chỉnh</th>
        </tr>
        {users && users.map((item, index) => {
          return(
            <tr key={item.id}>
             <td>{index + 1}</td>
             <td>{item.email}</td>
             <td>{item.username}</td>
             <td>{item.sex}</td>
             <td>{item.phone}</td>
             <td>{item.address}</td>
             <td className='Modem'>
              <button className='edit'  onClick ={() => GetUser(item)} >Sửa</button>
              <button className='delete' onClick={() => Delete(item)}>xóa</button>
             </td>
            </tr>
          )
        })}
      </table>
    </div>
     {loading === true && <div>loading...</div>}
      </>
    );
};

export default Hometwo;