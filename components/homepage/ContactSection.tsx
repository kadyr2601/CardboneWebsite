import React from 'react';
import {motion} from "framer-motion";
import {Award, Clock, Users} from "lucide-react";
import {Button} from "@/components/ui/button";

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-carbon text-white relative overflow-hidden">
            <div className="absolute inset-0 carbon-texture opacity-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                    >
                        <div className="w-20 h-1 bg-gold mb-8"></div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">Get In Touch</h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Interested in our carbon fiber solutions? Contact us to discuss your project
                            requirements or schedule a
                            consultation with our experts.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="flex items-start space-x-4">
                                <div
                                    className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-carbon flex-shrink-0">
                                    <Users className="h-5 w-5"/>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1 text-white">Expert Consultation</h3>
                                    <p className="text-gray-300">
                                        Our team of specialists will work with you to understand your needs and
                                        provide tailored
                                        solutions.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div
                                    className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-carbon flex-shrink-0">
                                    <Clock className="h-5 w-5"/>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1 text-white">Quick Response</h3>
                                    <p className="text-gray-300">
                                        We pride ourselves on responsive communication and timely project delivery.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div
                                    className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-carbon flex-shrink-0">
                                    <Award className="h-5 w-5"/>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1 text-white">Quality Guarantee</h3>
                                    <p className="text-gray-300">
                                        All our carbon fiber solutions come with a comprehensive quality guarantee.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4">
                                    <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Call Us</p>
                                    <p className="font-medium text-white">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4">
                                    <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email Us</p>
                                    <p className="font-medium text-white">info@carbonx.com</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4">
                                    <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Visit Us</p>
                                    <p className="font-medium text-white">1234 Carbon Way, Innovation District</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 20}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                        className="bg-white text-carbon rounded-xl p-8 shadow-lg relative"
                    >
                        {/*<div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>*/}
                        <h3 className="text-2xl font-bold mb-6">Request Information</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-carbon focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-carbon focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                                        placeholder="Your email"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-carbon focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                                    placeholder="Your phone number"
                                />
                            </div>

                            <div>
                                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                                    I'm interested in
                                </label>
                                <select
                                    id="interest"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-carbon focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                                >
                                    <option value="">Select your interest</option>
                                    <option value="automotive">Automotive Carbon Fiber</option>
                                    <option value="home">Home Carbon Elements</option>
                                    <option value="custom">Custom Projects</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-carbon focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                                    placeholder="Tell us about your project or requirements"
                                ></textarea>
                            </div>

                            <div className="flex items-start">
                                <input
                                    id="privacy"
                                    type="checkbox"
                                    className="h-4 w-4 mt-1 text-gold border-gray-300 rounded focus:ring-gold"
                                />
                                <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                                    I agree to the{" "}
                                    <a href="#" className="text-gold hover:underline">
                                        Privacy Policy
                                    </a>{" "}
                                    and consent to being contacted regarding my inquiry.
                                </label>
                            </div>

                            <Button className="w-full bg-carbon hover:bg-carbon/90 text-white border border-gold">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;