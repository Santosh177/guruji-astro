import React from 'react'
import './Header.css'
import Navbar from './Navbar'
import backGround1 from '../Assects/Header/backGround1.svg'
import photo2 from '../Assects/Header/photo2.svg'

const Header = () => {
  
  return (
    <div className='headerContainer' style={{backgroundImage:`url(${backGround1})`}}>
      <Navbar/>
      <div classname = 'headerMiddle'>
      <div style={{color:'white'}}><h1>“Astrology for Clarity”</h1>
      <h2>Your Name is a Vedic Astrologer and has expertise in Vaastu and Mantra Theraphy</h2>
      </div>
      <button style={{color:'white'}}>Consult Now</button>
      <div>
        <img src={photo2}/>
      </div>
      </div>
    </div>
  )
}


export default Header
