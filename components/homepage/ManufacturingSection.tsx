import React from 'react';
import {motion} from "framer-motion";
import {ArrowRight, Award, Check, Play, Shield, Sparkles, Zap} from "lucide-react";
import {Button} from "@/components/ui/button";
import Image from "next/image";

const ManufacturingSection = () => {
    return (
        <section id="process" className="py-20 bg-carbon text-white relative overflow-hidden">
            <div className="absolute inset-0 carbon-texture opacity-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="text-center mb-16"
                >
                    <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">Our Manufacturing Process</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        We combine cutting-edge technology with traditional craftsmanship to create carbon fiber
                        elements of
                        exceptional quality.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {[
                        {
                            title: "Design & Engineering",
                            description:
                                "Our team of engineers creates detailed 3D models and performs structural analysis to ensure optimal performance.",
                            icon: <Sparkles className="h-8 w-8 text-gold"/>,
                            steps: ["Client consultation", "3D modeling", "Structural analysis", "Design optimization"],
                        },
                        {
                            title: "Material Selection",
                            description:
                                "We source the highest quality carbon fiber materials, selecting the perfect weave and resin for each application.",
                            icon: <Shield className="h-8 w-8 text-gold"/>,
                            steps: ["Fiber selection", "Resin formulation", "Quality testing", "Material preparation"],
                        },
                        {
                            title: "Precision Manufacturing",
                            description:
                                "Using advanced manufacturing techniques, we transform raw materials into precisely formed carbon fiber components.",
                            icon: <Zap className="h-8 w-8 text-gold"/>,
                            steps: ["Mold preparation", "Layup process", "Vacuum infusion", "Autoclave curing"],
                        },
                        {
                            title: "Finishing & Quality Control",
                            description:
                                "Each piece undergoes meticulous finishing and rigorous quality control to ensure perfection.",
                            icon: <Award className="h-8 w-8 text-gold"/>,
                            steps: ["CNC trimming", "Surface finishing", "Quality inspection", "Final assembly"],
                        },
                    ].map((process, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.6, delay: index * 0.1}}
                            className="bg-carbon-gradient p-8 rounded-xl shadow-lg relative group border border-gray-800"
                        >
                            <div
                                className="absolute top-0 left-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-300"></div>
                            <div className="mb-6">{process.icon}</div>
                            <h3 className="text-xl font-bold mb-3 text-white">{process.title}</h3>
                            <p className="text-gray-300 mb-4">{process.description}</p>
                            <div>
                                <h4 className="font-semibold text-sm text-gray-400 mb-2">PROCESS STEPS</h4>
                                <ol className="space-y-1 list-decimal list-inside text-sm text-gray-300">
                                    {process.steps.map((step, i) => (
                                        <li key={i}>{step}</li>
                                    ))}
                                </ol>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-4 text-white">Our State-of-the-Art Facility</h3>
                            <p className="text-gray-300 mb-6">
                                Our 50,000 sq ft manufacturing facility houses the latest carbon fiber production
                                technology,
                                including:
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-gold mr-2 mt-0.5"/>
                                    <div>
                                        <span className="font-semibold text-white">Advanced Autoclave Systems</span>
                                        <p className="text-sm text-gray-400">
                                            Precision temperature and pressure control for optimal curing.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-gold mr-2 mt-0.5"/>
                                    <div>
                                        <span className="font-semibold text-white">5-Axis CNC Machining</span>
                                        <p className="text-sm text-gray-400">
                                            Ultra-precise cutting and finishing for complex geometries.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-gold mr-2 mt-0.5"/>
                                    <div>
                                        <span className="font-semibold text-white">Vacuum Infusion Technology</span>
                                        <p className="text-sm text-gray-400">Ensures perfect resin distribution and
                                            eliminates voids.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Check className="h-5 w-5 text-gold mr-2 mt-0.5"/>
                                    <div>
                                            <span
                                                className="font-semibold text-white">Advanced Quality Control Lab</span>
                                        <p className="text-sm text-gray-400">
                                            Comprehensive testing for strength, weight, and finish quality.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <Button className="bg-gold hover:bg-gold/90 text-carbon border-none group">
                                Schedule a Facility Tour
                                <ArrowRight
                                    className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"/>
                            </Button>
                        </div>
                        <div className="relative h-[400px] rounded-xl overflow-hidden">
                            <Image
                                src="/placeholder.svg?height=400&width=600"
                                alt="CarbonX Manufacturing Facility"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-carbon/50 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <Button
                                    variant="outline"
                                    className="bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 group"
                                >
                                    Watch Facility Video
                                    <Play className="ml-2 h-5 w-5"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManufacturingSection;