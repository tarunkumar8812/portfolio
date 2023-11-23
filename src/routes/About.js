import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import HeroImage2 from '../component/HeroImage2'
import Aboutme from '../component/Aboutme'

const About = () => {
  return (

    <>
      <div> <Navbar /></div>
      <div> <HeroImage2 heading="Know more about..." projectList=""
        ii="https://thumbs.dreamstime.com/z/office-work-space-desk-business-finances-objects-white-empty-background-workspace-top-view-flat-lay-concept-tax-calculation-153855970.jpg"
      /></div>
      <div><Aboutme />  </div>

      <div> <Footer /></div>
    </>
  )
}

export default About