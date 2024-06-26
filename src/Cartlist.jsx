import React, { useEffect, useState } from 'react'
import Cartpage from './Cartpage'
import { displayRazorpay } from './Api'
import Loading from './Loading'


 function Cartlist({data,cart,updateCart}) {
      const [localcart,setlocalcart]=useState(cart)
      const [amount,setamount]=useState(0)
        const count=Object.values(localcart)
      const[loading,setloading]=useState(true)
      
  function pay(){
    const username=localStorage.getItem("user")
    displayRazorpay(amount,username);
  }

      useEffect(() => {
        let total = 0;
        const keys = Object.keys(localcart);
        const values = Object.values(localcart);
        for (let i = 0; i < data.length; i++) {
          const price = Number(data[i].price);
          const quantity = Number(values[i]);
          total += price * quantity;
        }
        setamount(total)
        console.log(amount)
      }, [count])

    useEffect(function(){
setlocalcart(cart)
setloading(false)
    },[cart])

    function handlequantitychange(newvalue,product){
        const newlocalcart={...localcart,[product]:newvalue}
        setlocalcart(newlocalcart)
    }

    function handleupdateCart(){
        updateCart(localcart)
    }

    function handleRemove(product){
        const newCart={...cart}
        delete newCart[product]
        updateCart(newCart)
        setloading(true)
    }
     
    if(loading){
     return <Loading />
    }
    
  return (
    <div>
        <div className="flex justify-around sm:gap-1">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>
        {data.map(function(product){        
      return <Cartpage key={product.title} products={product} quantity={localcart[product.id]} quantityChange={handlequantitychange} OnRemove={handleRemove}    />
        })}
        <br></br>
        <div className>
          <label className='text-white text-3xl font-bold'>Total amount: </label>
          <span className='text-white text-2xl ml-4'>${amount}</span>
        </div>
       <div className='flex justify-end m-2 '>
        <button onClick={handleupdateCart} className="p-2 bg-slate-300 font-semibold  rounded-md text-center">updateCart</button>
       </div>
       <div className='flex justify-end m-2 '>
       <button onClick={pay} className="p-2 bg-slate-300 font-semibold  rounded-md text-center" >Payment</button>
       </div>
    </div>
  )
}

export default Cartlist;

