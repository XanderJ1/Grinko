import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 mt-16">
            <div className="mx-auto max-w-7xl px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

                    {/* Company Info */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-green-600">Grinko</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Your trusted cleaning team providing professional cleaning services
                            for homes and businesses. We keep your spaces spotless when you need it most.
                        </p>
                        <div className="flex items-center text-gray-300">
                            <i className="pi pi-clock mr-2"></i>
                            <span>Operating 24/7</span>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Our Services</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-green-400 transition">Deep Cleaning</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">Window Cleaning</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">Office Cleaning</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">Home Cleaning</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">Move-In/Out Cleaning</a></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#services" className="hover:text-green-400 transition">Services</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">Pricing</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">About Us</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">Contact Us</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">Get Quotes</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div id="contact" className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Get In Touch</h3>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-center">
                                <i className="pi pi-phone mr-3 text-green-400"></i>
                                <a href="tel:+447858860101" className="hover:text-green-400 transition">
                                    +44 7858 860101
                                </a>
                            </div>
                            <div className="flex items-center">
                                <i className="pi pi-envelope mr-3 text-green-400"></i>
                                <a href="mailto:info@grinko.co.uk" className="hover:text-green-400 transition">
                                    info@grinko.co.uk
                                </a>
                            </div>
                            <div className="flex items-start">
                                <i className="pi pi-map-marker mr-3 text-green-400 mt-1"></i>
                                <span> Whitley, United Kingdom</span>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4 pt-2">
                            <a href="https://www.facebook.com/share/1YmqMzwetd/?mibextid=wwXIfr" className="text-gray-300 hover:text-green-400 transition">
                                <i className="pi pi-facebook text-xl"></i>
                            </a>
                            <a href="https://www.tiktok.com/@grinko.co.uk?_r=1&_t=ZN-91AhB7rwuko" className="text-gray-300 hover:text-green-400 transition">
                                <i className="pi pi-tiktok text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-green-400 transition">
                                <i className="pi pi-instagram text-xl"></i>
                            </a>
                            <a href="https://wa.me/447858860101" className="text-gray-300 hover:text-green-400 transition">
                                <i className="pi pi-whatsapp text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">
                            &copy; 2025 Grinko Cleaning Services. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm text-gray-400">
                            <a href="#" className="hover:text-green-400 transition">Privacy Policy</a>
                            <a href="#" className="hover:text-green-400 transition">Terms of Service</a>
                            <a href="#" className="hover:text-green-400 transition">Cookie Policy</a>
                        </div>
                    </div>
                </div>
                {/* Call to Action Banner */}
                <div className="bg-green-600 rounded-xl p-6 mt-8 text-center">
                    <h3 className="text-2xl font-bold mb-2">Ready for a Spotless Space?</h3>
                    <p className="mb-4 text-green-100">get your free quote today and experience professional cleaning services

                    </p>
                    <Link href={"/book-cleaning"}>
                        <button className="bg-white text-[#0d7b6f] cursor-pointer px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition">
                        Get Your Free Quote
                    </button>
                    </Link>

                </div>

            </div>
        </footer>
    )
}

export default Footer
