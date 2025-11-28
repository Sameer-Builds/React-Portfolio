import React from 'react'

function ProjectCard({index, value,label}) {
    return (
        <>
            <div key={index}>
                <div className='border border-red-500/20 rounded-3xl p-15 text-center  group transition-all duration-500 hover:border-red-500/60'>
                    <p className=' text-white text-5xl text-center whitespace-nowrap font-bold mb-3  group-hover:text-red-500'>
                        {value}
                    </p>

                    <p className='text-white text-2xl relative inline-block before:content-[""] before:absolute before:left-0 before:bottom-0 
                before:h-0.5 before:w-0 before:bg-red-500 
                before:transition-all before:duration-500 
                group-hover:before:w-full hover:before:w-full 
                hover:text-red-500 group-hover:text-red-500'>{label}</p>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
