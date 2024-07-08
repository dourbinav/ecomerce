import React, { useEffect, useState } from "react";
import  Login  from "./Login";
import Signup from "./Signup";
import Home from './Home'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import Error from "./Error";
import Productpage from "./Productpage";
import AddtoCart from "./AddtoCart";


function App() {

  const [user,setuser]=useState(null)
  
  const [isloggedin,setloggedin]=useState(false)
  const token=localStorage.getItem('token')
  useEffect(()=>{
    if(token){
      localStorage.setItem("user",user)
      setloggedin(true)
    }
    else{
      setloggedin(false)
    }
  },[isloggedin])

  const savedDatastring = localStorage.getItem("MyCart") || "{}";
  const savedData = JSON.parse(savedDatastring);
  
  const [cart,setcart]=useState(savedData)


  function getItem(productId,count){
    let oldcount = cart[productId] || 0;
    console.log(oldcount)
    const newcart = { ...cart, [productId]: oldcount + count }
    updateCart(newcart);
  }
  const totalcount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);
  

  function updateCart(newcart) {
    setcart(newcart);
    const cartstring = JSON.stringify(newcart);
    localStorage.setItem("MyCart", cartstring);
  }

 
  const router=createBrowserRouter([
    {path:'/signup', element:<Signup user={user}/>},
    {path:'/', element:<Login setuser={setuser}/>},
    {path:'/dashboard',element:<Dashboard user={user} />},
    {path:'/cart',element:<AddtoCart Cart={cart} user={user}  updateCart={updateCart} />},
    {path:'/dashboard/:id',element:<Productpage user={user}  Addtocart={getItem} />},
    {path:'*',errorElement:< Error />}
  ])
    

  
  return (
   <>
   <RouterProvider  router={router}></RouterProvider>
   </>
  );
}

export default App;
