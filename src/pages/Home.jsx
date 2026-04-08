import React from 'react'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Train from '../components/Train'
import Review from '../components/Review'
import NewsLatter from '../components/NewsLatter'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'


const Home = () => {
    // Redux state
    const { isAuthenticated, loading } = useSelector((state) => state.user);
  return (
    <>
        <Hero isAuthenticated={isAuthenticated} loading={loading}/>
        <Products />
        <Train />
        <Review />
        <NewsLatter />
        <Footer />
    </>
  )
}

export default Home