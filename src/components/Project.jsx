import React from "react";
import { useSiteData } from "../context/SiteDataContext";

function Project() {
    const { projects } = useSiteData();

    return (
        <div className="px-6 md:px-20 lg:px-36 p-40 text-center">
            <div className="mb-16">
                <p className="text-5xl font-semibold hover:text-red-500 transition-colors duration-300">
                    {projects.title}
                </p>
                <p className="mt-4 text-gray-400">{projects.description}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
                {projects.myProjects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-zinc-900 p-4 rounded-xl border border-zinc-700
                        hover:border-red-500 transition-all duration-300
                        shadow-[0_0_10px_#000] hover:shadow-[0_0_25px_#ef4444]
                        hover:scale-105 transform overflow-hidden"
                    >
                        <div className="h-72 w-full overflow-hidden rounded-lg">
                            <img
                                src={`/${project.image}`}
                                alt={project.title}
                                className="w-full h-full object-cover object-top transition-all duration-2000 ease-in-out hover:object-bottom mb-4"
                            />
                        </div>
                        <p className="text-xl font-semibold  mt-5 text-red-500">
                            {project.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
