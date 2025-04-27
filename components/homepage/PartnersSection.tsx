import React, {Component} from 'react';
import {motion} from "framer-motion";
import Image from "next/image";

class PartnersSection extends Component {
    render() {
        return (
            <section className="py-20 bg-white text-carbon relative overflow-hidden">
                <div
                    className="absolute top-0 right-0 w-64 h-64 carbon-texture opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                <div
                    className="absolute bottom-0 left-0 w-96 h-96 carbon-texture opacity-5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                        className="text-center mb-16"
                    >
                        <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Partners</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We collaborate with industry leaders to push the boundaries of carbon fiber innovation and
                            application.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
                        {Array.from({length: 6}).map((_, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.6, delay: index * 0.05}}
                                className="bg-white p-6 rounded-xl flex items-center justify-center h-24 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
                            >
                                <Image
                                    src={`/placeholder.svg?height=80&width=120`}
                                    alt={`Partner logo ${index + 1}`}
                                    width={120}
                                    height={80}
                                    className="max-h-12 w-auto object-contain"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default PartnersSection;