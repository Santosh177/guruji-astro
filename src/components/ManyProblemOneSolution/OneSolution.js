import React from 'react'
import './OneSolution.css'
import pto1 from '../Assects/One solution/pto1.svg'
import pto2 from '../Assects/One solution/pto2.svg'
import pto3 from '../Assects/One solution/pto3.svg'
import pto4 from '../Assects/One solution/pto4.svg'
import pto5 from '../Assects/One solution/pto5.svg'
import pto6 from '../Assects/One solution/pto6.svg'
import pto7 from '../Assects/One solution/pto7.svg'
import pto8 from '../Assects/One solution/pto8.svg'
import pto9 from '../Assects/One solution/pto9.svg'
import pto10 from '../Assects/One solution/pto10.svg'
import chakra from '../Assects/One solution/chakra.svg'
import surya from '../Assects/One solution/surya.svg'

const OneSolution = () => {
  return (
    <div className='oneSolution'>
    <div className='oneSolutionLeft'>
      <div><img src={pto1}/></div>
      <div><img src={pto2}/></div>
      <div><img src={pto3}/></div>
      <div><img src={pto4}/></div>
      <div><img src={pto5}/></div>
    </div>
    <div className='oneSolutionMiddle'>
        <img src ={chakra}/>
        <img src ={surya}/>
    </div>
    <div className='oneSolutionRight'>
    <div><img src={pto6}/></div>
      <div><img src={pto7}/></div>
      <div><img src={pto8}/></div>
      <div><img src={pto9}/></div>
      <div><img src={pto10}/></div>
    </div>
    </div>
  )
}

export default OneSolution
