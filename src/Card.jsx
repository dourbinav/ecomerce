import React from 'react'
import { Link } from 'react-router-dom';

export default function Card ({id,title,price,image,description}) {
 return (
  
     <div className='bg-gray-700 h-80 w-max-xs sm:my-8 my-2  sm:mx-4 mx-2 p-2 shadow-xl shadow-gray-200 overflow-hidden'>
        <div className='h-4/6 rounded-sm '>
       <Link to={"/dashboard/"+id}> <img className=' h-full w-full ' src={image} alt="img"></img></Link>
        </div>
        <span className='sm:font-bold font-semibold text-white text-center block'>{title}</span>
        <span className='font-semibold block  text-white'>${price}</span>
        <span className='sm:font-bold  text-center text-xs text-white block'>{description}</span>
     </div>
  );
}
