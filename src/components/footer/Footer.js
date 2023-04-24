import React from 'react'
import "./Footer.css"
import GurujiIcon from '../Assects/GurujiIcon.svg'
import PaytmIcon from '../Assects/PaytmIcon.svg'
import RazorpayIcon from '../Assects/RazorpayIcon.svg'
import SocialMediaIcon from '../Assects/SocialMediaIcon.svg'
import StripIcon from '../Assects/StripeIcon.svg'

function Footer() {
    return (
        <div className='footer'>
            <div className='footerLeft'>
                <div className='foole1'><img src={GurujiIcon} alt='loading'/>
                </div>
                <div className='fooLe2'><h1> About Guruji s2 to 3 lines what guruji </h1>
                    <h1> do and how it works About Guruji s2 to</h1>
                    <h1> 3 lines what guruji do and how it</h1>
                    <h1> works </h1>
                </div>
                <div className='foole3'> <img src={SocialMediaIcon} alt='loading' /></div>
                <h1 className='foole4'>Trusted & Seals</h1>
                <div className='foole5'><img src={RazorpayIcon} alt='loading' />
                    <img src={PaytmIcon} alt='loading'/></div>
                <div><img src={StripIcon} alt='loading'/></div>
            </div>
            <div className='footerMiddle1'>
                <div >
                    <h1 className='foomid1'>Company</h1>
                    <h2>Privacy Policy</h2>
                    <h2>T &C</h2>
                    <h2>Varied Payment</h2>
                </div>
                <div>
                    <h1>Collaborate</h1>
                    <h1>Clever Tap</h1>
                    <h1>Exotel</h1>
                    <h1>Facebook</h1>
                    <h1>Quora</h1>
                    <h1>Google</h1>
                    <h1>Youtube</h1>
                </div>
            </div>
            <div className='footerMiddle2'>
                <div>
                    <h1>Support</h1>
                    <h1>Home</h1>
                    <h1>Privacy Policy</h1>
                    <h1>T &C</h1>
                    <h1>Varied Payment</h1>
                </div>
                <div>
                    <h1>Important Link</h1>
                    <h1>Tarot Reader</h1>
                    <h1>Vedic Astrology</h1>
                    <h1>Palmistry</h1>
                    <h1>Gemology</h1>
                    <h1>Vastu</h1>
                    <h1>Numerology</h1>
                </div>
            </div>
            <div className='footerRight'>
                <div className='fooRi1'><input required style={{color:'black',width:'20rem', }}placeholder='Your Name' ></input></div>
                <div className='fooRi2' ><input required style={{color:'black',width:'20rem'}} placeholder='Mail ID'></input></div>
                <div className='fooRi3'><input required style={{color:'black',width:'20rem'}} placeholder='Write Query'></input></div>
                <div classname='fooRi4' style={{backgroundColor:'#4B9C0C',marginTop:'1rem',display:'flex', justifyContent:'center',alignItems:'center',textAlign:'center',width:'20rem',height:'3rem'}}><button >Submit </button></div>
            </div>
            
        </div>
    )
}

export default Footer
