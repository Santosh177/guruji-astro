import React,{useState,useEffect} from 'react'
import Footer from './components/footer/Footer'
import UserReviw from './components/UserReview/UserReview'
import OneSolution from './components/ManyProblemOneSolution/OneSolution'
import Header from './components/header/Header'
import Card from './components/PremiumAstrologers/Card'
import UserTestimonial from './components/UserTestimonial/UserTestimonial'




function App() {
  return (
    <div>
      <Header></Header>
      <UserTestimonial></UserTestimonial>
      <Card></Card>
      <OneSolution></OneSolution>
      <UserReviw></UserReviw>
      <Footer></Footer>
    </div>
  )
}

export default App
