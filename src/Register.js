import React, {  useState } from "react";

import "./Register.scss"
import axios from "axios";
const Register = () => {
    
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [confirmpass,setconfirmpass] = useState('')
    const [username,setUsername] = useState('')
    const [phone,setPhone] = useState('')
    const [sex,setSex] = useState('Nam')
    const [err, seterr] = useState(false)
    const [error, setError] = useState(false);
   const Validate = () => {
        if(!email ){
            return false
        }
        if(!pass ){
           
            return false
        }
        if(!username ){
            
            return false
        }
        if(!phone ){
            
            return false
        }
        if(pass !== confirmpass ){
           
            return false
        }
        if(!sex ){
            return false
        }
        var re = /\S+@\S+\.\S+/;
        if(!re.test(email)  ){
         return false
        }
        
        return true
 }
 function handleKeyDown(event) {
    const allowedKeys = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace']);
    if (!allowedKeys.has(event.key)) {
      event.preventDefault();
    }
  }
  function handleLoginSuccess() {
   
    window.location.href = "/";
  }
               
    const HandleSubmit = async(e) => {
        e.preventDefault()
     try{  
       let check = Validate() 
       console.log("check",check);  
        if(check === true){ 
            let  checkdataRegister = await axios.post('http://localhost:8080/users/Register', { email, pass, username, phone, sex})           
          if(checkdataRegister &&  checkdataRegister.data.EC === 0){
            handleLoginSuccess()
            return
            }
            else{
                setError(true)}  
            
        }
        else{   
            seterr(true)
           return
        }      
        }catch(err){
            console.log('dtss',err);
        }
     
    }
    return(
        <>
         <div className="component-Register">
       
        <div className="container-Register">
            <div className="logo-register">
               <img src="http://localhost:8080/image/Asset1.png" alt="logo"></img>
            </div>
            <div className="form-regiter">
        <h2>Đăng Ký Tài Khoản</h2>
        <form onSubmit={(e) => HandleSubmit(e)}>
            <div className="form-group">
                <label htmlFor="email"> Email:</label>
                <input 
                type="text" 
                onChange={(e) => setEmail(e.target.value)  }
                >
                </input>
                {error === true && (
                <span  className="err">Số di động/email bạn nhập đã sử dụng tạo tài khoản. Hãy dùng số điện thoại/email khác để tạo tài khoản.</span>
                )}
                {err === true && (
                <span  className="err">Bạn cần nhập đầy đủ thông tin.</span>
                )}
                </div>
            <div className="form-group">
                <label htmlFor="pass">Mật khẩu:</label>
                <input 
                type="password" value={pass}  
                
                onChange={(e) => setPass(e.target.value)}
                >

                </input>
            </div>
            <div className="form-group">
                <label htmlFor="pass">Nhập lại mật khẩu:</label>
                <input 
                type="password" value={confirmpass}  
                
                onChange={(e) => setconfirmpass(e.target.value)}
                >

                </input>
            </div>
            <div className="form-group">
                <label >Tên:</label>
                <input
                 type="text" value={username} 
              
                 onChange={(e) => setUsername(e.target.value)}
                  >

                  </input>
            </div>
            <div className="form-group">
                <label >Số điện thoại:</label>
                <input type="text"  value={phone} 
                onChange={(e) => setPhone(e.target.value)} onKeyDown={handleKeyDown} 
                ></input>
            </div>
            <div className="form-group">
                <label >Giới tính:</label>
                <select value={sex}  onChange={(e) => setSex(e.target.value)} >
                    <option 
                    >
                        Nam
                    </option>
                    <option 
                     
                    >
                        Nữ
                    </option>
                </select>
            </div>
            <button  type = "submit">Đăng ký</button>
        </form>
        </div>
    </div>
    </div>
    </>
    )
}
export default Register;