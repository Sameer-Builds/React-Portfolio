import React from "react";
import { ReactTyped } from 'react-typed';

function Hero() {
    return (
        <section
            className="relative  px-6 m-auto bg-black pt-20 md:pt-0 lg:pt-0  text-white bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/banner-background-one.jpg')",
                backgroundPosition: "center",
            }}
        >
            <div className="container px-6 m-auto  sm:flex md:flex lg:flex">

                <div data-aos="fade-up" data-aos-delay="100" className="relative pt-10 flex flex-col items-start justify-center">
                    <p className="text-white font-extrabold uppercase text-md">Hello</p>
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                        I’m <span className="text-white">Sameer Akhtar</span>
                    </h1>
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-red-500">
                        <ReactTyped
                            strings={[
                                "A Web Developer",
                                "A Creative Thinker",
                                "A Coder"
                            ]}
                            typeSpeed={70}
                            backSpeed={40}
                            backDelay={1500}
                            loop
                        ></ReactTyped>
                    </h1>


                    <p className="text-gray-100 text-md md:text-lg max-w-xl leading-relaxed mt-4">
                        A personal portfolio is a collection of your work, achievements, and skills
                        that highlights your abilities and professional growth.
                    </p>

                    <button className="mt-8 bg-red-500 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2">
                        <span>View Portfolio</span>
                    </button>

                </div>
                <div data-aos="fade-up" data-aos-delay="400" className="">
                    <img src="banner-user-image-one.png" alt="" className="pt-20 sm:pl-0 md:pl-20 lg:pl-20" />
                </div>
            </div>
        </section>
    );
}

export default Hero;