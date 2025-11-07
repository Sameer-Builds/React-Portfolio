import React from 'react'
import {
    FaPen,
    FaDelicious,
    FaVoicemail,
    FaSquare,
    FaSquarespace,
    FaLocationArrow,
    FaFileMedicalAlt,
    FaMailBulk,
    FaMailchimp,
    FaAmilia,
    FaMicrophoneAltSlash,
} from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi"
import Form from './Form';


function Contact() {
    return (
        <>
            <div className='p-20 md:p-36 lg:p-36'>
                <p className=' text-center text-5xl font-semibold hover:text-red-500'>Contact</p>
                <p className='mt-6 text-center  '>Home  <span> {" > "}  Contact</span></p>
            </div>
            <div className='pb-10 container px-6 lg:pl-22 mx-auto  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 space-x-5 space-y-5 text-center'>
                <div className="border border-red-500/20 rounded-3xl p-10 lg:w-72 group transition-all duration-500 hover:border-red-500/60">
                    <FaLocationArrow className="text-white/70 text-5xl mx-auto mb-5 group-hover:text-red-500 transition-colors duration-300" />
                    <p className='relative inline-block text-white text-2xl font-bold mb-3 
                        before:content-[""] before:absolute before:left-0 before:bottom-0 
                        before:h-0.5 before:w-0 before:bg-red-500 before:transition-all before:duration-500 
                        group-hover:before:w-full hover:before:w-full hover:text-red-500 group-hover:text-red-500 text-center  mx-auto'>
                        Location
                    </p>
                    <p className="text-white text-center ">Dhaka 1216, road 45  house of street</p>
                </div>
                <div className="border border-red-500/20 rounded-3xl p-10 lg:w-72 text-center group transition-all duration-500 hover:border-red-500/60">
                    <FiMail className="text-white/70 text-5xl m-auto mb-5 group-hover:text-red-500 transition-colors duration-300" />
                    <p className='relative inline-block text-white text-xl font-bold mb-3 
                        before:content-[""] before:absolute before:left-0 before:bottom-0 
                        before:h-0.5 before:w-0 before:bg-red-500 before:transition-all before:duration-500 
                        group-hover:before:w-full hover:before:w-full hover:text-red-500 group-hover:text-red-500'>
                        E-Mail
                    </p>
                    <p className="text-white text-center">themespark11@gmail.com hasan@yourmail.com</p>
                </div>
                <div className="border border-red-500/20 rounded-3xl p-10 lg:w-72 mb-5 text-center group transition-all duration-500 hover:border-red-500/60">
                    <FiPhone className="text-white/70 text-5xl m-auto mb-5 group-hover:text-red-500 transition-colors duration-300" />
                    <p className='relative inline-block text-white text-xl font-bold mb-3 
                        before:content-[""] before:absolute before:left-0 before:bottom-0 
                        before:h-0.5 before:w-0 before:bg-red-500 before:transition-all before:duration-500 
                        group-hover:before:w-full hover:before:w-full hover:text-red-500 group-hover:text-red-500'>
                        Call Me
                    </p>
                    <p className="text-white">0000 - 000 - 000 00 +1234 - 000</p>
                </div>
            </div>
            <Form />
        </>
    )
}

export default Contact
