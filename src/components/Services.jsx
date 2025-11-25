import React from 'react'
import Form from './Form'
import { useSiteData } from "../context/SiteDataContext";

function Services() {
    const { myService } = useSiteData();
    return (
        <>
            <div className=' p-20 md:p-36 lg:p-36'>
                <p className=' text-center text-5xl font-semibold hover:text-red-500'>{myService.title}</p>
                <p className='mt-6 text-center  '>{myService.description}</p>
            </div>
            <div className='container p-2 mx-auto  gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                {myService.cards.map((card, index) => (
                    <div key={index} className='flex flex-col mt-5 '>
                        <div>
                            <div className='border border-red-500/20 rounded-3xl p-8 bg-zinc-900/70  group transition-all duration-500 hover:border-red-500/60'>
                                <p className=' text-white text-2xl font-bold'>
                                    {String(index + 1).padStart(2, "0")}. {card.title}
                                </p>
                                <p className='text-gray-400/70 mt-4'>{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            < Form />
        </>
    )
}

export default Services
