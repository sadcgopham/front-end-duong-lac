import axios from "axios";
import React, { useEffect,  useState} from "react";
import Menu from "../nav";
import Footer from "../footter/footer";
import store from "../redux/store";
import {useParams} from 'react-router-dom';
import "./productItem.scss"
import {  Provider,useDispatch, useSelector} from "react-redux";
import Action from "../redux/Action";
const ProductItem = () => {
    const user = useSelector((state) => state.User)
    const Dispath = useDispatch()
    let {url} = useParams()
    const [getItem , setItem] = useState()
    const cartitem =  useSelector((state) => state.Carts)
    const [count, setcount] = useState(0)
    useEffect(() => {
        try {
        if(!user.email){
             Dispath(Action.cartlocal(JSON.parse(localStorage.getItem('cart'))))
        }
     
        } catch (error) {
            console.log(error);
        }
        
            }, [Dispath, user]);
     useEffect(() => {
        setcount(1)
                if(!user.email && count !== 0){
           localStorage.setItem("cart", JSON.stringify(cartitem));
         }
     
       }, [cartitem, user, count]);
    useEffect(() => {
        try {
             async function fetch() {       
                const Item = await axios.get(`http://localhost:8080/product/${url}`)
                setItem( {
                    id : 1,
                    grams : Item.data.dataitem.grams,     
                    image : Item.data.dataitem.image,
                    price : Item.data.dataitem.price,
                    quatily : 1,
                    grams_final : Item.data.dataitem.grams,
                    price_original : Item.data.dataitem.price_original,
                    name : Item.data.dataitem.name,
                    url : Item.data.dataitem.url,
                    content : Item.data.dataitem.content,
                    vendor : Item.data.dataitem.vendor
                })
                
             } 
             fetch()
        } 
        catch (error) {
            console.log(error);
        } 
    }, [url])
    const handleonclick = (item) => { 
        localStorage.setItem("pay", JSON.stringify([item]));
    }
   
      
    const addItem = async(items) => { 
        
        let item = {
            grams : items.grams,     
            image : items.image,
            price : items.price,
            quatily : 1,
            grams_final : items.grams,
            price_original : items.price_original,
            name : items.name,
            url : items.url,
        }
       console.log("fiter",item);
    Dispath(Action.additem(item));
        if(user && user.email){
            let total_weight= +(cartitem.total_weight + item.grams ) ;
            let item_count = +(cartitem.item_count + item.quatily);
            let total_discounts = 0;
            let total_price = +(cartitem.total_price + item.price)
             await axios.post("http://localhost:8080/add",{item,total_weight,item_count,total_discounts,total_price}, { withCredentials: true })
         return
        }
        else{
            return
        }
        
    }
       return <>
       
      <Provider store = {store}>
         <Menu 
           
         />
      </Provider>
     
       {getItem && 
        <div className="container-item">
            <div className="main-img">
                 <img className="img-main" src={getItem.image} alt={getItem.name}></img>
            </div>
           <div className="content-item">
            <div className="content">
                <div className="content-name-product"><h3>{getItem.name}</h3></div>
                <div><h4>{getItem.content}</h4></div> 
                <div className="price"><span>{getItem.price.toLocaleString()}₫</span></div>
                <div className="button-control">
                  <button className="btn-productitem-add" onClick={()=>addItem(getItem)}>Thêm vào giỏ hàng </button>
                  <a href="/Thanhtoan"><button className="btn-productitem-pay" onClick={() => handleonclick(getItem)}>Mua Ngay</button></a>
                </div>
            </div>
           </div>
        </div>
       } 
       <div>
        <Footer />
      </div>
       </>
}
export default ProductItem