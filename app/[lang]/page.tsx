'use client'
import { useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import HeroSection from "@/components/homepage/HeroSection";
import ProductsSection from "@/components/homepage/ProductsSection";
import ManufacturingSection from "@/components/homepage/ManufacturingSection";
import TechnicalSection from "@/components/homepage/TechnicalSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import FaqSection from "@/components/homepage/FAQSection";
import PartnersSection from "@/components/homepage/PartnersSection";
import ContactSection from "@/components/homepage/ContactSection";

export default function Home({params}: { params: { lang: string } }) {
    // const dictionary = await getDictionary(params.lang)

    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <div className="min-h-screen bg-carbon text-white">

            <HeroSection ref={ref} y={y} opacity={opacity}/>

            <ProductsSection/>

            <ManufacturingSection/>

            <TechnicalSection/>

            <TestimonialsSection/>

            <FaqSection/>

            <PartnersSection/>

            <ContactSection/>

        </div>
    )
}
