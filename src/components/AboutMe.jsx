import React from 'react'
import {
    FaPen,
    FaDelicious,
    FaVoicemail,
    FaSquare,
    FaSquarespace,
} from "react-icons/fa";
function AboutMe() {
    return (
        < >
            <div className=" container px-16 py-10 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                <div data-aos="fade-up" data-aos-delay="200" className="border border-red-500/20 rounded-3xl p-8 text-center group transition-all duration-500 hover:border-red-500/60">
                    <FaPen className="text-white/70 text-5xl m-auto mb-5 group-hover:text-red-500 transition-colors duration-300" />
                    <p className='relative inline-block text-white text-xl font-bold mb-3 
            before:content-[""] before:absolute before:left-0 before:bottom-0 
            before:h-0.5 before:w-0 before:bg-red-500 before:transition-all before:duration-500 
            group-hover:before:w-full hover:before:w-full hover:text-red-500 group-hover:text-red-500'>
                        Web Design
                    </p>
                    <p className="text-white">120 Projects</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="400" className="border border-red-500/20 rounded-3xl p-8 text-center group transition-all duration-500 hover:border-red-500/60">
                    <FaVoicemail className="text-white/70 text-5xl m-auto mb-5 group-hover:text-red-500 transition-colors duration-300" />
                    <p className='relative inline-block text-white text-xl font-bold mb-3 
            before:content-[""] before:absolute before:left-0 before:bottom-0 
            before:h-0.5 before:w-0 before:bg-red-500 before:transition-all before:duration-500 
            group-hover:before:w-full hover:before:w-full hover:text-red-500 group-hover:text-red-500'>
                        UI/UX Design
                    </p>
                    <p className="text-white">120 Projects</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="600" className="border border-red-500/20 rounded-3xl p-8 text-center group transition-all duration-500 hover:border-red-500/60">
                    <FaDelicious className="text-white/70 text-5xl m-auto mb-5 group-hover:text-red-500 transition-colors duration-300" />
                    <p className='relative inline-block text-white text-xl font-bold mb-3 
            before:content-[""] before:absolute before:left-0 before:bottom-0 
            before:h-0.5 before:w-0 before:bg-red-500 before:transition-all before:duration-500 
            group-hover:before:w-full hover:before:w-full hover:text-red-500 group-hover:text-red-500'>
                        Web Research
                    </p>
                    <p className="text-white">120 Projects</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="800" className="border border-red-500/20 rounded-3xl p-8 text-center group transition-all duration-500 hover:border-red-500/60">
                    <FaSquarespace className="text-white/70 text-5xl m-auto mb-5 group-hover:text-red-500 transition-colors duration-300" />
                    <p className='relative inline-block text-white text-xl font-bold mb-3 
            before:content-[""] before:absolute before:left-0 before:bottom-0 
            before:h-0.5 before:w-0 before:bg-red-500 before:transition-all before:duration-500 
            group-hover:before:w-full hover:before:w-full hover:text-red-500 group-hover:text-red-500'>
                        Marketing
                    </p>
                    <p className="text-white">120 Projects</p>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="500" className='container lg:space-x-6 lg:ml-5 px-16 lg:flex mx-auto '>
                <div className="p-2 lg:px-5 bg-linear-to-br from-black to-red-900/80 rounded-3xl md:pb-15 grid items-center">
                    <div className="flex flex-col lg:flex-row items-start justify-start">
                        <div className="flex flex-row lg:flex-col items-start justify-start">
                            <span className="text-red-500 text-9xl font-medium leading-none lg:leading-tight">2</span>
                            <span className="text-red-500 text-9xl font-medium leading-none lg:leading-tight lg:mt-8">5</span>
                        </div>

                        <div className="lg:ml-20 mt-6 lg:mt-30 text-left">
                            <p className="text-white text-5xl font-medium">Years Of</p>
                            <p className="text-white text-5xl font-medium">Experience</p>
                        </div>
                    </div>

                    <div className="mt-8 text-left">
                        <p className="text-white pb-5 md:pb-0 text-sm md:text-2xl lg:text-xl md:w-[70%] lg:w-96 lg:font-semibold md:font-light">
                            Business consulting consultants provide expert advice and businesses to help them enhance their performance and efficiency.
                        </p>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="800" className='   mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
                    <div className=''>
                        <div className='border border-red-500/20 rounded-3xl p-15 text-center  group transition-all duration-500 hover:border-red-500/60'>


                            <p className=' text-white text-5xl text-center whitespace-nowrap font-bold mb-3  group-hover:text-red-500'>
                                20K+
                            </p>

                            <p className='text-white text-2xl relative inline-block before:content-[""] before:absolute before:left-0 before:bottom-0 
                before:h-0.5 before:w-0 before:bg-red-500 
                before:transition-all before:duration-500 
                group-hover:before:w-full hover:before:w-full 
                hover:text-red-500 group-hover:text-red-500'>Project Complet</p>
                        </div>
                    </div>
                    <div>
                        <div className='border border-red-500/20 rounded-3xl p-15 text-center group transition-all duration-500 hover:border-red-500/60'>


                            <p className=' text-white text-5xl text-center whitespace-nowrap font-bold mb-3  group-hover:text-red-500'>
                                10K+
                            </p>

                            <p className='text-white text-2xl relative inline-block before:content-[""] before:absolute before:left-0 before:bottom-0 
                before:h-0.5 before:w-0 before:bg-red-500 
                before:transition-all before:duration-500 
                group-hover:before:w-full hover:before:w-full 
                hover:text-red-500 group-hover:text-red-500'>Natural Products</p>
                        </div>
                    </div>
                    <div>
                        <div className='border border-red-500/20 rounded-3xl p-15 text-center group transition-all duration-500 hover:border-red-500/60'>


                            <p className=' text-white text-5xl text-center whitespace-nowrap font-bold mb-3  group-hover:text-red-500'>
                                200+
                            </p>

                            <p className='text-white text-2xl relative inline-block before:content-[""] before:absolute before:left-0 before:bottom-0 
                before:h-0.5 before:w-0 before:bg-red-500 
                before:transition-all before:duration-500 
                group-hover:before:w-full hover:before:w-full 
                hover:text-red-500 group-hover:text-red-500'>Client Reviews</p>
                        </div>
                    </div>
                    <div>
                        <div className='border border-red-500/20 rounded-3xl p-15 text-center group transition-all duration-500 hover:border-red-500/60'>


                            <p className=' text-white text-5xl text-center whitespace-nowrap font-bold mb-3  group-hover:text-red-500'>
                                1000+
                            </p>

                            <p className='text-white text-2xl relative inline-block before:content-[""] before:absolute before:left-0 before:bottom-0 
                before:h-0.5 before:w-0 before:bg-red-500 
                before:transition-all before:duration-500 
                group-hover:before:w-full hover:before:w-full 
                hover:text-red-500 group-hover:text-red-500'> Satisfied Clients</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default AboutMe
