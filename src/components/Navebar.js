import React, { useEffect, useState } from 'react'
import './Navebar.css'


function Navebar() {

  const [show, setshow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        setshow(true)
      }
      else {
        setshow(false)
      }
    })
  }, [])


  return (
    <div className={`nav ${show && 'navblck'}`}>
      <img className='navimg'
        src="https://i.postimg.cc/BZ1kW94x/Watchbox-Logo.png" alt="" />
    </div>
  )
}

export default Navebar