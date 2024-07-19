import React, { useEffect, useState} from "react";
import Menu from "../nav";
import Carosel from "../Carosel/carosel";
import Footer from "../footter/footer";
import store from "../redux/store";
import { Provider} from 'react-redux'; 
import axios from "axios";
import './product.scss';
// import {  useNavigate} from 'react-router-dom';
const Product = () => {
    const [itemProduct, setItems]  = useState()
    const [loading, setloading] = useState(true);
    // const navigate = useNavigate();
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
    
    return <>

      <Provider store = {store}>
         <Menu  
         />
      </Provider>
     
     
          <Carosel />
    
    <div className="container-home"  >
            <div className="card-main">
                {itemProduct && loading ===false && itemProduct.length > 0 && itemProduct.map(item => {
                 return(
                  <div className="item-product" key={item.id} > 
                   <div className="image-product" >
                    <button className="item-img-click-url"><a href={`/${item.url}`}><img className="img-product" src={item.image} alt={item.title}></img></a></button>
                   </div>
                   <h5 className="title-product">
                    <a  href="/Thanhtoan">{item.name}</a>
                    </h5>
                    <div className="price-product-box">
                        <span className="price-product">{item.price.toLocaleString()}₫</span>
                    </div>
                    <button className="btn-product"><a href={`/${item.url}`}>Xem chi tiết</a></button>
                  </div>
                  )  
                })} 
                {!itemProduct && loading === true && <div>loading...</div>}
            </div>
    </div>
    <div>
        <Footer />
      </div>
    </>
}
export default Product