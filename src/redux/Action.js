 const Action = {
  additem : (data) => {
  return {
    type : 'items/additem',
    payload : data
  }  
},
  reduction : (data) =>{
    return {
      type : 'items/reduction',
      payload : data
    }
  },
  delete : (data) =>{
    return {
      type : 'items/delete',
      payload : data
    }
  },
  cart : (data) => {
    return {
      type : 'items/cart',
      payload : data
    }
  },
  cartlocal : (data) => {
    return {
      type : 'items/localstorage',
      payload : data
    }
  }
}
export default Action