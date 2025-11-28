import React from 'react'

function ExpertiseCard({ title, project, icon: Icon, index }) {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={(index + 1) * 200}
            className="border border-red-500/20 rounded-3xl p-8 text-center 
                    group transition-all duration-500 hover:border-red-500/60"
        >
            {Icon && (
                <Icon className="text-white/70 text-5xl m-auto mb-5 
                        group-hover:text-red-500 transition-colors duration-300" />
            )}

            <p className='relative inline-block text-white text-xl font-bold mb-3 
                before:content-[""] before:absolute before:left-0 before:bottom-0 
                before:h-0.5 before:w-0 before:bg-red-500 before:transition-all before:duration-500 
                group-hover:before:w-full hover:before:w-full 
                hover:text-red-500 group-hover:text-red-500'>
                {title}
            </p>

            <p className="text-white">{project}</p>
        </div>
    );
}

export default ExpertiseCard;
