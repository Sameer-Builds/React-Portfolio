import React from 'react'
import { useSiteData } from "../context/SiteDataContext";
import {
    FaPen,
    FaDelicious,
    FaVoicemail,
    FaSquarespace,
} from "react-icons/fa";
import ExpertiseCard from './ExpertiseCard';
import ProjectCard from './ProjectCard';
function AboutMe() {
    const { aboutme } = useSiteData();
    const icons = [FaPen, FaDelicious, FaVoicemail, FaSquarespace]
    return (
        < >
            <div className=" container px-16 py-10 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                {aboutme.skillCards.map((card, index) => {
                    const Icon = icons[index % icons.length];
                    return (
                        <ExpertiseCard 
                        key={index}
                        icon={Icon}
                        title={card.title}
                        project={card.project}
                        />
                    );
                })}
            </div>

            <div data-aos="fade-up" data-aos-delay="500" className='container lg:space-x-6 lg:ml-5 px-16 lg:flex mx-auto espace-y-5 md:space-y-0 lg:space-y-0'>
                <div className="p-2 lg:px-5 bg-linear-to-br from-black to-red-900/80 rounded-3xl md:pb-15 grid items-center">
                    <div className="flex flex-col lg:flex-row items-start justify-start">
                        <div className="flex flex-row lg:flex-col items-start justify-start">
                            <span className="text-red-500 text-9xl font-medium leading-none lg:leading-tight">{aboutme.experience.years.first}</span>
                            <span className="text-red-500 text-9xl font-medium leading-none lg:leading-tight lg:mt-8">{aboutme.experience.years.second}</span>
                        </div>

                        <div className="lg:ml-20 mt-6 lg:mt-30 text-left">
                            <p className="text-white text-5xl font-medium">{aboutme.experience.title.first}</p>
                            <p className="text-white text-5xl font-medium">{aboutme.experience.title.second}</p>
                        </div>
                    </div>

                    <div className="mt-8 text-left">
                        <p className="text-white pb-5 md:pb-0 text-sm md:text-2xl lg:text-xl md:w-[70%] lg:w-96 lg:font-semibold md:font-light">
                            {aboutme.experience.description}
                        </p>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="800" className=' lg:container md:container md:px-6 lg:px-6 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
                    {aboutme.stats.map((stat, index) => {
                        return (
                    <ProjectCard 
                    key={index}
                    value={stat.value}
                    label={stat.label}
                    />
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default AboutMe
