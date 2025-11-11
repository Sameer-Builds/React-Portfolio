import React from 'react'
import { useSiteData } from "../context/SiteDataContext";


function Skill() {
    const { skills } = useSiteData();
    return (
        <>
            <div data-aos="fade-up" data-aos-delay="100" className=' container mx-auto px-12   grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 py-32  ' >
                <div className=' '>
                    <div className=' flex items-center gap-4'>
                        <p className='text-white text-3xl font-bold'>{skills[0].category}</p>
                        <img className='h-1/2 ' src={skills[0].image} alt="" />
                    </div>
                    <div className='mt-10 flex justify-between'>
                        <div>
                            <p className='text-white'>{skills[0].items[0].name} </p>
                        </div>
                        <div>
                            <p className='text-white'>{skills[0].items[0].percentage}</p>
                        </div>
                    </div>
                    <div>
                        <div className='mt-3 h-2 w-full bg-red-500 rounded-full'>
                        </div>
                    </div>
                    <div className='mt-10 flex justify-between'>
                        <div>
                            <p className='text-white'>{skills[0].items[1].name}</p>
                        </div>
                        <div>
                            <p className='text-white'>{skills[0].items[1].percentage}</p>
                        </div>
                    </div>
                    <div>
                        <div className="mt-3 h-2 w-full bg-zinc-800 rounded-full overflow-hidden ">
                            <div className="bg-red-500 rounded-full h-full w-[95%]"></div>
                        </div>
                    </div>
                    <div className='mt-10 flex justify-between'>
                        <div>
                            <p className='text-white'>{skills[0].items[2].name}</p>
                        </div>
                        <div>
                            <p className='text-white'>{skills[0].items[2].percentage}</p>
                        </div>
                    </div>
                    <div>
                        <div className="mt-3 h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                            <div className='bg-red-500 rounded-full h-full w-[60%]'></div>
                        </div>
                    </div>
                    <div className='mt-10 flex justify-between'>
                        <div>
                            <p className='text-white'> {skills[0].items[3].name} </p>
                        </div>
                        <div>
                            <p className='text-white'>{skills[0].items[3].percentage}</p>
                        </div>
                    </div>
                    <div>
                        <div className='mt-3  h-2 w-full bg-zinc-800 rounded-full overflow-hidden'>
                            <div className='bg-red-500 rounded-full h-full w-[75%]'></div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='flex items-center gap-4'>
                        <p className='text-white text-3xl font-bold'>{skills[1].category}</p>
                        <img className='h-1/2  ' src={skills[1].image} alt="" />
                    </div>
                    <div className='mt-10 flex justify-between'>
                        <div>
                            <p className='text-white'>{skills[1].items[0].name}</p>
                        </div>
                        <div>
                            <p className='text-white'>{skills[1].items[0].percentage}</p>
                        </div>
                    </div>
                    <div>
                        <div className='mt-3 h-2 w-full bg-red-500 rounded-full'>
                        </div>
                    </div>
                    <div className='mt-10 flex justify-between'>
                        <div>
                            <p className='text-white'>{skills[1].items[1].name}</p>
                        </div>
                        <div>
                            <p className='text-white'>{skills[1].items[1].percentage}</p>
                        </div>
                    </div>
                    <div>
                        <div className="mt-3 h-2 w-full bg-zinc-800 rounded-full overflow-hidden ">
                            <div className="bg-red-500 rounded-full h-full w-[95%]"></div>
                        </div>
                    </div>
                    <div className='mt-10 flex justify-between'>
                        <div>
                            <p className='text-white'>{skills[1].items[2].name}</p>
                        </div>
                        <div>
                            <p className='text-white'>{skills[1].items[2].percentage}</p>
                        </div>
                    </div>
                    <div>
                        <div className="mt-3 h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                            <div className='bg-red-500 rounded-full h-full w-[62%]'></div>
                        </div>
                    </div>
                    <div className='mt-10 flex justify-between'>
                        <div>
                            <p className='text-white'>{skills[1].items[3].name}</p>
                        </div>
                        <div>
                            <p className='text-white'>{skills[1].items[3].percentage}</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='mt-3  h-2 w-full bg-zinc-800 rounded-full overflow-hidden'>
                            <div className='bg-red-500 rounded-full h-full w-[75%]'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill
