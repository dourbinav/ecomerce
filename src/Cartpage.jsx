import React, { useState }  from "react";
import {ImCross} from 'react-icons/im'


export default function Cartpage({products,quantity,quantityChange,OnRemove,call}) {
  
  function handlechange(event){
    quantityChange(+event.target.value,products.id)
  }

  function handlecrossClick(){
    console.log(products)
    OnRemove(products.id)
  }

  

  return (
    <>
      <div className="bg-blend-luminosity py-2  mx-auto   "> 
        <div className="flex py-1 justify-around items-center">
         <span> <ImCross onClick={handlecrossClick} className="cursor-pointer" /></span>
          <img src={products.thumbnail} alt="p" className=" w-20 h-20"></img>
          <p className="">${products.price}</p>
          <input type='number' value={quantity} onChange={handlechange}  className='h-10 w-10 text-center bg-black' />
          <span  >${products.price*quantity}</span>
        </div>
      </div>
       </>
  );
}
