import React from "react";

export default function GenericCard({ data, index = 0 }) {
    const isService = data.title && data.description && !data.year && !data.tag;
    const isEducation = data.subtitle && data.year;
    const isExperience = data.title && (data.subtitle || data.role );

    return (
        <>
            {isService && (
                <div
                    data-aos="fade-right"
                    data-aos-delay={400 + index * 100}
                    className="border border-red-500/20 rounded-3xl p-8 bg-zinc-900/70 
                        group transition-all duration-500 hover:border-red-500/60">
                    <p className="text-white text-2xl font-bold">
                        {`0${index + 1}.`} {data.title}
                    </p>
                    <p className="text-gray-400/70 mt-4">{data.description}</p>
                </div>
            )}
            {isEducation && (
                <div
                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                    data-aos-delay="400"
                    className="border border-red-500/20 rounded-3xl p-10 bg-zinc-900/70 
                        group transition-all duration-500 hover:border-red-500/60 mt-6" >
                    <p className="text-white font-semibold">{data.subtitle}</p>
                    <p className="text-white font-bold mt-2">{data.year}</p>
                    <p className="text-gray-400/70 mt-4">{data.description}</p>
                </div>
            )}
            {isExperience && (
                <div
                    data-aos="fade-right"
                    data-aos-delay="400"
                    className="mt-6 border border-red-500/20 rounded-3xl p-8 bg-zinc-900/70 
                        group transition-all duration-500 hover:border-red-500/60" >
                    <p className="text-red-500 font-semibold">{data.tag}</p>
                    <p className="text-white text-2xl font-bold mt-2">{data.title}</p>
                    <p className="text-white font-semibold mt-2">{data.subtitle || data.role}</p>
                    <p className="text-gray-400/70 mt-4">{data.description}</p>
                </div>
            )}
        </>
    );
}
