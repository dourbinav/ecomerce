import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { productid } from "./Api";
import Loading from "./Loading";
import Navbar from "./Navbar";

export default function Productpage({Addtocart}) {
 
  const navigate=useNavigate()

   const user=localStorage.getItem("user")
    if(!user || user == undefined ){
      navigate('/login')
    }
  // },[user])

  const param = +useParams().id;
  // console.log("id is ", param)
  const [product, setproduct] = useState()
  const [loading,setloading]=useState(true)
  const [Value,setValue]=useState(1)
  useEffect(
    function () {
      const p = productid(param)
      p.then(function(response){
        setproduct(response.data)
        setloading(false)
      })
    },
    [param]
  )
  
  function AddCart(){
  Addtocart(param,Value,product.price)
  }


  if(loading)
  return <Loading />
  // console.log(product);


  return ( 
    <>
    <Navbar />
    <div className="m-8   bg-slate-200 h-screen flex flex-col justify-center">
        <img className="object-contain  p-4 sm:p-0 max-h-[23rem]  " src={product.thumbnail} alt="alt" ></img>
        <div className="space-y-1 flex flex-col m-4">
        <span className="font-semibold text-xl" >{product.category} : {product.title}</span>
        <span className="font-semibold text-xl bg-orange-200" >{product.brand}</span>
        <span className="font-semibold text-xl ">${product.price}</span>
        <span  className="font-semibold text-xs sm:text-xl ">{product.description}</span>
        <span  className="font-semibold text-xs sm:text-xl "> rating :{product.rating}</span>
        <span  className="font-semibold text-xs sm:text-xl "> instock:{product.stock}</span>
    </div>
    <div className="flex mx-4 gap-x-4 ">
    <input className="w-10" type="number" value={Value} onChange={(e)=>(setValue(+e.target.value))} ></input>
    <button className="bg-red-400 sm:text-xl p-1" onClick={AddCart}>Add to cart</button>
    </div>
    </div>
   
  </>
  );
}
