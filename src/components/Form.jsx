import React from 'react'
import { useSiteData } from "../context/SiteDataContext";
function Form() {
    const { contact } = useSiteData();
    return (
        <>

            <div class="container mx-auto bg-black text-white">

                <section data-aos="fade-up" data-aos-delay="500" class="px-6 lg:px-20 py-16">
                    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-12">

                        <div class="lg:w-1/2 space-y-4">
                            <p class="text-red-500 uppercase tracking-wide font-semibold">
                                {contact.title}
                            </p>
                            <h2 class="text-4xl sm:text-5xl font-bold leading-tight">
                                {contact.heading}
                            </h2>
                            <p class="text-gray-400 max-w-md">
                               {contact.description}
                            </p>
                        </div>
                        <form class=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            <input
                                type="text" required
                                placeholder="Your Name"
                                class="bg-zinc-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-red-500"
                            />
                            <input
                                type="text" required
                                placeholder="Phone Number"
                                class="bg-zinc-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-red-500"
                            />
                            <input
                                type="email" required
                                placeholder="Email Address"
                                class="bg-zinc-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-red-500"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                class="bg-zinc-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-red-500"
                            />
                            <textarea
                                placeholder="Your Message"
                                class="bg-zinc-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-red-500 col-span-2 h-40 resize-none"
                            ></textarea>

                            <button
                                type="submit"
                                class="bg-red-500 hover:bg-red 500 text-white font-semibold py-4 rounded-full col-span-2 mt-2 transition-all duration-300"
                            >
                                {contact.buttonText}
                            </button>
                        </form>
                    </div>
                </section>

            </div>


        </>
    )
}
export default Form
