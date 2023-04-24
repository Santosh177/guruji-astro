import React,{useState,useEffect,useRef} from 'react'
import './UserTestimonial.css'

import surya from '../Assects/userAstrologers/surya.svg'
import starIcon from '../Assects/StarIcon.svg'
import advert1 from '../Assects/userAstrologers/advert1.svg'
import advert2 from '../Assects/userAstrologers/advert2.jpg'
import advert3 from '../Assects/userAstrologers/advert3.jpeg'
import usertest1 from '../Assects/userAstrologers/usertest1.svg'
import usertest2 from '../Assects/userAstrologers/usertest2.svg'
import usertest3 from '../Assects/userAstrologers/usertest3.svg'

//crasoul advertisement
const colors = [advert1, advert2, advert3];
const delay = 2500;


function UserTestimonial() {
    const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div className='userContainer'>
      
      <div><img src={surya} style={{paddingTop:'2rem'}}/></div>
      <div style={{display:"flex",fontFamily: 'Sansation',
fontStyle: 'normal',
fontSize: '32px',
fontWeight: '700',
color:'#D97122'}}>
        <img src={starIcon}/>
        <h1>User Testimonial</h1>
        <img src={starIcon}/>
     </div>
     <div style={{display:'flex',paddingBottom:'5rem'}}> <img src ={usertest2}/><img src ={usertest1}/><img src ={usertest3}/></div>
 <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((element, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage: `url(${element})` }}
          ></div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>

    </div>
  )
}

export default UserTestimonial
