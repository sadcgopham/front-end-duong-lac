import React, {useEffect, useState} from "react";
import Modal from "react-modal";
import "./modall.scss"
import axios from "axios";
import "./modaldelete.scss"
const Modall = (props) => {
     const {Show,CloseModal,userid} = props;
     const [id, setid] = useState()
     useEffect(() => {
       if(userid){
        setid(userid.id)
       }
     }, [userid])
    const DeleteUser = async() => {
         await axios.post(`http://localhost:8080/deleteUser`, {id})
          CloseModal()   
      }
      
      return (
    
      <Modal
        isOpen={Show}
        onRequestClose={CloseModal}
        className="container-modeldele"
      >
        <div className="content-delete">
          <button className="close" onClick={CloseModal}>X</button>
          <div className="title-modal"><h1>Xóa người dùng</h1> </div>
        <div>
         {userid && <div className="title-delete">
            <span>Bạn chắc chắn muốn xóa tài khoản <strong>{userid.email}</strong> khỏi hệ thống</span>
          </div>
          } 
        <div className="buttondelete">
         <button
          className="delete"
          onClick={() => DeleteUser()}>Xóa
         </button>
        </div>
        </div>
        </div>
      </Modal>
  
  );
};


export default Modall;