import React from 'react'
import AboutMe from './AboutMe'
import EduandExp from './EduandExp'


function About() {
    return (
        <>
        <div className=' p-20 md:p-36 lg:p-36  text-center'>
            <p className=' text-center text-5xl font-semibold hover:text-red-500'>About Me</p>
            <p className='mt-6 text-center  '>Home  <span> {" > "} About Me</span></p>
        </div>
            <AboutMe />
            <EduandExp/>
        
        </>
    )
}

export default About
