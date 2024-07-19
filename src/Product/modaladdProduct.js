import React, {useState} from "react";
import Modal from "react-modal";
import "./modalladdProduct.scss"

import axios from "axios";
const Modelproduct = (props) => {
     const {isShow,Close} = props;
     //const [id, setid] = useState()
     const [name, setname] = useState()
     const [sku, setsku] = useState()
     const [image, setImage] = useState()
     const [file, setFile] = useState()
     const [url, seturl] = useState()
     const [price, setprice] = useState()
     const [content, setcontent] = useState()
     const [price_final, setpricefinal] = useState()
     const [price_original, setpriceoriginal] = useState()
     const [grams, setgrams] = useState()

     
     const handleChange = (event) => {
      setFile(event.target.files[0]);
      
    };
    const uploadImg = async() =>{ 
      let formData = new FormData();
      formData.append('file',file)

      let data =  await axios.post(`http://localhost:8080/upload-profile-pic`,  formData, {
         headers: {
           'Content-Type': 'multipart/form-data', 
        },
      });

      
      
      setImage(data.data.DT)
    }
    const Postdata = async() => { 
    
        await axios.post(`http://localhost:8080/addproductadimin`, {name, sku,url,price,content,grams,price_final,price_original,image});   
         window.location.href = "/adminProduct"; 
        
      }
      
      return (
    
      <Modal
        isOpen={isShow}
        onRequestClose={Close}
        ariaHideApp={false}
        className="container-modelproduct"
      >

        <div className="content-product">
          <button className="close" onClick={Close}>X</button>
        <h1>Thêm sản phẩm</h1>
        <div className="input-row">
          <label>
           <span>Tên sản phẩm</span>
           <input 
            value={name}
            onChange={(e) => setname(e.target.value)}
           />
          </label>
          <label>
           <span>loại sản phẩm</span>
           <input  
            value={sku}
            onChange={(e) => setsku(e.target.value)}/>
          </label>
        </div>  
        <div className="input-row" >
         <label>
          <span>Đường dẫn</span>
          <input  
          value={url}
          onChange={(e) => seturl(e.target.value)}/> 
         </label> 
         <label>
          <span>Giá sản phẩm</span>
          <input  
           value={price}
           onChange={(e) => setprice(e.target.value)}/>
         </label>
        </div>  
        <div className="input-row">
          <label>
           <span>Giá lớn nhất</span>
           <input  
            value={price_final}
            onChange={(e) => setpricefinal(e.target.value)}/>
          </label>
          <label>
           <span>Giá cuối cùng</span>
           <input  
            value={price_original}
            onChange={(e) => setpriceoriginal(e.target.value)}/>
          </label>
        </div> 
        <div className="input-row">
          <label>
           <span>cân nặng</span>
           <input  
            value={grams}
            onChange={(e) => setgrams(e.target.value)}/>
          </label>
          <label>
           <span>Nội dung</span>
           <input  
            value={content}
            onChange={(e) => setcontent(e.target.value)}/>
          </label>
        </div> 
        <div className="input-row-file">
          <label>
           <span>Ảnh sản phẩm</span>
           <input 
            type="file" 
            onChange={handleChange}/>
            <button onClick={() => uploadImg()}>Tải ảnh</button>
          </label>
        </div> 
        <div>
         <button
         className="submit"
        onClick={() => Postdata()}>Thêm
        </button>
       
        </div>
        </div>
      </Modal>
  
  );
};


export default Modelproduct;