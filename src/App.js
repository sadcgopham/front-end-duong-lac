import React, {useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import Menu from "./nav";
import WeatherHook from './Api';
import Countdown from "./countdownH";
import Kountdown from "./countdown";
import Todo from "./todolist";
import Blog from "./blog";
import BlogNB from "./blogN";
import Notfould from "./Notfould";
import Hometwo from "./home";
import Login from "./login";
import Register from "./Register";
import Upload from "./upload";
import Muahang from "./pay/thanhtoan";
import Product from "./Product/product";
import ProductItem from "./Product/productItem";
import Productad from "./Product/productadmin";
import Carts from "./Cart/Cartlocal";
//import storeUser from "./reduxUser/storeUser";
import AllBills from "./pay/AdminPay";
import store from "./redux/store";
import { Provider, useDispatch, useSelector} from 'react-redux';  
import infomation from "./redux/infomation-user";  
import Action from "./redux/Action";
import axios from "axios";
import './App.scss';
const App = () => {
  const Users = useSelector((state) => state.User) 
  const Dispath = useDispatch()

  useEffect(() => {
  try {
    async function fetch() {
    let data = await axios.get('http://localhost:8080/myinformation',{ withCredentials: true })
     
    if(data && !data.data.EC ){ 
      Dispath(infomation(data.data[0]));
    }
    }
    fetch()
  } catch (error) {
    console.log('lỗi',error);
  }}, [Dispath]);
  useEffect(() => {
    try {
        async function fetchdata() {
    if(!Users.email){
      if(localStorage.getItem('cart')){
        Dispath(Action.cartlocal(JSON.parse(localStorage.getItem('cart'))))
        return
      }      
      return
    }
    if(Users.email){
       let data = await axios.get('http://localhost:8080/cart',{ withCredentials: true })  
        Dispath(Action.cart(data.data)) 
        if(localStorage.getItem('cart')){
          localStorage.removeItem("cart");
          return
        }   
        return
    }
    else{
       return
    }
     }
     fetchdata()
    } catch (error) {
        console.log(error);
    }
    
        }, [Dispath, Users]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list" element={<Home />} />
        <Route path="/adminProduct" element={<Productadmin />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<Saupage />} />
        <Route path="/weather" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogN />} />
        <Route path="*" element={<Notfouldd />} />
        <Route path="/login" element={<Loginn />} />
        <Route path="/Register" element={<Registers />} />
        <Route path="/Thanhtoan" element={<Thanhtoan />} />
        <Route path="/" element={<Products />} />
        <Route path="/carts" element={<CartsRoutes />} />
        <Route path="/:url" element={<Productitems />} />
        <Route path="/admin-bills" element={<AdminPay />} />
      </Routes>
    </BrowserRouter>
  );
};
const CartsRoutes = () => {
  return <Provider store = {store}>
          <Carts
            
          />
        </Provider>
}
const Productitems = () => {
  return  <Provider store = {store} >
            
             <ProductItem />
            </Provider>

}
const Productadmin = () =>{
    return <Productad />
}
  // <Provider store = {storeUser} >  </Provider>
const Products = () => {
  return <Product />
}
const Thanhtoan = () => {
  return <Muahang />
}
const HomePage = () => {
  return <WeatherHook />;
};

const AboutPage = () => {
  return (
    <div className='coundown'>
    <Countdown />
    <Kountdown />
    <Upload />
    </div>
  ) ;
  
};
const Home = () => {
  return <Hometwo />;
};
const ContactPage = () => {
  return (<Todo />);
};
const Saupage = () => {
  return (<><Blog />
 
  </>);
};
const BlogN = () => {
  return <BlogNB />
}
const Notfouldd = () => {
  return <Notfould />
}
const Loginn = () => {
  return <Login />
}
const Registers = () => {
  return <Register />
}
const AdminPay = () => {
  return <AllBills />
}
export default App;