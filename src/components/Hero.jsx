import React ,{useEffect , useState } from "react";
import { ReactTyped } from 'react-typed';
import {useSiteData} from "../context/SiteDataContext";

function Hero() {
            const {hero} = useSiteData();
    return (
        <section
            className="relative  px-6 m-auto bg-black pt-20 md:pt-0 lg:pt-0  text-white bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${hero.backgroundImage})`,
                backgroundPosition: "center",
            }}
        >
            <div className="container px-6 m-auto  sm:flex md:flex lg:flex">

                <div data-aos="fade-up" data-aos-delay="100" className="relative pt-10 flex flex-col items-start justify-center">
                    <p className="text-white font-extrabold uppercase text-md">{hero.greeting}</p>
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                        I’m <span className="text-white">{hero.name}</span>
                    </h1>
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-red-500">
                        <ReactTyped
                            strings={hero.roles ||[]}
                            typeSpeed={70}
                            backSpeed={40}
                            backDelay={1500}
                            loop
                        ></ReactTyped>
                    </h1>


                    <p className="text-gray-100 text-md md:text-lg max-w-xl leading-relaxed mt-4">
                {hero.description}
                    </p>

                    <button className="mt-8 bg-red-500 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2">
                        <span>{hero.buttonText}</span>
                    </button>

                </div>
                <div data-aos="fade-up" data-aos-delay="400" className="">
                    <img src={hero.image} alt="" className="pt-20 sm:pl-0 md:pl-20 lg:pl-20" />
                </div>
            </div>
        </section>
    );
}

export default Hero;