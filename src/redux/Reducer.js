
import { combineReducers } from 'redux';
const initState = {
    
    items : [],
    total_weight: "",
    item_count : "",
    total_discounts : "",
    total_price : ""

};
let User = {
    email : "",
    name  : "",
    phone : "",
    address : ""
}
const rootReducer = (state = initState, action) => {
    if(action.type === 'items/additem'){     
        let total_weight = state.items.reduce((acc, item) => acc + item.grams_final, action.payload.grams)
        let total_price = state.items.reduce((acc, item) => acc + item.price_original, action.payload.price)
        let item_count = state.items.reduce((acc, item) => acc + item.quatily, 1)
             if(!state.items.find((item) => item.name === action.payload.name)){
               action.payload.id = +(state.items.length + 1);
               return  {  
                 ...state,
                items : [...state.items, action.payload],
                total_weight: total_weight,
                item_count : item_count,
                total_discounts : "",
                total_price : total_price 
                }
             }
        const index = state.items.findIndex((item) => item.name === action.payload.name);
        state.items[index].quatily = state.items[index].quatily + 1
        state.items[index].price_original = state.items[index].quatily * action.payload.price
        state.items[index].grams_final = state.items[index].quatily * action.payload.grams
        return {
         ...state,
         items: [...state.items] ,
         total_weight:total_weight  ,
         item_count : item_count,
         total_discounts : "",
         total_price : total_price
        }
    }
    if(action.type === 'items/reduction'){
        let total_weight = state.items.reduce((acc, item) => acc + item.grams_final, -action.payload.grams)
        let total_price = state.items.reduce((acc, item) => acc + item.price_original, -action.payload.price)
        let item_count = state.items.reduce((acc, item) => acc + item.quatily, -1)
     if(state.items.find((item) => item.name === action.payload.name)){
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        state.items[index].quatily = state.items[index].quatily - 1
        state.items[index].price_original = state.items[index].quatily * action.payload.price
        state.items[index].grams_final = state.items[index].quatily * action.payload.grams
        return {
            ...state,
            items: [...state.items] ,
            total_weight:total_weight  ,
            item_count : item_count,
            total_discounts : "",
            total_price : total_price
           }
     }
    

    }
    if(action.type === 'items/delete'){
        if(state.items.find((item) => item.name === action.payload.name)){
           let items = state.items.filter((item) => item.id !== action.payload.id)
            let total_weight = state.items.reduce((acc, item) => acc + item.grams_final, -action.payload.grams_final)
            let total_price = state.items.reduce((acc, item) => acc + item.price_original, -action.payload.price_original)
            let item_count = state.items.reduce((acc, item) => acc + item.quatily, -action.payload.quatily)
            return {
                ...state,
                items: items,
                total_weight:total_weight  ,
                item_count : item_count,
                total_discounts : "",
                total_price : total_price
               }
        }
        return state
    }
    
     if(action.type === 'items/localstorage'){
          return {
            ...state,
            item_count : action.payload.item_count ,
            items : action.payload.items,
            total_discounts : action.payload.total_discounts,
            total_price : action.payload.total_price,
            total_weight : action.payload.total_weight
         }
       
        
        
    }
    if(action.type === 'items/cart'){ 
        return {
            ...state,
            item_count :action.payload.item_count ,
            items :action.payload.items,
            total_discounts :action.payload.total_discounts,
            total_price :action.payload.total_price,
            total_weight :action.payload.total_weight
         }
    }
      else{
         return state
        }
      
    }
    


const rootUser = (state = User, action) => {
    if(action.type === 'getInfomationUser'){ 
       return {
        ...state,
        email : action.payload.email,
        name : action.payload.username,
        phone : action.payload.phone,
        address : action.payload.address
       }
    }
    else{
        return state
    }
}
const Reducer = combineReducers({
    Carts : rootReducer,
    User : rootUser
});
export default Reducer