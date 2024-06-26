import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
  const error=useRouteError()
   console.log(error)
  return (
    <>
      <div className='bg-black'>
        Not FOund!
      </div>
    </>
  )
}

