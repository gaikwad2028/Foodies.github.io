import React, { useEffect } from 'react'
import Dishes from './Dishes.js'
import Data from './Data.jsx'

export default function Shows(props) {

  var [menu, setMenu] = React.useState([])
  var [menu1, setMenu1] = React.useState([])

  var [flag2, flagSet] = React.useState(false)

  useEffect(() => {
    let url = Data
    console.log('url', url)
    setMenu(Data)
  }, [])

  const handelchange = (e) => {

    var res1 = [];
    
    console.log(e.target.value.length)
    menu.map((res) => {
      if ((e.target.value.length > 0)) {
        if (res.dish.includes((e.target.value))) {
          res1.push(res)
        }  
      }
    })
   
    if (res1.length===0) {
      flagSet(true)
    }
    setMenu1(res1)
   
  }



  return (
    <div>
      <div className='search'>
        <input type="text" onChange={handelchange} className=" eat" /><p className='find'> search</p></div>

      {
        menu1.length > 1 ?
          menu1.map((menu, index) => {
            return <div key={index} className="cent" ><a href={menu.url}><h2 className='tikka'>{menu.dish}</h2></a>
            </div>
          }) : flag2 ? <div className="cent" ><h2 className='tikka'>{'No Result Found'}</h2>
          </div> : ''
      }
      <div className='bunch'>
        <div className='bunchname'>
          {
            Data.map((res) => {
              return <div key={res.id} className="take" data-aos="flip-right" ><Dishes titel={res.dish} images={res.image} order={res.price}></Dishes></div>
            })
          }
        </div>
      </div>
    </div>
  )


}