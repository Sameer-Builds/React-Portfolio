import React from "react";
import { useSiteData } from "../context/SiteDataContext";
import Bar from "./Bar";

function DesignandSkill() {
    const { skills } = useSiteData(); 

    return (
        <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="container mx-auto px-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 py-32"
        >
            {skills.map((skill, index) => (
                <div key={index}>
                    <div className="flex items-center gap-4">
                        <p className="text-white text-3xl font-bold">{skill.category}</p>
                        <img className="h-1/2" src={skill.image} alt={skill.category} />
                    </div>
                    {skill.items.map((item, i) => (
                        <Bar
                            key={i}
                            name={item.name}
                            percentage={item.percentage}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default DesignandSkill;
