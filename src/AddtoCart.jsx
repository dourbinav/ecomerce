import React,{useState,useEffect} from 'react'
import Navbar from "./Navbar"
import {  useNavigate } from 'react-router-dom'
import { productid } from './Api';
import Cartlist from './Cartlist';
import Loading from './Loading';

export default function AddtoCart({Cart,updateCart}) {

  let navigate = useNavigate()
  const user=localStorage.getItem("user")
  if(!user || user == undefined){
    navigate('/login')
  }

  const[loading,setloading]=useState(true)
  const [productsInfo,setproduct]=useState([])
  const productIds=Object.keys(Cart);
   useEffect(function(){
      const myproductpromise=[];
     for (let i=0;i<productIds.length;i++){
      const promise=productid(productIds[i]).then(function(response){
        return response.data})
      myproductpromise.push(promise)
     }
     Promise.all(myproductpromise).then(function(products){
      setproduct(products)
      setloading(false)
     })
 },[Cart])
//  console.log("outside useffect",productsInfo)
if(loading){
  return <Loading />
}

  return (
    <>
    <Navbar />
    <div className='bg-black m-2 text-white h-screen'>
   <Cartlist data={productsInfo} cart={Cart} updateCart={updateCart}/>
    </div>
    </>
  )
}
