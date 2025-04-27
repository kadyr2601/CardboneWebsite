import React from 'react';
import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import {ArrowRight, ChevronDown, Play} from "lucide-react";
import Link from "next/link";

const HeroSection = ({ref, y, opacity}: {ref: any, y: any, opacity: any}) => {

    return (
        <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
            <motion.div style={{y, opacity}} className="absolute inset-0 z-0">
                <div className="absolute inset-0 carbon-texture opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-carbon/0 to-carbon"></div>
            </motion.div>

            <div className="container mx-auto px-4 z-10">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="max-w-3xl"
                >
                    <div className="w-20 h-1 bg-gold mb-8"></div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-shadow">
                        Carbon <span className="text-gold">Innovation</span> Redefined
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl">
                        Premium carbon fiber elements for automotive and home applications with unmatched
                        strength-to-weight
                        ratio.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            className="bg-gold hover:bg-gold/90 text-carbon border-none text-lg py-6 px-8 group">
                            Explore Products
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"/>
                        </Button>
                        <Button variant="outline"
                                className="bg-white/10 border-white text-white hover:bg-white/10 text-lg py-6 px-8 group">
                            Watch Our Process
                            <Play className="ml-2 h-5 w-5"/>
                        </Button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.5, duration: 1}}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            >
                <Link href="#products">
                    <Button variant="ghost" size="icon" className="animate-bounce text-white">
                        <ChevronDown className="h-8 w-8"/>
                        <span className="sr-only">Scroll down</span>
                    </Button>
                </Link>
            </motion.div>
        </section>
    );
};

export default HeroSection;