import React from 'react'
import Nav from './Nav'
import '../style/Home.css'
import Content from './Content'
import Footer from './Footer'
const Home = () => {
  return (
    <div className='container'>
      <Nav/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default Home
