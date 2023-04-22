import React from 'react'
import Footer from './components/footer/Footer'
import UserReviw from './components/UserReview/UserReview'
import OneSolution from './components/ManyProblemOneSolution/OneSolution'
import Header from './components/header/Header'
import Card from './components/PremiumAstrologers/Card'




function App() {
  return (
    <div>
      <Header></Header>
      <Card></Card>
      <OneSolution></OneSolution>
      <UserReviw></UserReviw>
      <Footer></Footer>
    </div>
  )
}

export default App
