import React from 'react'
import { NavLink } from 'react-router-dom'
import image from "./image/Rectangle 1.png"
import biryani from "./image/khepsa.webp"
import mutton from "./image/muttonvade.png"
import vade from "./image/download.jpeg"
import tandoori from "./image/tandoori.png"





export default function Landing() {
  return (
    <div> <div className='ll'>
    <div className='home' data-aos="fade-up"
     data-aos-duration="3000">
    <div className='image2'>
      <img src={biryani} alt="not" width="500px" height="auto" className='land-img'></img>
    </div>
    <div className='intro'>
      <p className='order'>Hyderabadi Cuisine: Tracing  <br /> its History through Culinary</p>
      <article className='any'>Basin research involves the practical realization of the scale structure and <br /> the analysis of the results according to the studied models and working frequency.  </article>
      <div className='second'><NavLink to='/home' className="third">Order Now</NavLink ></div>
    </div>  
  </div>
  <div className='home-1' data-aos="fade-up"
     data-aos-duration="3000">
    <div className='image2'>
      <img src={image} alt="not" width="500px" height="auto" className='land-img'></img>
    </div>
    <div className='intro'>
      <p className='order'>Order your favourite biryani <br /> from our restaurant</p>
      <article className='any'>Basin research involves the practical realization of the scale structure and <br /> the analysis of the results according to the studied models and working frequency.  </article>
      <div className='second'><NavLink to='/home' className="third">Order Now</NavLink ></div>
    </div>  
  </div>
  <div className='home-2' data-aos="fade-up"
     data-aos-duration="3000">
    <div className='image2'>
      <img src={mutton} alt="not" width="500px" height="auto" className='land-img'></img>
    </div>
    <div className='intro'>
      <p className='order'>Maharashtrian  Cuisine: Tracing <br /> from our restaurant</p>
      <article className='any'>Basin research involves the practical realization of the scale structure and <br /> the analysis of the results according to the studied models and working frequency.  </article>
      <div className='second'><NavLink to='/home' className="third">Order Now</NavLink ></div>
    </div>  
  </div>
  <div className='home-0npm' data-aos="fade-up"
     data-aos-duration="3000">
  <div className='intro'>
      <p className='order'>Best Offer for you <br /> from our restaurant</p>
      <article className='any'>Basin research involves the practical realization of the scale structure and <br /> the analysis of the results according to the studied models and working frequency.  </article>
      <div className='second'><NavLink to='/home' className="third">Orded Now</NavLink ></div>
    </div>  
    <div className='image2'>
      <img src={tandoori} alt="not" width="550px" height="auto" className='land-img'></img>
    </div>
  </div>
  <div className='home-3' data-aos="fade-up"
     data-aos-duration="3000">
    <div className='image2'>
      <img src={vade} alt="not" width="500px" height="auto" className='land-img'></img>
    </div>
    <div className='intro'>
      <p className='order'>Pot tandoor biryani cuisine : <br /> from our restaurant</p>
      <article className='any'>Basin research involves the practical realization of the scale structure and <br /> the analysis of the results according to the studied models and working frequency.  </article>
      <div className='second'><NavLink to='/home' className="third">Order Now</NavLink ></div>
    </div>  
  </div>
  <div className='home-4' data-aos="fade-up"
     data-aos-duration="3000">
    <div className='image2'>
      <img src={tandoori} alt="not" width="500px" height="auto" className='land-img'></img>
    </div>
    <div className='intro'>
      <p className='order'>Hot Tandoor cuisine :<br /> from our restaurant</p>
      <article className='any'>Basin research involves the practical realization of the scale structure and <br /> the analysis of the results according to the studied models and working frequency.  </article>
      <div className='second'><NavLink to='/home' className="third">Order Now</NavLink ></div>
    </div>  
  </div>
  </div>
 
  </div>
  )
}
