import React  from 'react'
import pic from "./image/Frame 1.jpg"
import { NavLink } from 'react-router-dom'


export default function Navbar() {

//   Const[menu, setMenu]=React.useState



  return (
    <>
    <div className='navbar'>
       <div className='content'>
       <NavLink to='/'><img src={pic} alt="ok" width="250px" className='bir'></img></NavLink>
        <NavLink to='/home'>Home</NavLink >
        <NavLink  to='/about'>About</NavLink >
        <NavLink to='/contact'>Contact</NavLink >
        <NavLink to='/login'>Log in</NavLink >
       </div>
    </div>
   
   </>
  )
}
