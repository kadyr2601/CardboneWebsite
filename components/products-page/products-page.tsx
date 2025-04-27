"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight, ExternalLink, ChevronRight, Home, Car, Sparkles, Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Dictionary } from "@/lib/i18n/dictionaries"
import styles from "@/styles/products-page.module.css"

interface ProductsPageProps {
    dictionary: Dictionary
    lang: string
}

// Project/Service type definition
type Project = {
    id: string
    title: string
    category: "automotive" | "home" | "custom"
    description: string
    image: string
    detailImages?: string[]
    client?: string
    year?: string
    featured?: boolean
    benefits?: string[]
}

export default function ProductsPage({ dictionary, lang }: ProductsPageProps) {
    const { products } = dictionary
    const heroRef = useRef(null)
    const isHeroInView = useInView(heroRef, { once: true })
    const [activeCategory, setActiveCategory] = useState<string>("all")
    const controls = useAnimation()

    useEffect(() => {
        if (isHeroInView) {
            controls.start("visible")
        }
    }, [isHeroInView, controls])

    // Sample projects data
    const projects: Project[] = [
        // Automotive Projects
        {
            id: "ferrari-carbon-kit",
            title: "Ferrari 488 Carbon Fiber Kit",
            category: "automotive",
            description: "Complete carbon fiber exterior package for Ferrari 488 with custom weave pattern and gold accents.",
            image: "/ferrari-carbon-details.png",
            client: "Private Collector",
            year: "2023",
            featured: true,
            benefits: [
                "Weight reduction of 18kg compared to OEM parts",
                "Enhanced aerodynamic performance",
                "Distinctive visual appearance with custom weave pattern",
                "UV-resistant clear coat with 10-year warranty",
            ],
        },
        {
            id: "porsche-interior",
            title: "Porsche 911 Interior Transformation",
            category: "automotive",
            description: "Full carbon fiber interior package with custom stitching and integrated ambient lighting system.",
            image: "/porsche-carbon-fiber-detail.png",
            client: "Porsche Enthusiast Club",
            year: "2023",
            benefits: [
                "Complete interior transformation with premium materials",
                "Custom-designed ambient lighting system",
                "Precision-fit components with OEM-level quality",
                "Handcrafted details with personalized accents",
            ],
        },
        {
            id: "lamborghini-aero",
            title: "Lamborghini Huracán Aero Package",
            category: "automotive",
            description:
                "Aerodynamic carbon fiber package including splitter, side skirts, and rear diffuser with active elements.",
            image: "/aventador-carbon-detail.png",
            client: "Performance Automotive",
            year: "2022",
            featured: true,
            benefits: [
                "Increased downforce at high speeds",
                "Reduced drag coefficient for better performance",
                "Active aerodynamic elements for adaptive performance",
                "Track-tested design with proven results",
            ],
        },
        {
            id: "bmw-m4-hood",
            title: "BMW M4 Vented Hood",
            category: "automotive",
            description: "Lightweight carbon fiber hood with functional heat extraction vents and exposed carbon weave.",
            image: "/m4-carbon-hood-detail.png",
            client: "M Performance Shop",
            year: "2023",
            benefits: [
                "Effective heat extraction for improved engine cooling",
                "Weight reduction of 8kg compared to stock hood",
                "Precision-engineered fitment with OEM mounting points",
                "Available in gloss, matte, or forged carbon finishes",
            ],
        },
        {
            id: "tesla-carbon-package",
            title: "Tesla Model S Carbon Package",
            category: "automotive",
            description: "Comprehensive carbon fiber exterior and interior package for Tesla Model S with satin finish.",
            image: "/tesla-model-3-carbon-fiber-trim.png",
            client: "Electric Vehicle Enthusiast",
            year: "2022",
            benefits: [
                "Complete transformation with cohesive design language",
                "Premium satin finish with subtle texture",
                "Enhanced interior acoustics with carbon fiber panels",
                "Custom-designed elements exclusive to Tesla vehicles",
            ],
        },

        // Home Projects
        {
            id: "luxury-dining-table",
            title: "Luxury Carbon Fiber Dining Table",
            category: "home",
            description: "Custom 10-person dining table with carbon fiber base and tempered glass top featuring gold inlays.",
            image: "/carbon-fiber-dining.png",
            client: "Architectural Digest Feature Home",
            year: "2023",
            featured: true,
            benefits: [
                "Striking visual presence with innovative structural design",
                "Ultra-lightweight yet incredibly strong construction",
                "Custom dimensions tailored to your space",
                "Integrated gold inlays with premium finish options",
            ],
        },
        {
            id: "carbon-wall-installation",
            title: "Carbon Fiber Wall Installation",
            category: "home",
            description: "Modular carbon fiber wall panels with integrated lighting system for luxury penthouse.",
            image: "/illuminated-carbon-fiber.png",
            client: "Urban Penthouse Project",
            year: "2022",
            benefits: [
                "Modular design allows for custom configurations",
                "Integrated LED lighting system with smart home controls",
                "Acoustic dampening properties for improved room acoustics",
                "Temperature-resistant and easy to maintain",
            ],
        },
        {
            id: "carbon-staircase",
            title: "Floating Carbon Fiber Staircase",
            category: "home",
            description: "Minimalist floating staircase constructed entirely from carbon fiber with glass balustrades.",
            image: "/carbon-ascension.png",
            client: "Modern Architectural Home",
            year: "2023",
            featured: true,
            benefits: [
                "Cantilever design creates floating appearance",
                "Engineered to exceed structural safety standards",
                "Integrated lighting for safety and ambiance",
                "Custom tread patterns and finish options available",
            ],
        },
        {
            id: "carbon-kitchen",
            title: "Carbon Fiber Kitchen Elements",
            category: "home",
            description:
                "Custom kitchen cabinetry and island featuring carbon fiber facing with integrated smart home technology.",
            image: "/sleek-carbon-kitchen.png",
            client: "Smart Home Showcase",
            year: "2022",
            benefits: [
                "Moisture and heat resistant surfaces ideal for kitchen environments",
                "Integrated smart home controls for appliances and lighting",
                "Lightweight cabinet doors with soft-close mechanisms",
                "Customizable layouts to fit any kitchen design",
            ],
        },
        {
            id: "carbon-lighting",
            title: "Carbon Fiber Lighting Collection",
            category: "home",
            description:
                "Series of pendant and wall lights crafted from carbon fiber with gold interior for warm light reflection.",
            image: "/sleek-carbon-pendants.png",
            client: "Luxury Lighting Retailer",
            year: "2023",
            benefits: [
                "Ultra-thin profile with maximum structural integrity",
                "Gold interior creates warm, elegant light diffusion",
                "Lightweight design allows for dramatic installations",
                "Available in various sizes and custom configurations",
            ],
        },

        // Custom Projects
        {
            id: "carbon-yacht-elements",
            title: "Superyacht Carbon Fiber Elements",
            category: "custom",
            description:
                "Custom carbon fiber components for 50m superyacht including railings, furniture, and decorative elements.",
            image: "/sleek-carbon-fiber-yacht-details.png",
            client: "Mediterranean Yacht Builder",
            year: "2023",
            featured: true,
            benefits: [
                "Marine-grade carbon fiber with salt water resistance",
                "Significant weight reduction for improved vessel performance",
                "Custom designs that integrate with yacht aesthetic",
                "UV-resistant finishes for long-term durability",
            ],
        },
        {
            id: "carbon-musical-instrument",
            title: "Carbon Fiber Concert Piano",
            category: "custom",
            description: "Revolutionary concert grand piano with carbon fiber soundboard and structural elements.",
            image: "/sleek-carbon-fiber-grand.png",
            client: "International Concert Hall",
            year: "2022",
            benefits: [
                "Revolutionary acoustic properties with consistent performance",
                "Significantly lighter than traditional pianos",
                "Temperature and humidity resistant for stable tuning",
                "Modern aesthetic with traditional playing experience",
            ],
        },
        {
            id: "carbon-sculpture",
            title: "Abstract Carbon Fiber Sculpture",
            category: "custom",
            description:
                "6-meter tall abstract sculpture for corporate headquarters made entirely of carbon fiber with internal lighting.",
            image: "/soaring-carbon-fiber.png",
            client: "Fortune 500 Technology Company",
            year: "2023",
            featured: true,
            benefits: [
                "Monumental scale with minimal structural support required",
                "Integrated lighting system with programmable displays",
                "Weather-resistant for indoor or outdoor installation",
                "Custom design based on corporate brand elements",
            ],
        },
        {
            id: "carbon-luggage",
            title: "Bespoke Carbon Fiber Luggage Set",
            category: "custom",
            description: "Custom luggage collection crafted from carbon fiber with leather accents and personalized details.",
            image: "/sleek-carbon-travel.png",
            client: "Luxury Travel Brand",
            year: "2022",
            benefits: [
                "Ultra-lightweight construction reduces travel fatigue",
                "Superior impact resistance protects contents",
                "Premium leather accents and custom hardware",
                "Personalized details including monograms and custom colors",
            ],
        },
        {
            id: "carbon-bicycle",
            title: "Competition Carbon Fiber Bicycle",
            category: "custom",
            description: "Ultra-lightweight competition bicycle with custom carbon fiber frame, wheels, and components.",
            image: "/sleek-carbon-fiber-bike.png",
            client: "Professional Cycling Team",
            year: "2023",
            benefits: [
                "Frame weight under 700g with exceptional stiffness",
                "Wind-tunnel tested aerodynamic design",
                "Custom layup schedule tailored to rider specifications",
                "Proprietary manufacturing process for maximum strength",
            ],
        },
    ]

    // Generate floating particles for the dynamic background
    const renderFloatingParticles = () => {
        const particles = []
        for (let i = 0; i < 20; i++) {
            const left = `${Math.random() * 100}%`
            const top = `${Math.random() * 100}%`
            const delay = `${Math.random() * 15}s`

            particles.push(
                <div
                    key={i}
                    className={styles.floatingParticle}
                    style={{
                        left,
                        top,
                        animationDelay: delay,
                    }}
                />,
            )
        }
        return particles
    }

    // Generate neon lines for 3D effect
    const renderNeonLines = () => {
        const lines = []
        for (let i = 0; i < 5; i++) {
            const top = `${20 + i * 20}%`
            const width = `${70 + Math.random() * 30}%`
            const left = `${Math.random() * 20}%`
            const delay = `${i * 0.5}s`

            lines.push(
                <div
                    key={i}
                    className={styles.neonLine}
                    style={{
                        top,
                        width,
                        left,
                        animationDelay: delay,
                    }}
                />,
            )
        }
        return lines
    }

    // Generate glowing dots for 3D effect
    const renderGlowingDots = () => {
        const dots = []
        for (let i = 0; i < 30; i++) {
            const top = `${Math.random() * 100}%`
            const left = `${Math.random() * 100}%`

            dots.push(
                <div
                    key={i}
                    className={styles.glowingDot}
                    style={{
                        top,
                        left,
                    }}
                />,
            )
        }
        return dots
    }

    return (
        <div className="min-h-screen">
            <div className={`relative ${styles.mainContentBackground}`}>
                <div className={styles.mainContent3dEffect}></div>
                <div className={styles.hexagonGrid}></div>
                {renderNeonLines()}
                {renderGlowingDots()}

                <div className="container mx-auto px-4 py-16 relative z-10">
                    <div className={`flex flex-col lg:flex-row gap-8 ${styles.contentWrapper} p-8`}>
                        {/* Main Content */}
                        <div className="lg:w-4/4">
                            {/* Category Header */}
                            <div className={`mb-10 ${styles.categoryHeader}`}>
                                <div className={styles.blueAccent}></div>
                                <div className="relative z-10">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-1 bg-gradient-to-r from-gold to-amber-400 mr-4 rounded-full"></div>
                                        <h2 className="text-3xl font-bold text-white">
                                            {activeCategory === "all"
                                                ? "All Carbon Fiber Services"
                                                : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Carbon Fiber Solutions`}
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            {/* Category Description Cards */}
                            {activeCategory !== "all" && (
                                <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 mb-10 border border-gray-800 shadow-lg relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 to-[#007AFF]/10 opacity-50"></div>
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold mb-4 text-white">
                                            {activeCategory === "automotive" && "Automotive Excellence"}
                                            {activeCategory === "home" && "Home Luxury Elements"}
                                            {activeCategory === "custom" && "Custom Carbon Solutions"}
                                        </h3>
                                        <p className="text-gray-300 mb-6">
                                            {activeCategory === "automotive" &&
                                                "Our automotive carbon fiber solutions combine lightweight performance with stunning aesthetics. Each component is engineered for perfect fitment and maximum performance gain."}
                                            {activeCategory === "home" &&
                                                "Transform your living space with our distinctive carbon fiber home elements. Each piece combines modern design with the unique properties of carbon fiber for a truly luxurious experience."}
                                            {activeCategory === "custom" &&
                                                "From concept to creation, our custom carbon fiber solutions are tailored to your exact specifications. We specialize in bringing unique visions to life with our advanced manufacturing capabilities."}
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="flex items-start bg-black/40 p-3 rounded-lg border border-gray-800">
                                                <div className="bg-gradient-to-br from-gold/30 to-amber-500/30 p-2 rounded-md mr-3">
                                                    <Check className="h-5 w-5 text-gold" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-white">Premium Materials</h4>
                                                    <p className="text-sm text-gray-400">Only the highest quality carbon fiber and resins</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start bg-black/40 p-3 rounded-lg border border-gray-800">
                                                <div className="bg-gradient-to-br from-gold/30 to-amber-500/30 p-2 rounded-md mr-3">
                                                    <Check className="h-5 w-5 text-gold" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-white">Expert Craftsmanship</h4>
                                                    <p className="text-sm text-gray-400">Skilled technicians with years of experience</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start bg-black/40 p-3 rounded-lg border border-gray-800">
                                                <div className="bg-gradient-to-br from-[#007AFF]/30 to-[#00C6FF]/30 p-2 rounded-md mr-3">
                                                    <Check className="h-5 w-5 text-[#007AFF]" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-white">Custom Design</h4>
                                                    <p className="text-sm text-gray-400">Tailored solutions to meet your specific needs</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start bg-black/40 p-3 rounded-lg border border-gray-800">
                                                <div className="bg-gradient-to-br from-[#007AFF]/30 to-[#00C6FF]/30 p-2 rounded-md mr-3">
                                                    <Check className="h-5 w-5 text-[#007AFF]" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-white">Quality Guarantee</h4>
                                                    <p className="text-sm text-gray-400">Comprehensive warranty on all our work</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Projects Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {projects.map((project, index) => (
                                    <ProjectCard key={project.id} project={project} index={index} lang={lang} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Project Card Component
interface ProjectCardProps {
    project: Project
    index: number
    lang: string
}

function ProjectCard({ project, index, lang }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group h-full ${styles.card3dEffect}`}
        >
            <div className={styles.cardContainer}>
                <Link href={`/${lang}/products/${project.id}`} className="block relative overflow-hidden">
                    <div className={styles.cardImageContainer}>
                        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className={styles.cardImage} />
                        <div className={styles.cardImageOverlay}></div>
                        <div className={styles.cardGoldLine}></div>

                        {/* Category badge */}
                        <div className="absolute top-3 left-3 z-10">
              <span className={styles.categoryBadge}>
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </span>
                        </div>

                        {/* Featured badge */}
                        {project.featured && (
                            <div className="absolute top-3 right-3 z-10">
                                <span className={styles.featuredBadge}>Featured</span>
                            </div>
                        )}
                    </div>
                </Link>

                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>
                        <Link
                            href={`/${lang}/products/${project.id}`}
                            className="hover:underline decoration-gold/30 underline-offset-4"
                        >
                            {project.title}
                        </Link>
                    </h3>

                    <p className={styles.cardDescription}>{project.description}</p>

                    {project.benefits && (
                        <div className={styles.benefitsContainer}>
                            <h4 className={styles.benefitsTitle}>Key Benefits</h4>
                            <ul className="space-y-2">
                                {project.benefits.slice(0, 2).map((benefit, i) => (
                                    <li key={i} className={styles.benefitItem}>
                                        <Check className="h-3.5 w-3.5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                                        <span className={styles.benefitText}>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className={styles.cardFooter}>
                        <div className={styles.clientInfo}>
                            {project.client && <div className={styles.clientName}>{project.client}</div>}
                            {project.year && <div>{project.year}</div>}
                        </div>
                        <Link href={`/${lang}/products/${project.id}`}>
                            <div className={styles.viewDetailsButton}>
                                <span className="text-xs font-medium">View Details</span>
                                <ExternalLink className={styles.viewDetailsIcon} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
