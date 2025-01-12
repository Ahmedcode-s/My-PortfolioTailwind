import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
  {
    id: 0,
    title: "Static Interactive Resume",
    desc: "A TypeScript-based interactive resume built with Html and Css, allowing users to showcase their skills dynamically ",
    img: "/project_1.png",
    tags: ["Html", "Node", "CSS", "Typescript"],

  },
  {
    id: 1,
    title: "Static Interactive Resume",
    desc: "A TypeScript-based interactive resume built with Html and Css, allowing users to showcase their skills dynamically ",
    img: "/project_1.png",
    tags: ["Html", "Node", "CSS", "Typescript"],

  },
 
]




const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='Featured Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc= {el.desc}
        img= {el.img}
        tags={el.tags}
        
        />))}
      </div>

    </div>
  )
}

export default Projects
