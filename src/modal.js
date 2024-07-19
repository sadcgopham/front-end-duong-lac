import React, {useEffect, useState} from "react";
import Modal from "react-modal";
import "./modall.scss"
import axios from "axios";
const Modall = (props) => {
     const {isShow,handleCloseModal,user} = props;
     const [id, setid] = useState()
     const [name, setname] = useState()
     const [email, setemail] = useState()
     const [phone, setphone] = useState()
     const [sex, setsex] = useState()
     const [address, setaddress] = useState()
     
     useEffect(() => {
       if(user){
        setid(user.id)
        setname(user.username);
        setemail(user.email);
        setsex(user.sex);
        setphone(user.phone);
        setaddress(user.address);
       }
     }, [user])
    const Postdata = async() => {
         await axios.post(`http://localhost:8080/Update-user`,{email,name,sex,phone,address,id})
          handleCloseModal()  
          window.location.href = "/list"; 
      }
      
      return (
    
      <Modal
        isOpen={isShow}
        onRequestClose={handleCloseModal}
        className="container-model"
      >

        <div className="content">
          <button className="close" onClick={handleCloseModal}>X</button>
        <h1>Sửa thông tin người dùng</h1>
        <div className="input-row">
          <label>
           <span>Tên</span>
           <input 
            value={name}
            onChange={(e) => setname(e.target.value)}
           />
          </label>
          <label>
           <span>Email</span>
           <input  
            value={email}
            onChange={(e) => setemail(e.target.value)}/>
          </label>
        </div>  
        <div className="input-row" >
         <label>
          <span>Giới tính</span>
          <input  
          value={sex}
          onChange={(e) => setsex(e.target.value)}/>
         </label> 
         <label>
          <span>SĐT</span>
          <input  
           value={phone}
           onChange={(e) => setphone(e.target.value)}/>
         </label>
        </div>  
        <div className="input-row">
          <label>
           <span>Địa chỉ</span>
           <input  
            value={address}
            onChange={(e) => setaddress(e.target.value)}/>
          </label>
        </div> 
        <div>
        <button
         className="submit"
        onClick={() => Postdata()}>Thay đổi
        </button>
        </div>
        </div>
      </Modal>
  
  );
};


export default Modall;