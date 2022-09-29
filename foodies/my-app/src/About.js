import React from 'react'
import Human from "./image/human.png"
export default function About() {
  return (
    <>
      <div className='about'>
        <div className='a-f1'>
        <div className='humanimg'><img src={Human} alt="jg" className='human'></img>
        <div className='introduce'>
            <h1>Biryani House</h1>
            <p className='speech'>Did you know that you can leverage your blog content to drive a secondary source of revenue? How, exactly, you choose to do this depends on the unique needs of your business and your target customers.

For example, a local gym might monetize by offering special online classes or become an affiliate to promote a popular fitness brand’s products. A bookstore might start an online book club for paid members, or host ticketed author events via livestream. If you offer B2B services, a monetization strategy might involve online courses, paid webinars, or consultations. All of this could be supported by blog content.</p>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
