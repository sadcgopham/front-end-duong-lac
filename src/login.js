import React, {  useState } from "react";
import "./login.scss"
import axios from "axios";
const Login = () => { 
    const [emailLogin,setEmail] = useState('')
    const [passLogin,setPass] = useState('')
    const [error, setError] = useState(false);
   const Validate = () => {
        if(!emailLogin ){
            setError(true)
            return false
        }
        if(!passLogin){
            setError(true)
            return false
        }
        var re = /\S+@\S+\.\S+/;
        if(!re.test(emailLogin) ){
            setError(true)
         return false
        }
        
        return true
 }
    function handleLoginSuccess() {
         
      window.location.href = "/";
     }
    const handelLogin = async(e) => {
        e.preventDefault()
        let check = Validate()
        if(check === true){ 
            const getcarts = localStorage.getItem("cart")
            let cart = JSON.parse(getcarts)
            let data = await axios.post('http://localhost:8080/users/Login',{emailLogin,passLogin,cart},
                { withCredentials: true }
            )
         if(data && data.data.EC === 0){ 
            handleLoginSuccess()
       }
         else{
            setError(true)
         }
        }
        else{
            setError(true)
        }
    }
    return(
        <>
        <div className="component-login">
       
        <div className="container-login">
            <div className="image-login">
              <img src="http://localhost:8080/image/Asset1.png" alt="logo"></img>
            </div>
            <div className="form-login">
              <h2>Đăng Nhập Tài Khoản</h2>
             <form>
                <div className="form-group">
                  <label htmlFor="email"> Email:</label>
                  <input 
                    type="text" 
                  value={emailLogin} placeholder="Enter your Email"
                  onChange={(e) => setEmail(e.target.value)  }
                  >
                  </input>
                  {error && (
                  <span  className="err">Số di động bạn nhập không kết nối với tài khoản nào. Hãy tìm tài khoản của bạn và đăng nhập.</span>
                  )}
                  </div>
                 <div className="form-group">
                  <label htmlFor="pass">Mật Khẩu:</label>
                  <input 
                  type="password" value={passLogin}  
                  placeholder="Enter your password"
                  onChange={(e) => setPass(e.target.value)}
                  >

                  </input>
                </div>
               <div className="submit">
                <button className="login-user"  onClick={(e) =>handelLogin(e)}>Đăng nhập</button>
                <button className="forget-pass" >Quên mật khẩu</button>
               </div> 
              </form>
            </div>
       
    </div>
    </div>
    </>
    )
}
export default Login;