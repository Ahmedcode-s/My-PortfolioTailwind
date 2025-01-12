import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/profile.png)]  bg-cover'
      style={{ backgroundSize: "30%", backgroundPosition: "left 100px top 170px" }}>
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]' >
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in-up">Im</p>
            <p data-aos="zoom-in-up">Ahmed</p>
            <p data-aos="zoom-in-up">Faraz
              <span className='text-[#e4c031]'>.</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
