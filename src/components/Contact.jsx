import React from 'react'
import {
    FaLocationArrow,
    FaLinkedinIn
} from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi"

import Form from './Form';
import { useSiteData } from "../context/SiteDataContext";
import ExpertiseCard from './ExpertiseCard';

function Contact() {
    const { contactUs } = useSiteData();
    const iconMap = {
    FaLocationArrow: FaLocationArrow,
    FaLinkedinIn: FaLinkedinIn,
    FiMail: FiMail,
    FiPhone: FiPhone,
};

    return (
        <>
            <div className='p-20 md:p-36 lg:p-36'>
                <p className='text-center text-5xl font-semibold hover:text-red-500'>
                    {contactUs.title}
                </p>
                <p className='mt-6 text-center'>{contactUs.description}</p>
            </div>

            <div className='pb-10 container px-10  mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 text-center'>

                {contactUs.cards.map((card, index) => (
                    <ExpertiseCard
                        key={index}
                        icon={iconMap[card.icon]}   // 👈 FIXED
                        title={card.caption}
                        project={card.address}
                    />
                ))}

            </div>

            <Form />
        </>
    );
}

export default Contact;
