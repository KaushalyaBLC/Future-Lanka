import React from 'react'
import Navigation from '../Navigation/Navigation'
import Landing from './Landing/Landing'
import OurServices from './OurServices/OurServices'
import PassionIdentify from './PassionIdentify/PassionIdentify'
import CareerExplore from './CareerExplore/CareerExplore'
import EducationNet from './EducationNet/EducationNet'
import SkillDevelop from './SkillDevelop/SkillDevelop'
import AboutUs from './AboutUs/AboutUs'
import Footer from '../Footer/Footer'
import './Home.css'

const Home= () => {
  return (
    <section className='home'>
        <Landing/>
        <OurServices/>
        <PassionIdentify/>
        <CareerExplore/>
        <EducationNet/>
        <SkillDevelop/>
        <AboutUs/>
        <Footer/>
    </section>
  )
}

export default Home;
