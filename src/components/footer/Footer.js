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
                <div ><img src={GurujiIcon} />
                </div>
                <div><h1> About Guruji s2 to 3 lines what guruji </h1>
                    <h1> do and how it works About Guruji s2 to</h1>
                    <h1> 3 lines what guruji do and how it</h1>
                    <h1> works </h1>
                </div>
                <div> <img src={SocialMediaIcon} /></div>
                <h1>Trusted & Seals</h1>
                <div><img src={RazorpayIcon} />
                    <img src={PaytmIcon} /></div>
                <div><img src={StripIcon} /></div>
            </div>
            <div className='footerMiddle1'>
                <div>
                    <h1>Company</h1>
                    <h1>Privacy Policy</h1>
                    <h1>T &C</h1>
                    <h1>Varied Payment</h1>
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
                <div  style={{padding:"10px", margin:"10px",}}><input placeholder='Your Name'></input></div>
                <div  style={{padding:"10px", margin:"10px"}}><input placeholder='Mail ID'></input></div>
                <div><input placeholder='Write Query'></input></div>
                <div><button>SUBMIT </button></div>
            </div>
            
        </div>
    )
}

export default Footer
