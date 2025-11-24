import React from 'react';
import { useSiteData } from "../context/SiteDataContext";

function LatestService() {
    const { latestService } = useSiteData();

    return (
        <div className="mx-auto">
            {/* Section Header */}
            <div
                data-aos="fade-right"
                data-aos-delay="200"
                className="text-center mx-6 py-16"
            >
                <p className="text-red-500 text-2xl font-semibold">
                    {latestService.sectionTitle}
                </p>
                <p className="text-white text-4xl font-semibold mt-3 leading-normal">
                    {latestService.sectionSubtitle}
                </p>
                <p className="text-gray-400/70 mt-3 md:w-96 lg:w-96 m-auto">
                    {latestService.sectionDescription}
                </p>
            </div>

            {/* Content */}
            <div className="mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                
                {/* Services List */}
                <div className="flex flex-col mt-5">
                    {latestService.services.map((service, index) => (
                        <div key={index} className={index !== 0 ? "mt-6" : ""}>
                            <div
                                data-aos="fade-right"
                                data-aos-delay={400 + index * 100} // auto delay
                                className="border border-red-500/20 rounded-3xl p-8 bg-zinc-900/70 
                                           group transition-all duration-500 hover:border-red-500/60"
                            >
                                <p className="text-white text-2xl font-bold">
                                    {`0${index + 1}.`} {service.title}
                                </p>
                                <p className="text-gray-400/70 mt-4">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Image */}
                <div
                    data-aos="fade-left"
                    data-aos-delay="600"
                    className="flex items-center"
                >
                    <img src={latestService.image} alt="service" className="" />
                </div>
            </div>
        </div>
    );
}

export default LatestService;
