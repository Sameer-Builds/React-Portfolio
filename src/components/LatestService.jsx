import React from 'react'
import { useSiteData } from "../context/SiteDataContext";
function LatestService() {
    const { latestService } = useSiteData();
    return (
        <>
            <div className=' mx-auto'>
                <div data-aos="fade-right" data-aos-delay="200" className='text-center mx-6 py-16 '>
                    <p className='text-red-500 text-2xl font-semibold '>{latestService.sectionTitle}</p>
                    <p className='text-white text-4xl font-semibold  mt-3 leading-normal'>{latestService.sectionSubtitle}</p>
                    <p className='text-gray-400/70  mt-3  md:w-96 lg:w-96 m-auto'>{latestService.sectionDescription}</p>
                </div>
                <div className='mx-8  gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                    <div className='flex flex-col mt-5 '>
                        <div>
                            <div data-aos="fade-right" data-aos-delay="400" className='border border-red-500/20 rounded-3xl p-8 bg-zinc-900/70  group transition-all duration-500 hover:border-red-500/60'>
                                <p className=' text-white text-2xl font-bold'>
                                    01. {latestService.services[0].title}
                                </p>
                                <p className='text-gray-400/70 mt-4 '>{latestService.services[0].description}</p>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <div data-aos="fade-right" data-aos-delay="400" className='border border-red-500/20 rounded-3xl p-8 bg-zinc-900/70   group transition-all duration-500 hover:border-red-500/60'>
                                <p className=' text-white text-2xl font-bold'>
                                    02. {latestService.services[1].title}
                                </p>
                                <p className='text-gray-400/70 mt-4'>{latestService.services[1].description}</p>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <div data-aos="fade-right" data-aos-delay="400" className='border border-red-500/20 rounded-3xl p-8 bg-zinc-900/70  group transition-all duration-500 hover:border-red-500/60'>
                                <p className=' text-white text-2xl font-bold'>
                                    03. {latestService.services[2].title}
                                </p>
                                <p className='text-gray-400/70 mt-4'>{latestService.services[2].description}</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="600" className='flex items-center'>
                        <img className='' src={latestService.image} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestService
