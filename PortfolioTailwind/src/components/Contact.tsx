import React from 'react'
import { IoIosMail } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
    return (
        <div id='contact' className='pt-32 container'>
            <div className='grid md:grid-cols-2 gap-10'>
                <div className='space-y-8'>
                    <h2 className='text-5xl' data-aos="zoom-in-up">Get in Touch</h2>
                    <p className='text-gray-500 text-[18px] pt-2'data-aos="zoom-in-up">
                        Drop me a line, give me a call, or send me a message by submitting the form.
                    </p>
                    <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                        <IoIosMail size={30} /> abc@gmail.com
                    </div>
                    <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                        <BsTelephone size={30} /> 0321-1010101
                    </div>
                </div>
                <div className='space-y-8'>
                    <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                            className='h-[40px] bg-transparent border border-[#e4c031]' id='name' />
                    </div>
                    <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                        <label htmlFor="email">Email</label>
                        <input type="text"
                            className='h-[40px] bg-transparent border border-[#e4c031]' id='email' />
                    </div>
                    <div
                        className='flex flex-col gap-1'data-aos="zoom-in-up">
                        <label htmlFor="message">Message</label>
                        <textarea
                            className=' bg-transparent border border-[#e4c031]' id='msg' rows={8}>
                        </textarea>
                    </div>
                    <button className='bg-[#e4c031] p-3 px-20 rounded-full'data-aos="zoom-in-up">SEND</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
