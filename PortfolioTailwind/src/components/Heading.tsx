import React from 'react'

interface propsType {
    title: string;
}

const Heading: React.FC<propsType> = ({ title }) => {
    const [featured, project] = title.split(' ');
    return (
        <div className='text-5xl pb-8 font-extralight'data-aos="zoom-in-up" >
            <p className=' ml-10 pl-8  pb-8 '> <span className='text-[#ffff]'>{featured}</span>{' '}
            <span className=' text-[#e4c031]'>{project}</span> </p>
        </div>
    )
}

export default Heading
