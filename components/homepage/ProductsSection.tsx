import React from 'react';
import {motion} from "framer-motion";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Image from "next/image";
import {ArrowRight, Check} from "lucide-react";
import {Button} from "@/components/ui/button";

const ProductsSection = () => {
    return (
        <section id="products" className="py-20 bg-white text-carbon relative overflow-hidden">
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Carbon Excellence</h2>
                    <p className="text-xl text-gray-600">
                        Discover our range of high-performance carbon fiber elements designed for both automotive
                        and home
                        applications with industry-leading specifications.
                    </p>
                </motion.div>

                <Tabs defaultValue="automotive" className="w-full mb-12">
                    <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8 bg-gray-100">
                        <TabsTrigger value="automotive"
                                     className="data-[state=active]:bg-carbon data-[state=active]:text-white">
                            Automotive
                        </TabsTrigger>
                        <TabsTrigger value="home"
                                     className="data-[state=active]:bg-carbon data-[state=active]:text-white">
                            Home
                        </TabsTrigger>
                        <TabsTrigger value="custom"
                                     className="data-[state=active]:bg-carbon data-[state=active]:text-white">
                            Custom
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="automotive">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Performance Panels",
                                    description:
                                        "Ultra-lightweight carbon fiber body panels that reduce weight by up to 70% compared to steel alternatives.",
                                    specs: ["Weight: 1.2kg/m²", "Thickness: 1.5mm", "Finish: Gloss/Matte"],
                                    image: "/placeholder.svg?height=400&width=600",
                                },
                                {
                                    title: "Interior Trim",
                                    description:
                                        "Premium carbon fiber interior components that enhance aesthetics while reducing overall vehicle weight.",
                                    specs: ["Custom fitment", "UV resistant", "Multiple weave patterns"],
                                    image: "/placeholder.svg?height=400&width=600",
                                },
                                {
                                    title: "Structural Components",
                                    description:
                                        "High-strength carbon fiber chassis and structural elements engineered for maximum safety and performance.",
                                    specs: ["Tensile strength: 3800 MPa", "Modulus: 230 GPa", "Impact resistant"],
                                    image: "/placeholder.svg?height=400&width=600",
                                },
                            ].map((product, index) => (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true}}
                                    transition={{duration: 0.6, delay: index * 0.2}}
                                    whileHover={{y: -10}}
                                    className="bg-white rounded-xl overflow-hidden group shadow-lg border border-gray-200"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={product.image || "/placeholder.svg"}
                                            alt={product.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-carbon/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div
                                            className="absolute bottom-0 left-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-300"></div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                                        <p className="text-gray-600 mb-4">{product.description}</p>
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-sm text-gray-500 mb-2">SPECIFICATIONS</h4>
                                            <ul className="space-y-1">
                                                {product.specs.map((spec, i) => (
                                                    <li key={i} className="flex items-center text-sm">
                                                        <Check className="h-4 w-4 text-gold mr-2"/>
                                                        <span>{spec}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <Button variant="ghost" className="text-carbon hover:text-gold p-0 group">
                                            Explore
                                            <ArrowRight
                                                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="home">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Furniture Elements",
                                    description:
                                        "Sleek carbon fiber furniture components that combine modern aesthetics with incredible durability.",
                                    specs: ["Weight: 60% lighter than wood", "High scratch resistance", "Custom dimensions available"],
                                    image: "/placeholder.svg?height=400&width=600",
                                },
                                {
                                    title: "Decorative Panels",
                                    description:
                                        "Stunning carbon fiber wall and ceiling panels that create a distinctive modern look in any space.",
                                    specs: ["Thickness: 2-5mm", "Sound dampening", "Fire resistant"],
                                    image: "/placeholder.svg?height=400&width=600",
                                },
                                {
                                    title: "Functional Accessories",
                                    description:
                                        "Carbon fiber home accessories that combine practicality with sophisticated design elements.",
                                    specs: ["Waterproof", "Heat resistant to 180°C", "Stain resistant"],
                                    image: "/placeholder.svg?height=400&width=600",
                                },
                            ].map((product, index) => (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true}}
                                    transition={{duration: 0.6, delay: index * 0.2}}
                                    whileHover={{y: -10}}
                                    className="bg-white rounded-xl overflow-hidden group shadow-lg border border-gray-200"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={product.image || "/placeholder.svg"}
                                            alt={product.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-carbon/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div
                                            className="absolute bottom-0 left-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-300"></div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                                        <p className="text-gray-600 mb-4">{product.description}</p>
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-sm text-gray-500 mb-2">SPECIFICATIONS</h4>
                                            <ul className="space-y-1">
                                                {product.specs.map((spec, i) => (
                                                    <li key={i} className="flex items-center text-sm">
                                                        <Check className="h-4 w-4 text-gold mr-2"/>
                                                        <span>{spec}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <Button variant="ghost" className="text-carbon hover:text-gold p-0 group">
                                            Explore
                                            <ArrowRight
                                                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="custom">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Bespoke Projects",
                                    description:
                                        "Fully customized carbon fiber solutions tailored to your exact specifications and requirements.",
                                    specs: ["Consultation included", "3D modeling & prototyping", "Full engineering support"],
                                    image: "/placeholder.svg?height=400&width=600",
                                },
                                {
                                    title: "Limited Editions",
                                    description:
                                        "Exclusive carbon fiber creations produced in limited quantities for discerning collectors.",
                                    specs: ["Numbered pieces", "Certificate of authenticity", "Exclusive designs"],
                                    image: "/placeholder.svg?height=400&width=600",
                                },
                                {
                                    title: "Industrial Solutions",
                                    description:
                                        "Specialized carbon fiber components for industrial applications requiring extreme performance.",
                                    specs: ["Chemical resistant", "Temperature range: -40°C to 200°C", "Custom engineering"],
                                    image: "/placeholder.svg?height=400&width=600",
                                },
                            ].map((product, index) => (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true}}
                                    transition={{duration: 0.6, delay: index * 0.2}}
                                    whileHover={{y: -10}}
                                    className="bg-white rounded-xl overflow-hidden group shadow-lg border border-gray-200"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={product.image || "/placeholder.svg"}
                                            alt={product.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-carbon/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div
                                            className="absolute bottom-0 left-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-300"></div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                                        <p className="text-gray-600 mb-4">{product.description}</p>
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-sm text-gray-500 mb-2">SPECIFICATIONS</h4>
                                            <ul className="space-y-1">
                                                {product.specs.map((spec, i) => (
                                                    <li key={i} className="flex items-center text-sm">
                                                        <Check className="h-4 w-4 text-gold mr-2"/>
                                                        <span>{spec}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <Button variant="ghost" className="text-carbon hover:text-gold p-0 group">
                                            Explore
                                            <ArrowRight
                                                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>

                <div className="text-center mt-12">
                    <Button className="bg-carbon hover:bg-carbon/90 text-white border border-gold">
                        View Full Product Catalog
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;