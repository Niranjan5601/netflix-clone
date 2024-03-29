// components/Footer.tsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#141414] text-gray-400   py-4 ">
            <div className="container mx-auto  items-center">
                <div className=' text-xs'>
                    <div className="flex space-x-4 m-10">
                        {/* Social media icons */}
                        {/* Replace with your own icons */}
                        <a href="#" className="text-white">
                            <FaFacebookF size={23} />
                        </a>
                        <a href="#" className="text-white">
                            <FaInstagram size={23} />
                        </a>
                        <a href="#" className="text-white">
                            <FaTwitter size={23} />
                        </a>
                        <a href="#" className="text-white">
                            <IoLogoYoutube size={23} />
                        </a>
                    </div>
                    <div className='hidden md:grid grid-cols-4 gap-1 text-start mx-20'>
                        <div className=''>
                            <ul>
                                <li className='m-1'>
                                    <a className='hover:underline' href='#'><span>Audio Description</span></a>
                                </li>
                                <li className='m-1'>
                                    <a className='hover:underline' href='#'><span>Investor Relations</span></a>

                                </li>
                                <li className='m-1'> 

                                    <a className='hover:underline' href='#'><span>Legal Notices</span></a>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='m-1'>
                                    <a className='hover:underline' href='#'><span>Help Center</span></a>

                                </li>
                                <li className='m-1'>
                                    <a className='hover:underline' href='#'><span>Job</span></a>

                                </li>
                                <li className='m-1'>
                                    <a className='hover:underline' href='#'><span>Cookie Preferences</span></a>

                                </li>

                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='m-1'>
                                    <a className='hover:underline' href='#'><span>Gift Cards</span></a>

                                </li>
                                <li className='m-1'>
                                    <a className='hover:underline' href='#'><span>Terms Of Use</span></a>

                                </li>
                                <li className='m-1'>
                                    <a className='hover:underline' href='#'><span>Corportate Information</span></a>

                                </li>

                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='m-1'>
                                <a className='hover:underline' href='#'><span>Media Center</span></a>
                                    
                                </li>
                                <li className='m-1'>
                                <a className='hover:underline' href='#'><span>Privacy</span></a>
                                    
                                </li>
                                <li className='m-1'>
                                <a className='hover:underline' href='#'><span>Contact Us</span></a>
                                   
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="text-gray-400 mx-20 mt-10">
                        {/* Phone number */}
                        <button className='p-2 border '>Serivce Code</button>
                    </div>
                    <div className="mt-3 mx-20">
                        {/* Copyright */}
                        © 1997–2024 Netflix, Inc.
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
