import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfileBox() {
  return (
    <div className='w-64 bg-black text-white  '>
        <span className='m-2  flex flex-col font-semibold'>
        <span><Link to="/signup" > <span>Signup</span> </Link>   || <Link to="/login" >    <span>Login</span>  </Link> </span>
        <span>My Cart</span>
        <span>Wishlist</span>
        <span>Sales</span>
        </span>
    </div>
  )
}
