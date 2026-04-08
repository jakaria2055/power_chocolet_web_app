import React from 'react'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Train from '../components/Train'
import Review from '../components/Review'
import NewsLatter from '../components/NewsLatter'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
        <Hero />
        <Products />
        <Train />
        <Review />
        <NewsLatter />
        <Footer />
    </>
  )
}

export default Home