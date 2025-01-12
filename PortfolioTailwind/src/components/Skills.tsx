import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'data-aos="zoom-in-up">
        <div>
          <h2 className='text-4xl md:text-5xl'>
            Technologies I Work With:
          </h2>
          <p className='text-gray-500 pt-4'>
            I am a dedicated web developer with a strong foundation in HTML, CSS, and JavaScript, specializing in creating dynamic and user-friendly web applications. My expertise includes working with modern frameworks like React and Next.js, enabling me to build scalable and efficient solutions. Additionally, I am proficient in Tailwind CSS, which allows for rapid and elegant styling and design.With a passion for continuous learning, I actively stay updated on the latest technologies and industry trends to expand my skill set and deliver impactful contributions to projects.


          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-[#e4c031] text-3xl sm:text-4xl'>
            <div className='space-y-2 '>
              <h2 data-aos="zoom-in-up">TYPESCRIPT</h2>
              <h2 data-aos="zoom-in-up">REACT.JS</h2>
              <h2 data-aos="zoom-in-up">NEXT.JS</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">TAILWIND</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">NODE.JS</h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills
