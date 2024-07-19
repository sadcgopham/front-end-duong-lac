import React, {  useState } from "react";
import Modal from "react-modal";
import "./modall.scss"
import { useEffect } from "react";
import MyApi from "./AddUser";
const Modalll = (props) => {
    const {ModalOpen,handleCloseModall,edits,handleEditUser} = props;
    const [name, setname] = useState()
    const [job, setjob] = useState()

     useEffect(() => {
        if(ModalOpen){
          setname(edits.first_name)
          setjob(edits.last_name)
        }
     }, [edits,ModalOpen])

    const handlesubmit =async () => {
      const res =await MyApi.PutApi(name, job)
       console.log('edit',res);
      if(res && res.data.updatedAt){
       
        handleEditUser({
          first_name:name,
          last_name:job,
          id:edits.id
         } ) 
         handleCloseModall()
        }
       }
    const handleonchange = (e) => {
       setjob(e.target.value)
     }
     const handleonchangee = (e) => {
       setname(e.target.value)
     }
      return (
    
      <Modal
        isOpen={ModalOpen}
        onRequestClose={handleCloseModall}
      >

        <div className="content">
          <button onClick={handleCloseModall}>X</button>
        <h1>Edit User</h1>
        <h3>emaill</h3>
        <input  placeholder="name"
         value={name}
         onChange={handleonchangee}
        />
        <h3>password</h3>
        <input  placeholder="password"
         value={job}
         onChange={handleonchange}/>
        <div>
          <button
          onClick={handlesubmit}
           >
            submit
        </button>
        </div>
        </div>
      </Modal>
  
  );
};


export default Modalll;