import React, { useEffect } from 'react';
import { useSiteData } from "../context/SiteDataContext";

function Skill() {
    const { skills } = useSiteData();

    useEffect(() => {
        const bars = document.querySelectorAll(".progress-bar");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const bar = entry.target;
                        const finalWidth = bar.getAttribute("data-width");
                        bar.style.width = finalWidth;     
                        observer.unobserve(bar);          
                    }
                });
            },
            { threshold: 0.4 } 
        );

        bars.forEach((bar) => observer.observe(bar));

        return () => {
            bars.forEach((bar) => observer.unobserve(bar));
        };
    }, []);

    return (
        <div
            data-aos="fade-up"
            data-aos-delay="100"
            className='container mx-auto px-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 py-32'
        >
            {skills.map((skill, index) => (
                <div key={index}>
                    <div className='flex items-center gap-4'>
                        <p className='text-white text-3xl font-bold'>{skill.category}</p>
                        <img className='h-1/2' src={skill.image} alt={skill.category} />
                    </div>

                    {skill.items.map((item, itemIndex) => (
                        <div key={itemIndex} className='mt-10'>
                            <div className='flex justify-between'>
                                <p className='text-white'>{item.name}</p>
                                <p className='text-white'>{item.percentage}</p>
                            </div>
                            <div className="w-full bg-zinc-900 rounded-full h-2 mt-3 overflow-hidden">
                                <div
                                    className="progress-bar bg-red-500 h-2 rounded-full"
                                    data-width={item.percentage}
                                    style={{
                                        width: "0%",
                                        transition: "width 1.5s ease"
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Skill;
