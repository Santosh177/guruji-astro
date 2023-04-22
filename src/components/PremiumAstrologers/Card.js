import React from 'react'
import './Card.css'
import ast1 from '../Assects/Astrologers/ast1.svg'
import ast2 from '../Assects/Astrologers/ast2.svg'
import ast3 from '../Assects/Astrologers/ast3.svg'
import ast4 from '../Assects/Astrologers/ast4.svg'
import ast5 from '../Assects/Astrologers/ast5.svg'
import ast6 from '../Assects/Astrologers/ast6.svg'
import ast7 from '../Assects/Astrologers/ast7.svg'
import ast8 from '../Assects/Astrologers/ast8.svg'
import ast9 from '../Assects/Astrologers/ast9.svg'
import StarIcon from '../Assects/StarIcon.svg'
const Card=()=> {
  return (
    <div className='astroContainer'>
        <div style={{display:'flex'}}><img src={StarIcon}/>
        <h1>Premium Astrologers</h1>
        <img src={StarIcon}/></div>
        
    <div className="cardContainer">
      
    </div></div>
  )
}

export default Card
