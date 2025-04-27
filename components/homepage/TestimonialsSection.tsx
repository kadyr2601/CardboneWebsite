import React from 'react';
import {motion} from "framer-motion";
import {Star} from "lucide-react";
import Image from "next/image";
import {Button} from "@/components/ui/button";

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-20 bg-white text-carbon relative overflow-hidden">
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
                    className="mb-16 max-w-xl"
                >
                    <div className="w-20 h-1 bg-gold mb-8"></div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
                    <p className="text-xl text-gray-600">
                        Hear what our clients have to say about their experience working with CarbonX and our
                        premium carbon fiber
                        solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            quote:
                                "The carbon fiber components from CarbonX have transformed our vehicle's performance. The weight reduction and increased structural integrity have exceeded our expectations.",
                            author: "Michael Chen",
                            position: "Chief Engineer, Velocity Motors",
                            rating: 5,
                            image: "/placeholder.svg?height=100&width=100",
                        },
                        {
                            quote:
                                "As an interior designer, I'm always looking for unique materials that make a statement. CarbonX's home elements have become a signature feature in my luxury residential projects.",
                            author: "Sophia Williams",
                            position: "Principal Designer, Modern Spaces",
                            rating: 5,
                            image: "/placeholder.svg?height=100&width=100",
                        },
                        {
                            quote:
                                "The custom carbon fiber solutions provided by CarbonX for our medical equipment have significantly improved portability while maintaining structural integrity.",
                            author: "Dr. James Peterson",
                            position: "Director of Innovation, MedTech Solutions",
                            rating: 5,
                            image: "/placeholder.svg?height=100&width=100",
                        }
                    ].map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.6, delay: index * 0.1}}
                            className="bg-white p-8 rounded-xl shadow-lg relative border border-gray-200"
                        >
                            <div
                                className="absolute top-0 left-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-300"></div>
                            <div className="flex items-center mb-4">
                                {Array.from({length: testimonial.rating}).map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-gold fill-gold"/>
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                            <div className="flex items-center">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                                    <Image
                                        src={testimonial.image || "/placeholder.svg"}
                                        alt={testimonial.author}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold">{testimonial.author}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button className="bg-carbon hover:bg-carbon/90 text-white border border-gold">
                        Read More Success Stories
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;