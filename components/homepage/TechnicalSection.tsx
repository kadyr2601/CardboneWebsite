import React from 'react';
import {motion} from "framer-motion";
import {Shield, Sparkles, Truck, Zap} from "lucide-react";
import {Button} from "@/components/ui/button";

const TechnicalSection = () => {
    return (
        <section className="py-20 bg-carbon text-white relative overflow-hidden">
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">Technical Specifications</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Our carbon fiber materials offer exceptional performance characteristics that surpass
                        traditional
                        materials in multiple dimensions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                        <h3 className="text-2xl font-bold mb-6 text-white">Material Properties</h3>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-white">Tensile Strength</span>
                                    <span className="text-gold font-bold">3500-4500 MPa</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div className="bg-gold h-2 rounded-full" style={{width: "95%"}}></div>
                                </div>
                                <p className="text-xs text-gray-400 mt-1">Compared to steel (400-2000 MPa)</p>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-white">Elastic Modulus</span>
                                    <span className="text-gold font-bold">230-240 GPa</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div className="bg-gold h-2 rounded-full" style={{width: "85%"}}></div>
                                </div>
                                <p className="text-xs text-gray-400 mt-1">Compared to aluminum (69 GPa)</p>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-white">Density</span>
                                    <span className="text-gold font-bold">1.55-1.75 g/cm³</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div className="bg-gold h-2 rounded-full" style={{width: "30%"}}></div>
                                </div>
                                <p className="text-xs text-gray-400 mt-1">Compared to steel (7.85 g/cm³)</p>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-white">Thermal Expansion</span>
                                    <span className="text-gold font-bold">2-6 × 10⁻⁶/°C</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div className="bg-gold h-2 rounded-full" style={{width: "25%"}}></div>
                                </div>
                                <p className="text-xs text-gray-400 mt-1">Compared to aluminum (23 × 10⁻⁶/°C)</p>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-white">Fatigue Resistance</span>
                                    <span className="text-gold font-bold">Excellent</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div className="bg-gold h-2 rounded-full" style={{width: "90%"}}></div>
                                </div>
                                <p className="text-xs text-gray-400 mt-1">Superior to most metals</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-white">Material Advantages</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div
                                    className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-carbon flex-shrink-0 mr-4">
                                    <Zap className="h-5 w-5"/>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Exceptional Strength-to-Weight
                                        Ratio</h4>
                                    <p className="text-gray-300">
                                        Carbon fiber offers up to 5 times the strength of steel at just one-fifth
                                        the weight, enabling
                                        significant performance improvements.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div
                                    className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-carbon flex-shrink-0 mr-4">
                                    <Shield className="h-5 w-5"/>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Superior Durability</h4>
                                    <p className="text-gray-300">
                                        Resistant to corrosion, fatigue, and environmental degradation, ensuring
                                        long-term performance in
                                        demanding conditions.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div
                                    className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-carbon flex-shrink-0 mr-4">
                                    <Sparkles className="h-5 w-5"/>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Design Flexibility</h4>
                                    <p className="text-gray-300">
                                        Can be molded into complex shapes and customized for specific applications,
                                        offering greater
                                        design freedom than traditional materials.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div
                                    className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-carbon flex-shrink-0 mr-4">
                                    <Truck className="h-5 w-5"/>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Energy Efficiency</h4>
                                    <p className="text-gray-300">
                                        Lightweight properties contribute to reduced energy consumption in
                                        transportation applications,
                                        supporting sustainability goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Button className="bg-gold hover:bg-gold/90 text-carbon border-none">Download Technical Data
                        Sheets</Button>
                </div>
            </div>
        </section>
    );
};

export default TechnicalSection;