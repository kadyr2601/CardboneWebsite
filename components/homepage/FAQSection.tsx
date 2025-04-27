import React from 'react';
import {motion} from "framer-motion";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Button} from "@/components/ui/button";

const FaqSection = () => {
    return (
        <section id="faq" className="py-20 bg-white text-carbon relative overflow-hidden">
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-gray-600">
                        Find answers to common questions about our carbon fiber products, manufacturing process, and
                        services.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1" className="border-b border-gray-200">
                                <AccordionTrigger className="text-lg font-medium py-4">
                                    What makes carbon fiber superior to traditional materials?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-4">
                                    Carbon fiber offers an exceptional strength-to-weight ratio, being up to 5 times
                                    stronger than steel
                                    while weighing about 70% less. It also provides superior fatigue resistance,
                                    corrosion resistance,
                                    and design flexibility that traditional materials cannot match. These properties
                                    make it ideal for
                                    applications where performance, weight, and durability are critical factors.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="border-b border-gray-200">
                                <AccordionTrigger className="text-lg font-medium py-4">
                                    How durable are carbon fiber products?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-4">
                                    Carbon fiber products are exceptionally durable. They resist corrosion, fatigue,
                                    and environmental
                                    degradation, maintaining their structural integrity over long periods. When
                                    properly manufactured
                                    and maintained, carbon fiber components can outlast many traditional materials,
                                    even in demanding
                                    conditions. However, they should be protected from direct impacts as carbon
                                    fiber can be susceptible
                                    to localized damage from sharp impacts.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="border-b border-gray-200">
                                <AccordionTrigger className="text-lg font-medium py-4">
                                    Can carbon fiber products be repaired if damaged?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-4">
                                    Yes, carbon fiber products can be repaired when damaged. The repair process
                                    typically involves
                                    removing the damaged area, preparing the surface, and applying new carbon fiber
                                    layers with resin.
                                    For structural components, professional repair is recommended to ensure the
                                    integrity of the part is
                                    maintained. Our service department offers comprehensive repair services for all
                                    our carbon fiber
                                    products.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4" className="border-b border-gray-200">
                                <AccordionTrigger className="text-lg font-medium py-4">
                                    What is the typical lead time for custom carbon fiber projects?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-4">
                                    Lead times for custom carbon fiber projects vary depending on complexity, size,
                                    and current
                                    production schedule. Simple components may take 2-4 weeks, while complex or
                                    large-scale projects can
                                    take 8-12 weeks from design approval to delivery. During the consultation phase,
                                    we provide a
                                    detailed timeline specific to your project requirements. Rush services are
                                    available for certain
                                    applications at an additional cost.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-5" className="border-b border-gray-200">
                                <AccordionTrigger className="text-lg font-medium py-4">
                                    How do you ensure the quality of your carbon fiber products?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-4">
                                    We maintain strict quality control throughout our manufacturing process. This
                                    includes material
                                    testing, precision manufacturing techniques, and comprehensive final
                                    inspections. Each component
                                    undergoes ultrasonic scanning to detect any internal defects, and structural
                                    parts are tested for
                                    strength and integrity. We adhere to industry standards and certifications
                                    relevant to each
                                    application, ensuring consistent quality across all our products.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6" className="border-b border-gray-200">
                                <AccordionTrigger className="text-lg font-medium py-4">
                                    Are carbon fiber products environmentally friendly?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-4">
                                    Carbon fiber products contribute to environmental sustainability in several
                                    ways. Their lightweight
                                    nature reduces energy consumption in transportation applications, leading to
                                    lower emissions over
                                    the product lifecycle. Additionally, carbon fiber's durability means products
                                    need replacement less
                                    frequently. While the production process is energy-intensive, we implement
                                    sustainable manufacturing
                                    practices and are researching recycling methods to further reduce environmental
                                    impact.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-7" className="border-b border-gray-200">
                                <AccordionTrigger className="text-lg font-medium py-4">
                                    What finish options are available for carbon fiber products?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-4">
                                    We offer multiple finish options for our carbon fiber products. These include
                                    high-gloss clear coat,
                                    matte finish, colored tints, and custom paint options. The standard visible
                                    carbon weave pattern is
                                    popular for its distinctive appearance, but we can also provide textured
                                    finishes or completely
                                    painted surfaces depending on your aesthetic requirements. All finishes include
                                    UV protection to
                                    prevent yellowing or degradation from sun exposure.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-8" className="border-b border-gray-200">
                                <AccordionTrigger className="text-lg font-medium py-4">
                                    Do you offer warranties on your carbon fiber products?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-4">
                                    Yes, all our carbon fiber products come with a standard warranty covering
                                    manufacturing defects.
                                    Warranty periods vary by product type: automotive components typically carry a
                                    2-year warranty,
                                    structural elements a 5-year warranty, and decorative items a 1-year warranty.
                                    Extended warranty
                                    options are available for most products. The warranty covers structural
                                    integrity and finish quality
                                    but does not cover damage from improper use or installation.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">Don't see your question answered here?</p>
                    <Button className="bg-carbon hover:bg-carbon/90 text-white border border-gold">
                        Contact Our Support Team
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;