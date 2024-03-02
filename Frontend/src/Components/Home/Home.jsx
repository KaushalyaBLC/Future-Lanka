import React from 'react'
import Navigation from '../Navigation/Navigation'
import Landing from './Landing/Landing'
import OurServices from './OurServices/OurServices'
import PassionIdentify from './PassionIdentify/PassionIdentify'
import CareerExplore from './CareerExplore/CareerExplore'
import EducationNet from './EducationNet/EducationNet'
import SkillDevelop from './SkillDevelop/SkillDevelop'

const Home= () => {
  return (
    <>
        <Landing/>
        <OurServices/>
        <PassionIdentify/>
        <CareerExplore/>
        <EducationNet/>
        <SkillDevelop/>
    </>
  )
}

export default Home;
