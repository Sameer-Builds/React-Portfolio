import React from 'react'
import Form from './Form'
import { useSiteData } from "../context/SiteDataContext";

function Services() {
    const { myService } = useSiteData();
    return (
        <>
            <div className='p-20 md:p-36 lg:p-36'>
                <p className=' text-center text-5xl font-semibold hover:text-red-500'>{myService.title}</p>
                <p className='mt-6 text-center  '>{myService.description}</p>
            </div>
            <div className='container p-2 mx-auto  gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                <div className='flex flex-col mt-5 '>
                    <div>
                        <div className='border border-red-500/20 rounded-3xl p-8 bg-zinc-900/70  group transition-all duration-500 hover:border-red-500/60'>
                            <p className=' text-white text-2xl font-bold'>
                                01. {myService.cards[0].title}
                            </p>
                            <p className='text-gray-400/70 mt-4'>{myService.cards[0].description}</p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='border border-red-500/20 rounded-3xl p-8  bg-zinc-900/70   group transition-all duration-500 hover:border-red-500/60'>
                            <p className=' text-white text-2xl font-bold'>
                                02. {myService.cards[1].title}
                            </p>
                            <p className='text-gray-400/70 mt-4'>{myService.cards[1].description}</p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='border border-red-500/20 rounded-3xl p-8  bg-zinc-900/70  group transition-all duration-500 hover:border-red-500/60'>
                            <p className=' text-white text-2xl font-bold'>
                                03. {myService.cards[2].title}
                            </p>
                            <p className='text-gray-400/70 mt-4'>{myService.cards[2].description}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col mt-5 '>
                    <div>
                        <div className='border border-red-500/20 rounded-3xl p-8 bg-zinc-900/70  group transition-all duration-500 hover:border-red-500/60'>
                            <p className=' text-white text-2xl font-bold'>
                                04. {myService.cards[3].title}
                            </p>
                            <p className='text-gray-400/70 mt-4'>{myService.cards[3].description}</p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='border border-red-500/20 rounded-3xl p-8 bg-zinc-900/70   group transition-all duration-500 hover:border-red-500/60'>
                            <p className=' text-white text-2xl font-bold'>
                                05. {myService.cards[4].title}
                            </p>
                            <p className='text-gray-400/70 mt-4'>{myService.cards[4].description}</p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='border border-red-500/20 rounded-3xl p-8 bg-zinc-900/70  group transition-all duration-500 hover:border-red-500/60'>
                            <p className=' text-white text-2xl font-bold'>
                                06. {myService.cards[5].title}
                            </p>
                            <p className='text-gray-400/70 mt-4'>{myService.cards[5].description}</p>
                        </div>
                    </div>
                </div>
            </div>

            < Form />
        </>
    )
}

export default Services
