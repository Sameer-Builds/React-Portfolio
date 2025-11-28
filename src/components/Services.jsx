import React from 'react'
import Form from './Form'
import { useSiteData } from "../context/SiteDataContext";
import GenericCard from './GenericCard';

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
                    <GenericCard data={card} index={index} />
                ))}
            </div>
            < Form />
        </>
    )
}

export default Services
