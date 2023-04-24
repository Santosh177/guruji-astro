import React from 'react'
import './UserReview.css'
import StarIcon from '../Assects/StarIcon.svg'
import man1 from '../Assects/man1.svg'
import man2 from '../Assects/man2.svg'
import man3 from '../Assects/man3.svg'
import man4 from '../Assects/man4.svg'
import girl1 from '../Assects/girl1.svg'
import girl2 from '../Assects/girl2.svg'
import girl3 from '../Assects/girl3.svg'

const UserReviw = () => {
  
  return (
    <div className='container'>
        <div className='userReview'>
            <img src={StarIcon} alt='loading'/>
            <h1>User Review</h1>
            <img src={StarIcon} alt='loading'/>
        </div>
        <div className='semiContainer'>
        <div class="star-rating">
  <span class="star">&#9733;</span>
  <span class="star">&#9733;</span>
  <span class="star">&#9733;</span>
  <span class="star">&#9733;</span>
  <span class="star5">&#9733;</span>
</div>

    
            <div>  <h1> Explore the Mysteries of the Universe with Our Expert Astrology Services Explore</h1>    
       <h1 style={{paddingLeft:'2rem'}}>the Mysteries of the Universe with Our Expert Astrology ServicesExplore the</h1> 
        <h1 style={{paddingLeft:'10rem'}}> Mysteries of the Universe with </h1></div>
        <div style={{display:"flex"}}>
            <img src={man1} alt='loading'/>
            <img src={man2} alt='loading'/>
            <img src={man3} alt='loading'/>
            <img src={man4} alt='loading'/>
            <img src={girl1} alt='loading'/>
            <img src={girl2} alt='loading'/>
            <img src={girl3} alt='loading'/>
            
        </div>
    </div>
    </div>
  )
}

export default UserReviw
