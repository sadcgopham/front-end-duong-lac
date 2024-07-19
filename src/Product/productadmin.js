import React, { useEffect, useState} from "react";
import Footer from "../footter/footer";
import Modalproduct from "./modaladdProduct";
import axios from "axios";
import './productadmin.scss';
const Productad = () => {
    const [itemProduct, setItems]  = useState()
    const [loading, setloading] = useState(true);
    const [show,setshow] = useState(false)
    const handleCloseModal = () => {
      setshow(false)
    }
    useEffect(() => {
        try {
            async function fetch() {
            let data = await axios.get('http://localhost:8080/product')
            setItems(data.data.dataproduct)
            setloading(false)
            }
            fetch()
        } catch (error) {
            console.log(error);
        }
    }, [])
    const deleteproduct = async(id) =>{
        await axios.post("http://localhost:8080/admin_delete_product",{id})       
        window.location.href = "/adminProduct";
    }
    return <> 
    <Modalproduct 
      isShow = {show}
      Close = {handleCloseModal}
      
    />  
    <div className="container-admin"  >
        <div className="title-ql"><h1>Quản lý sản phẩm</h1></div>
        <div className="btn-admin">
            <button className="btn-add-product" onClick={() => setshow(true)} >Thêm sản phẩm</button>
        </div> 
        <div className="container-productAll">
            <div className="card-main">
                {itemProduct && loading ===false && itemProduct.length > 0 && itemProduct.map(item => {
                 return(
                  <div className="item-product" key={item.id} > 
                   <div className="image-product" >
                    <img className="img-product" src={item.image} alt={item.title}></img>
                   </div>
                   <h5 className="title-product">
                    <a  href="/Thanhtoan">{item.name}</a>
                    </h5>
                    <div className="price-product-box">
                        <span className="price-product">{item.price.toLocaleString()}₫</span>
                    </div>
                    <div className="edit-delete-product">
                        <button className="btn-edit-product">Sửa</button>
                      <button className="btn-delete-product" onClick={() => deleteproduct(item.id)}>Xóa</button>
                    </div>
                      
                  </div>
                  )  
                })} 
                {!itemProduct && loading === true && <div>loading...</div>}
            </div>
        </div>
    </div>
    <div>
        <Footer />
      </div>
    </>
}
export default Productad