import React from 'react'

function Form() {
    return (
        <>

            <div class="container mx-auto bg-black text-white">

                <section data-aos="fade-up" data-aos-delay="500" class="px-6 lg:px-20 py-16">
                    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-12">

                        <div class="lg:w-1/2 space-y-4">
                            <p class="text-red-500 uppercase tracking-wide font-semibold">
                                Contact Us
                            </p>
                            <h2 class="text-4xl sm:text-5xl font-bold leading-tight">
                                Elevate your brand with Me
                            </h2>
                            <p class="text-gray-400 max-w-md">
                                We’d love to hear from you! Whether you have a question about our services,
                                pricing, or anything else, feel free to reach out.
                            </p>
                        </div>
                        <form class=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                class="bg-zinc-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-red-500"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                class="bg-zinc-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-red-500"
                            />
                            <input
                                type="email"
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
                                Send Message
                            </button>
                        </form>
                    </div>
                </section>

            </div>


        </>
    )
}
export default Form
