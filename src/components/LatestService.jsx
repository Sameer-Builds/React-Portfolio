import React from 'react'

function LatestService() {
    return (
        <>
            <div className='container px-16 mx-auto'>
                <div data-aos="fade-right" data-aos-delay="200" className='text-center mx-6 py-16 '>
                    <p className='text-red-500 text-2xl font-semibold '>Latest Service</p>
                    <p className='text-white text-4xl font-semibold  mt-3 leading-normal'>Inspiring The World One Project</p>
                    <p className='text-gray-400/70  mt-3  md:w-96 lg:w-96 m-auto'>Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational</p>
                </div>
                <div className='mx-8  gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                    <div className='flex flex-col mt-5 '>
                        <div>
                            <div data-aos="fade-right" data-aos-delay="400" className='border border-red-500/20 rounded-3xl p-8 bg-zinc-900/70  group transition-all duration-500 hover:border-red-500/60'>
                                <p className=' text-white text-2xl font-bold'>
                                    01. A Portfolio of Creativity
                                </p>
                                <p className='text-gray-400/70 mt-4 '>Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency</p>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <div data-aos="fade-right" data-aos-delay="400" className='border border-red-500/20 rounded-3xl p-8 bg-zinc-900/70   group transition-all duration-500 hover:border-red-500/60'>
                                <p className=' text-white text-2xl font-bold'>
                                    02. My Portfolio of Innovation
                                </p>
                                <p className='text-gray-400/70 mt-4'>My work is driven by the belief that thoughtful design and strategic planning can empower brands, transform businesses</p>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <div data-aos="fade-right" data-aos-delay="400" className='border border-red-500/20 rounded-3xl p-8 bg-zinc-900/70  group transition-all duration-500 hover:border-red-500/60'>
                                <p className=' text-white text-2xl font-bold'>
                                    03. A Showcase of My Projects
                                </p>
                                <p className='text-gray-400/70 mt-4'>In this portfolio, you’ll find a curated selection of projects that highlight my skills in Main Areas, e.g., responsive web design</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="600" className='flex items-center'>
                        <img className='' src="latest-services-user-image.png"  alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestService
