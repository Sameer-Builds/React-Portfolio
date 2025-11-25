import React from 'react'
import {
    FaLocationArrow,
} from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi"

import Form from './Form';
import { useSiteData } from "../context/SiteDataContext";

function Contact() {
    const { contactUs } = useSiteData();
    const iconMap = {
        FaLocationArrow: <FaLocationArrow />,
        FiMail: <FiMail />,
        FiPhone: <FiPhone />,
    };
    return (
        <>
            <div className='p-20 md:p-36 lg:p-36'>
                <p className='text-center text-5xl font-semibold hover:text-red-500'>
                    {contactUs.title}
                </p>
                <p className='mt-6 text-center'>{contactUs.description}</p>
            </div>

            <div className='pb-10 container px-6 lg:pl-22 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 text-center'>

                {contactUs.cards.map((card, index) => (
                    <div
                        key={index}
                        className="border border-red-500/20 rounded-3xl p-10 lg:w-72 group transition-all duration-500 hover:border-red-500/60 mx-auto"
                    >
                        <div className="flex justify-center text-white/70 text-5xl mx-auto mb-5 group-hover:text-red-500 transition-colors duration-300">
                            {iconMap[card.icon]}
                        </div>
                        <p className='relative inline-block text-white text-2xl font-bold mb-3 
                            before:content-[""] before:absolute before:left-0 before:bottom-0 
                            before:h-0.5 before:w-0 before:bg-red-500 before:transition-all before:duration-500 
                            group-hover:before:w-full hover:before:w-full hover:text-red-500 group-hover:text-red-500'>
                            {card.caption}
                        </p>
                        <p className="text-white">
                            {card.address || card.email || card.number}
                        </p>
                    </div>
                ))}

            </div>

            <Form />
        </>
    );
}

export default Contact;
