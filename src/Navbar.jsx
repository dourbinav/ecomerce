import React, { useState } from 'react'
import { HiUserCircle } from "react-icons/hi";
import { MdOutlineShoppingCart  } from "react-icons/md";
import {AiOutlineHeart} from 'react-icons/ai';
import {GiHamburgerMenu } from 'react-icons/gi'
import {  useNavigate } from 'react-router-dom';
import ProfileBox from './ProfileBox';
import { Link } from 'react-router-dom';


export default function Navbar() {
  
  const [on,seton] = useState(false)
  const user=localStorage.getItem("user");

  const navigate = useNavigate()
function CART(){
navigate("/cart")
}
function profile(){
  navigate("/signup")
  }

  return (
    <div className='bg-black flex items-center p-2 '>
        <div className='flex items-center gap-x-2 sm:gap-x-0'>
         <GiHamburgerMenu className='bg-white sm:invisible' />  
        <Link to="/dashboard"><span className='text-white cursor-pointer '>shopit</span></Link>
        </div>
        <div className='invisible sm:visible flex w-0 sm:grow justify-center sm:gap-x-12  text-white'> 
        <Link to="/dashboard">    <div className=' cursor-pointer bold'>Sale</div></Link>
            <Link to="/dashboard"><div className=' cursor-pointer bold'>Trends</div></Link>
            <Link to="/dashboard"><div className=' cursor-pointer bold'>Mens</div></Link>
            <Link to="/dashboard"><div className=' cursor-pointer bold'>Womens</div></Link>
        </div>
        <div className='flex grow sm:grow-0  justify-end  gap-x-4 mt-2 '>
       <div onClick={CART} className='flex flex-col items-center '> 
        <MdOutlineShoppingCart className='cursor-pointer bg-white h-[14px] ' />
        <span className='text-white text-xs ' >Cart</span>
       </div>
        <div className='flex flex-col items-center'> 
         <AiOutlineHeart className='cursor-pointer bg-white h-[14px] ' /> 
         <span className='text-white text-xs '>Wishlist</span>
         </div>
         <div className='flex flex-col  items-center'  onMouseOver={()=>(seton(true))} onMouseOut={()=>(seton(false))}>
          <HiUserCircle  onClick={profile} className='cursor-pointer svg-cyan-200 bg-white h-[14px] '></HiUserCircle>
            <span className='text-white text-xs' >{user?user:"profile"}</span>
        {on && <div className='mt-[3rem] mr-[20rem] absolute '><ProfileBox/> </div>}
        </div>
        </div>
    </div>
  )
}
