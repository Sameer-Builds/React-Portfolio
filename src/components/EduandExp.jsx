import React from "react";
import { useSiteData } from "../context/SiteDataContext";

function EduandExp() {
    const { eduAndExp } = useSiteData();

    return (
        <>
            <div className="px-4 mx-auto pt-16">
                <div
                    data-aos="fade-left"
                    data-aos-delay="200"
                    className="text-center mx-6 py-20" >
                    <p className="text-red-500 text-2xl font-semibold">
                        {eduAndExp.sectionTitle} </p>
                    <p className="text-white text-3xl md:text-4xl font-semibold mt-3 leading-normal">
                        {eduAndExp.sectionSubtitle} </p>
                    <p className="text-gray-400/70 mt-3 md:w-96 lg:w-96 m-auto">
                        {eduAndExp.sectionDescription}  </p>
                </div>
                <div className="mx-6 flex items-end gap-10">
                    <p className="text-white text-3xl font-bold">
                        {eduAndExp.name[0].first}   </p>
                    <img className="h-2" src={eduAndExp.lineImage} alt="" />
                </div>
                <div className="mt-10 mx-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {eduAndExp.education.map((edu, index) => (
                        <div
                            key={index}
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                            data-aos-delay="400"
                            className="mt-6" >
                            <div className="border border-red-500/20 rounded-3xl p-10 bg-zinc-900/70 group transition-all duration-500 hover:border-red-500/60 h-full">
                                <p className="text-white font-semibold">{edu.title}</p>
                                <p className="text-white font-bold mt-2">{edu.year}</p>
                                <p className="text-gray-400/70 mt-4">{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-4 mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pb-5">
                <div>
                    <div className="mx-6 flex items-end gap-10">
                        <p className="text-white text-3xl font-bold">
                            {eduAndExp.name[0].second}</p>
                        <img className="h-2" src={eduAndExp.lineImage} alt="" />
                    </div>
                    {eduAndExp.experience.map((exp, index) => (
                        <div
                            key={index}
                            data-aos="fade-right"
                            data-aos-delay="400"
                            className="mt-6"  >
                            <div className="rounded-3xl p-8 bg-zinc-900/70">
                                <p className="text-red-500 font-semibold">{exp.tag}</p>

                                <p className="text-white text-2xl font-bold mt-2">
                                    {exp.company} {exp.duration} </p>
                                <p className="text-white font-semibold mt-2">
                                    {exp.role} </p>
                                <p className="text-gray-400/70 mt-4">
                                    {exp.description} </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-delay="400"
                    className="flex items-center" >
                    <img className="rounded-3xl sm:mt-0 lg:mt-16" src={eduAndExp.image} alt="" />
                </div>
            </div>
        </>
    );
}

export default EduandExp;
