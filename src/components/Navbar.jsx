import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {useSiteData} from "../context/SiteDataContext";
import {
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
    FaFacebook,
    FaBars,
    FaTimes,
    FaWhatsapp,
} from "react-icons/fa";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const {navbar} = useSiteData();
    return (
        <>
            <nav
                className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${isScrolled
                    ? "backdrop-blur-lg bg-black/60 shadow-lg"
                    : "bg-transparent"
                    }`}
            >
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div>
                        <Link to="/">
                            <img
                                className="cursor-pointer"
                                src={navbar.logo}
                                width="100px"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div
                        className="text-white text-2xl md:hidden cursor-pointer"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <FaTimes /> : <FaBars />}
                    </div>
                    <div
                        className={`text-white absolute md:static bg-black md:bg-transparent w-full left-0 md:w-auto top-[72px] md:top-auto 
                                transition-all duration-500 ease-in-out 
                                ${open
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0 md:opacity-100 md:max-h-none"
                            } md:block overflow-hidden`}
                    >
                        <ul>
                            <li className="flex flex-col md:flex-row md:items-center md:space-x-5 space-y-4 md:space-y-0 py-4 md:py-0 text-center md:text-left text-sm">
                                <Link to="/" className="border-2 border-gray-500/0 hover:border-red-500 hover:text-red-500 transition-all font-bold rounded p-1">
                                    {navbar.links.first.name}
                                </Link>
                                <Link
                                    to="/about"
                                    className="border-2 border-gray-500/0 hover:border-red-500 hover:text-red-500 transition-all font-bold rounded p-1"
                                >
                                    {navbar.links.second.name}
                                </Link>
                                <Link
                                    to="/Services"
                                    className="border-2 border-gray-500/0 hover:border-red-500 hover:text-red-500 transition-all font-bold rounded p-1"
                                >
                                    {navbar.links.third.name}
                                </Link>
                                <Link
                                    to="/me"
                                    className="border-2 border-gray-500/0 hover:border-red-500 hover:text-red-500 transition-all font-bold rounded p-1"
                                >
                                    {navbar.links.fourth.name}
                                </Link>

                                <Link
                                    to="/Contact"
                                    className="border-2 border-gray-500/0 hover:border-red-500 hover:text-red-500 transition-all font-bold rounded p-1"
                                >
                                    {navbar.links.fifth.name}
                                </Link>
                            </li>
                        </ul>
                        <div
                            className={`flex justify-center space-x-4 text-white text-md md:hidden pb-4 transition-all duration-500 ${open ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <a
                                href="#"
                                className="bg-gray-400 p-2 rounded-full hover:bg-red-700 transition-all"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sameer-akhtar-601349381/"
                                className="bg-gray-400 p-2 rounded-full hover:bg-red-600 transition-all"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="https://github.com/Sameer-Builds"
                                className="bg-gray-400 p-2 rounded-full hover:bg-red-600 transition-all"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://wa.me/923216903462"
                                className="bg-gray-400 p-2 rounded-full hover:bg-red-600 transition-all"
                            >
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:flex space-x-1 text-white text-md">
                        <a
                            href="#"
                            className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-full bg-zinc-800 transition-colors group"
                        >
                            <span
                                className="absolute inset-0 rounded-full bg-red-500 scale-0 transition-transform duration-500 ease-out origin-center group-hover:scale-100"
                            ></span>
                            <FaInstagram className="relative text-gray-400 text-lg transition-colors duration-300 group-hover:text-white" />
                        </a>
                        <a
                            href="#"
                            className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-full bg-zinc-800 transition-colors group"
                        >
                            <span
                                className="absolute inset-0 rounded-full bg-red-500 scale-0 transition-transform duration-500 ease-out origin-center group-hover:scale-100"
                            ></span>
                            <FaLinkedinIn className="relative text-gray-400 text-lg transition-colors duration-300 group-hover:text-white" />
                        </a>
                        <a
                            href="#"
                            className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-full bg-zinc-800 transition-colors group"
                        >
                            <span
                                className="absolute inset-0 rounded-full bg-red-500 scale-0 transition-transform duration-500 ease-out origin-center group-hover:scale-100"
                            ></span>
                            <FaGithub className="relative text-gray-400 text-lg transition-colors duration-300 group-hover:text-white" />
                        </a>
                        <a
                            href="#"
                            className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-full bg-zinc-800 transition-colors group"
                        >
                            <span
                                className="absolute inset-0 rounded-full bg-red-500 scale-0 transition-transform duration-500 ease-out origin-center group-hover:scale-100"
                            ></span>
                            <FaFacebook className="relative text-gray-400 text-lg transition-colors duration-300 group-hover:text-white" />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
