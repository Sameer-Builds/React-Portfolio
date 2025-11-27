import React from 'react';
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { useSiteData } from "../context/SiteDataContext";

function Footer() {
    const { footer } = useSiteData();

    // Map your JSON "icon" names to actual React icons
    const iconMap = {
        FaInstagram: <FaInstagram />,
        FaLinkedinIn: <FaLinkedinIn />,
        FaGithub: <FaGithub />,
        FaWhatsapp: <FaWhatsapp />,
    };

    return (
        <>
        <footer className="bg-zinc-900 text-gray-400 py-16 md:py-20">
            <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Logo & Headline */}
                <div data-aos="fade-up" data-aos-delay="200">
                    <div className="flex items-center mb-4">
                        <img src={footer.logo} alt="logo" className="object-contain" />
                    </div>
                    <h2 className="text-white text-4xl md:text-5xl font-extrabold leading-tight mb-8">
                        {footer.headline}
                    </h2>
                    <div className="relative border-b border-gray-700 pb-2">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="bg-transparent w-full pr-10 text-white placeholder-gray-500 focus:outline-none"
                        />
                        <button className="absolute right-0 top-0 text-gray-500 hover:text-pink-600 transition-colors">
                            <FiMail className="text-xl" />
                        </button>
                    </div>
                </div>

                {/* Quick Links */}
                <div data-aos="fade-up" data-aos-delay="200">
                    <h3 className="text-white text-xl font-bold mb-6">{footer.quick}</h3>
                    <ul className="space-y-3">
                        {footer.quickLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.url}
                                    className="relative inline-block text-lg text-white/80 transition-colors duration-300 hover:text-red-500
                            after:content-[''] after:absolute after:left-0 after:bottom-0
                            after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact & Social Links */}
                <div data-aos="fade-up" data-aos-delay="200">
                    <h3 className="text-white font-bold text-left text-xl mb-6">{footer.contacts}</h3>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center">
                            <FiMail className="text-red-500 mr-3 text-lg" />
                            <a
                                href={`mailto:${footer.contact.email}`}
                                className="relative inline-block text-lg text-white/80 transition-colors duration-300 hover:text-red-500
                        after:content-[''] after:absolute after:left-0 after:bottom-0
                        after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {footer.contact.email}
                            </a>
                        </li>
                        <li className="flex items-start">
                            <FiMapPin className="text-red-500 mr-3 text-lg mt-1" />
                            <p className="relative inline-block text-lg text-white/80 transition-colors duration-300 hover:text-red-500
                            after:content-[''] after:absolute after:left-0 after:bottom-0
                            after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
                                {footer.contact.address}
                            </p>
                        </li>
                        <li className="flex items-center">
                            <FiPhone className="text-red-500 mr-3 text-lg" />
                            <a
                                href={`tel:${footer.contact.phone}`}
                                className="relative inline-block text-lg text-white/80 transition-colors duration-300 hover:text-red-500
                        after:content-[''] after:absolute after:left-0 after:bottom-0
                        after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {footer.contact.phone}
                            </a>
                        </li>
                    </ul>

                    {/* Social Links */}
                    <div className="flex space-x-4">
                        {footer.socialLinks.map((social, index) => {
                            const Icon = iconMap[social.icon];
                            if (!Icon) return null;
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-full bg-zinc-800 transition-colors group"
                                >
                                    <span className="absolute inset-0 rounded-full bg-red-500 scale-0 transition-transform duration-500 ease-out origin-center group-hover:scale-100"></span>
                                    <span className="relative text-gray-400 text-lg transition-colors duration-300 group-hover:text-white">
                                        {Icon}
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Bottom Links & Copyright */}
            <div data-aos="fade-right" data-aos-delay="200" className="container mx-auto px-6 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>{footer.copyright}</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    {footer.bottomLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="relative inline-block text-white/80 transition-colors duration-300 hover:text-red-500
                        after:content-[''] after:absolute after:left-0 after:bottom-0
                        after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {link.text}
                        </a>
                    ))}
                </div>
            </div>

        </footer>
        </>
    );
}

export default Footer
