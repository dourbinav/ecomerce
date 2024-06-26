import React from 'react'

export default function Productview(props) {
  return (
    <div>
        <img className="object-contain p-4 max-h-[23rem] " src={props.thumbnail} alt="alt" ></img>
        <div className="space-y-1 flex flex-col m-4">
        <span className="font-semibold text-xl" >{props.category} : {props.title}</span>
        <span className="font-semibold text-xl bg-orange-200" >{props.brand}</span>
        <span className="font-semibold text-xl">${props.price}</span>
        <span  className="font-semibold text-xs">{props.description}</span>
        <span  className="font-semibold text-xs"> rating :{props.rating}</span>
        <span  className="font-semibold text-xs"> instock:{props.stock}</span>
        </div>
    </div>
  )
}
