import React from 'react'
import AboutMe from './AboutMe'
import EduandExp from './EduandExp'
import { useSiteData } from "../context/SiteDataContext";
function About() {
        const { about } = useSiteData(); 
    return (
        <>
        <div className=' p-20 md:p-36 lg:p-36  text-center'>
            <p className=' text-center text-5xl font-semibold hover:text-red-500'>{about.title}</p>
            <p className='mt-6 text-center  '>{about.description}</p>
        </div>
            <AboutMe />
            <EduandExp/>
        
        </>
    )
}

export default About
