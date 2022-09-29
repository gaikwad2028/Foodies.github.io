import React from 'react'


export default function Dishes(props) {
  return (
    <div className='dish'>
        <div className='ho'>
        <div className='image'>
            <img src={props.images} alt="lk"  className='con' width="380px"></img>
        </div>
        <div className='name'>
            <p className='titel'>{props.titel}</p>
            <div className='fv'>
            <a href="/" className='price'>{props.order}</a><button className='jk'>Order</button>
            </div>
        </div>
        </div>
    </div>
  )
}
