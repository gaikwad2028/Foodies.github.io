import React from 'react'
import pic from "./image/Frame 1.jpg"
export default function Footer() {
  return (
    <div className='footer'>
     <div className='hoy'>
        <div className='took'>
      <p className='address'><img src={pic} alt="take"  width="250px" className='bir'></img></p>
      </div>
      <div className='contact'>
        <div className='check-1'>
        <h2 className='check'>Contact</h2>
        <p className='check-3'>Features</p>
        <p className='check-3'>Features</p>
        <p className='check-3'>Features</p>
        <p className='check-3'>Features</p>
        </div>
        <div className='check-1'>
        <h2 className='check'>Address</h2>
        <p className='check-3'>Features</p>
        <p className='check-3'>Features</p>
        <p className='check-3'>Features</p>
        
        </div>
        <div className='check-1'>
        <h2 className='check'>Price</h2>
        <p className='check-3'>Features</p>
        <p className='check-3'>Features</p>
        <p className='check-3'>Features</p>
        <p className='check-3'>Features</p>
        </div>
        <div className='check-1'>
        <h2 className='check'>Email-us</h2>
        <p className='check-3'>Features</p>
        <p className='check-3'>Features</p>
        <p className='check-3'>Features</p>
        <p className='check-3'>Features</p>
        </div>
      </div>
    </div> 
    </div>
  )
}
