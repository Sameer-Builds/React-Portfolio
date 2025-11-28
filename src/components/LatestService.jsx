import React from 'react';
import { useSiteData } from "../context/SiteDataContext";
import GenericCard from './GenericCard';

function LatestService() {
    const { latestService } = useSiteData();

    return (
        <div className="mx-auto">
            <div
                data-aos="fade-right"
                data-aos-delay="200"
                className="text-center mx-6 py-16">
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
            <div className="mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex flex-col mt-5">
                    {latestService.services.map((service, index) => (
                        <div key={index} className={index !== 0 ? "mt-6" : ""}>
                            <GenericCard data={service} index={index} />
                        </div>
                    ))}
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-delay="600"
                    className="flex items-center">
                    <img src={latestService.image} alt="service" className="" />
                </div>
            </div>
        </div>
    );
}

export default LatestService;
