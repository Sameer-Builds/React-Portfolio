import React from 'react'
import Form from './Form'

function Services() {
    return (
        <>
            <div className='p-36'>
                <p className=' text-center text-5xl font-semibold hover:text-red-500'>My Service</p>
                <p className='mt-6 text-center  '>Home  <span> {" > "}  Service</span></p>
            </div>
            <div className='container p-10 mx-auto  gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                <div className='flex flex-col mt-5 '>
                    <div>
                        <div className='border border-red-500/20 rounded-3xl p-8 bg-zinc-900/70  group transition-all duration-500 hover:border-red-500/60'>
                            <p className=' text-white text-2xl font-bold'>
                                01. Success Architects
                            </p>
                            <p className='text-gray-400/70 mt-4'>Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency</p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='border border-red-500/20 rounded-3xl p-8  bg-zinc-900/70   group transition-all duration-500 hover:border-red-500/60'>
                            <p className=' text-white text-2xl font-bold'>
                                02. Success Architects 
                            </p>
                            <p className='text-gray-400/70 mt-4'>My work is driven by the belief that thoughtful design and strategic planning can empower brands, transform businesses</p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='border border-red-500/20 rounded-3xl p-8  bg-zinc-900/70  group transition-all duration-500 hover:border-red-500/60'>
                            <p className=' text-white text-2xl font-bold'>
                                03. Success Architects
                            </p>
                            <p className='text-gray-400/70 mt-4'>In this portfolio, you’ll find a curated selection of projects that highlight my skills in Main Areas, e.g., responsive web design</p>
                        </div>
                    </div>
                </div>
                 <div className='flex flex-col mt-5 '>
                    <div>
                        <div className='border border-red-500/20 rounded-3xl p-8 bg-zinc-900/70  group transition-all duration-500 hover:border-red-500/60'>
                            <p className=' text-white text-2xl font-bold'>
                                04. Visual Design
                            </p>
                            <p className='text-gray-400/70 mt-4'>Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency</p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='border border-red-500/20 rounded-3xl p-8 bg-zinc-900/70   group transition-all duration-500 hover:border-red-500/60'>
                            <p className=' text-white text-2xl font-bold'>
                                05. Branding Design
                            </p>
                            <p className='text-gray-400/70 mt-4'>My work is driven by the belief that thoughtful design and strategic planning can empower brands, transform businesses</p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='border border-red-500/20 rounded-3xl p-8 bg-zinc-900/70  group transition-all duration-500 hover:border-red-500/60'>
                            <p className=' text-white text-2xl font-bold'>
                                06. Motion Design
                            </p>
                            <p className='text-gray-400/70 mt-4'>In this portfolio, you’ll find a curated selection of projects that highlight my skills in Main Areas, e.g., responsive web design</p>
                        </div>
                    </div>
                </div>
            </div>

        < Form />
        </>
    )
}

export default Services
