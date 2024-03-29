// components/Footer.tsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#141414] text-gray-400  py-4 m-100">
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
                    <div className='grid grid-cols-4 gap-2 '>
                        <div>
                            <ul>
                                <li>
                                    Audio Description
                                </li>
                                <li>
                                    Investor Relations
                                </li>
                                <li>
                                    Legal Notices
                                </li>

                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                   Help Center
                                </li>
                                <li>
                                    Job
                                </li>
                                <li>
                                   Cookie Preferences
                                </li>

                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    Gift Cards
                                </li>
                                <li>
                                    Terms Of Use
                                </li>
                                <li>
                                    Corportate Information
                                </li>

                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    Media Center
                                </li>
                                <li>
                                    Privacy
                                </li>
                                <li>
                                    Contact Us
                                </li>

                            </ul>
                        </div>
                    </div>
                    
                    <div className="text-gray-400 border mt-10">
                        {/* Phone number */}
                        <div className='p-2'>Serivce Code</div>
                    </div>
                    <div className="mt-3">
                        {/* Copyright */}
                        © 1997–2024 Netflix, Inc.
                    </div>
                </div>
             
            </div>
        </footer>
    );
};

export default Footer;
