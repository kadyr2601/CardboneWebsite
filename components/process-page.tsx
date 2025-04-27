"use client"
import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Play, ArrowDownCircle, Zap, Shield, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Dictionary } from "@/lib/i18n/dictionaries"
import styles from "@/styles/process-page.module.css"

interface ProcessPageProps {
    dictionary: Dictionary
    lang: string
}

const processSteps = [
    {
        id: 1,
        title: "Design & Engineering",
        description:
            "Our engineers work with clients to design carbon fiber components that meet specific performance requirements.",
        icon: "/carbon-design-icon.png",
        duration: "1-2 weeks",
    },
    {
        id: 2,
        title: "Material Selection",
        description:
            "We select the optimal carbon fiber weave, resin system, and core materials based on the application requirements.",
        icon: "/carbon-material-icon.png",
        duration: "3-5 days",
    },
    {
        id: 3,
        title: "Pattern & Mold Creation",
        description: "High-precision molds are created using advanced CNC machining to ensure perfect component geometry.",
        icon: "/carbon-mold-icon.png",
        duration: "1-3 weeks",
    },
    {
        id: 4,
        title: "Carbon Fiber Layup",
        description:
            "Our skilled technicians precisely layer carbon fiber sheets according to the engineered design specifications.",
        icon: "/carbon-layup-icon.png",
        duration: "2-7 days",
    },
    {
        id: 5,
        title: "Vacuum & Compression",
        description:
            "Components undergo vacuum bagging and compression to remove air and ensure proper resin distribution.",
        icon: "/carbon-vacuum-icon.png",
        duration: "1-2 days",
    },
    {
        id: 6,
        title: "Autoclave Curing",
        description: "Parts are cured in our state-of-the-art autoclave under precise temperature and pressure conditions.",
        icon: "/carbon-curing-icon.png",
        duration: "8-24 hours",
    },
    {
        id: 7,
        title: "Finishing & Quality Control",
        description: "Each component undergoes precision trimming, polishing, and rigorous quality inspection.",
        icon: "/carbon-finishing-icon.png",
        duration: "2-5 days",
    },
    {
        id: 8,
        title: "Final Assembly & Delivery",
        description: "Components are assembled, packaged, and delivered with comprehensive documentation and support.",
        icon: "/carbon-delivery-icon.png",
        duration: "1-3 days",
    },
]

const beforeAfterProjects = [
    {
        id: "automotive",
        title: "Automotive Components",
        description: "Transforming standard automotive parts into lightweight, high-performance carbon fiber components.",
        beforeImage: "/before-automotive.png",
        afterImage: "/after-automotive.png",
        stats: [
            { label: "Weight Reduction", value: "65%", icon: <Zap className="h-5 w-5 text-gold" /> },
            { label: "Strength Increase", value: "40%", icon: <Shield className="h-5 w-5 text-gold" /> },
            { label: "Lifespan", value: "2x", icon: <Clock className="h-5 w-5 text-gold" /> },
        ],
    },
    {
        id: "marine",
        title: "Marine Applications",
        description:
            "Converting traditional marine components to corrosion-resistant, lightweight carbon fiber alternatives.",
        beforeImage: "/before-marine.png",
        afterImage: "/after-marine.png",
        stats: [
            { label: "Weight Reduction", value: "70%", icon: <Zap className="h-5 w-5 text-gold" /> },
            { label: "Corrosion Resistance", value: "100%", icon: <Shield className="h-5 w-5 text-gold" /> },
            { label: "Maintenance", value: "-80%", icon: <Clock className="h-5 w-5 text-gold" /> },
        ],
    },
    {
        id: "interior",
        title: "Interior Elements",
        description:
            "Elevating interior design with premium carbon fiber elements that combine aesthetics and functionality.",
        beforeImage: "/before-interior.png",
        afterImage: "/after-interior.png",
        stats: [
            { label: "Visual Appeal", value: "+90%", icon: <Sparkles className="h-5 w-5 text-gold" /> },
            { label: "Durability", value: "3x", icon: <Shield className="h-5 w-5 text-gold" /> },
            { label: "Value Increase", value: "+35%", icon: <ArrowRight className="h-5 w-5 text-gold" /> },
        ],
    },
]

const carbonProperties = [
    {
        title: "Exceptional Strength-to-Weight Ratio",
        description:
            "Carbon fiber offers 5x the strength of steel at just 1/5 the weight, enabling dramatic performance improvements.",
        icon: <Zap className="h-6 w-6 text-gold" />,
    },
    {
        title: "Superior Stiffness & Rigidity",
        description:
            "Our carbon fiber components provide exceptional stiffness, enhancing performance and precision in all applications.",
        icon: <Shield className="h-6 w-6 text-gold" />,
    },
    {
        title: "Corrosion & Fatigue Resistance",
        description:
            "Unlike metals, carbon fiber doesn't corrode and exhibits superior fatigue resistance for longer component life.",
        icon: <Clock className="h-6 w-6 text-gold" />,
    },
    {
        title: "Thermal Stability",
        description:
            "Carbon fiber maintains its properties across a wide temperature range, from -50°C to +180°C in standard applications.",
        icon: <Sparkles className="h-6 w-6 text-gold" />,
    },
]

export default function ProcessPage({ dictionary, lang }: ProcessPageProps) {
    const { process } = dictionary
    const heroRef = useRef(null)
    const timelineRef = useRef(null)
    const beforeAfterRef = useRef(null)
    const propertiesRef = useRef(null)

    const isHeroInView = useInView(heroRef, { once: true })
    const isTimelineInView = useInView(timelineRef, { once: true })
    const isBeforeAfterInView = useInView(beforeAfterRef, { once: true })
    const isPropertiesInView = useInView(propertiesRef, { once: true })

    const [activeStep, setActiveStep] = useState(1)
    const [selectedTab, setSelectedTab] = useState("automotive")

    return (
        <div className="min-h-screen bg-carbon text-white">
            {/* Hero Section */}
            <section ref={heroRef} className="py-20 bg-carbon text-white relative overflow-hidden">
                <div className="absolute inset-0 carbon-texture opacity-20"></div>
                <div className={`absolute inset-0 ${styles.heroPattern}`}></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">
                            <span className="text-gold">Carbon Mastery</span> Process
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Discover our meticulous approach to carbon fiber manufacturing, combining cutting-edge technology with
                            traditional craftsmanship to create components of exceptional quality.
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-8"
                        >
                            <Button
                                className="bg-gold hover:bg-gold/90 text-carbon border-none group"
                                onClick={() => document.getElementById("process-timeline")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Explore Our Process
                                <ArrowDownCircle className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[500px] md:h-[600px] rounded-xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/carbon-manufacturing-process.png"
                            alt="CarbonX Manufacturing Process"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <Button
                                variant="outline"
                                className="bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 group"
                            >
                                Watch Process Video
                                <Play className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Process Timeline Section */}
            <section id="process-timeline" ref={timelineRef} className="py-20 bg-carbon-dark relative overflow-hidden">
                <div className="absolute inset-0 carbon-texture opacity-10"></div>
                <div className={`absolute inset-0 ${styles.timelinePattern}`}></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">Manufacturing Excellence</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Our 8-step process ensures the highest quality carbon fiber components, from initial design to final
                            delivery.
                        </p>
                    </motion.div>

                    <div className="hidden lg:block">
                        <div className={styles.timelineContainer}>
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className={`${styles.timelineStep} ${activeStep === step.id ? styles.activeStep : ""}`}
                                    onClick={() => setActiveStep(step.id)}
                                >
                                    <div className={styles.timelineIcon}>
                                        <div className={styles.iconCircle}>
                                            <span>{step.id}</span>
                                        </div>
                                    </div>
                                    <div className={styles.timelineContent}>
                                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                                        <p className="text-gray-300 mt-2">{step.description}</p>
                                        <div className="mt-3 text-sm text-gold flex items-center">
                                            <Clock className="h-4 w-4 mr-1" />
                                            <span>{step.duration}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:hidden">
                        <div className="space-y-8">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                                >
                                    <div className="flex items-center mb-3">
                                        <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-carbon font-bold mr-3">
                                            {step.id}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                                    </div>
                                    <p className="text-gray-300">{step.description}</p>
                                    <div className="mt-3 text-sm text-gold flex items-center">
                                        <Clock className="h-4 w-4 mr-1" />
                                        <span>{step.duration}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Before & After Section */}
            <section ref={beforeAfterRef} className="py-20 bg-carbon relative overflow-hidden">
                <div className="absolute inset-0 carbon-texture opacity-20"></div>
                <div className={`absolute inset-0 ${styles.beforeAfterPattern}`}></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isBeforeAfterInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">Transformation Showcase</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Witness the dramatic before and after transformations achieved through our carbon fiber expertise.
                        </p>
                    </motion.div>

                    <Tabs defaultValue="automotive" value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-white/10">
                            <TabsTrigger value="automotive" className="data-[state=active]:bg-gold data-[state=active]:text-carbon">
                                Automotive
                            </TabsTrigger>
                            <TabsTrigger value="marine" className="data-[state=active]:bg-gold data-[state=active]:text-carbon">
                                Marine
                            </TabsTrigger>
                            <TabsTrigger value="interior" className="data-[state=active]:bg-gold data-[state=active]:text-carbon">
                                Interior
                            </TabsTrigger>
                        </TabsList>

                        {beforeAfterProjects.map((project) => (
                            <TabsContent key={project.id} value={project.id} className="mt-0">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                        <div>
                                            <h3 className="text-3xl font-bold mb-4 text-white">{project.title}</h3>
                                            <p className="text-gray-300 mb-6">{project.description}</p>

                                            <div className="grid grid-cols-3 gap-4 mb-8">
                                                {project.stats.map((stat, index) => (
                                                    <div
                                                        key={index}
                                                        className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                                                    >
                                                        <div className="flex justify-center mb-2">{stat.icon}</div>
                                                        <div className="text-center">
                                                            <div className="text-2xl font-bold text-gold">{stat.value}</div>
                                                            <div className="text-xs text-gray-400">{stat.label}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <Button className="bg-gold hover:bg-gold/90 text-carbon border-none group">
                                                View Case Study
                                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                            </Button>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="relative h-[300px] rounded-xl overflow-hidden border border-white/10">
                                                <Image
                                                    src={project.beforeImage || "/placeholder.svg"}
                                                    alt={`Before - ${project.title}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 to-transparent"></div>
                                                <div className="absolute bottom-4 left-4 bg-carbon/80 text-white text-sm font-bold px-3 py-1 rounded">
                                                    BEFORE
                                                </div>
                                            </div>
                                            <div className="relative h-[300px] rounded-xl overflow-hidden border border-white/10">
                                                <Image
                                                    src={project.afterImage || "/placeholder.svg"}
                                                    alt={`After - ${project.title}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 to-transparent"></div>
                                                <div className="absolute bottom-4 left-4 bg-gold/80 text-carbon text-sm font-bold px-3 py-1 rounded">
                                                    AFTER
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>

            {/* Carbon Properties Section */}
            <section ref={propertiesRef} className="py-20 bg-carbon-dark relative overflow-hidden">
                <div className="absolute inset-0 carbon-texture opacity-10"></div>
                <div className={`absolute inset-0 ${styles.propertiesPattern}`}></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isPropertiesInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">Carbon Fiber Properties</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Understanding the exceptional characteristics that make carbon fiber the material of choice for
                            performance applications.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isPropertiesInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
                        >
                            <div className="grid grid-cols-1 gap-6">
                                {carbonProperties.map((property, index) => (
                                    <div key={index} className="flex">
                                        <div className="mr-4 mt-1">{property.icon}</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{property.title}</h3>
                                            <p className="text-gray-300 mt-1">{property.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8">
                                <Button className="bg-gold hover:bg-gold/90 text-carbon border-none group">
                                    Download Technical Specifications
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isPropertiesInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="relative h-[500px] rounded-xl overflow-hidden shadow-xl"
                        >
                            <Image
                                src="/carbon-fiber-properties-diagram.png"
                                alt="Carbon Fiber Properties Diagram"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                    <h4 className="text-lg font-bold text-white mb-2">Material Comparison</h4>
                                    <div className="grid grid-cols-4 gap-2 text-center text-sm">
                                        <div className="text-gray-400">Material</div>
                                        <div className="text-gray-400">Strength</div>
                                        <div className="text-gray-400">Weight</div>
                                        <div className="text-gray-400">Stiffness</div>

                                        <div className="text-white">Carbon Fiber</div>
                                        <div className="text-gold">100%</div>
                                        <div className="text-gold">20%</div>
                                        <div className="text-gold">100%</div>

                                        <div className="text-white">Aluminum</div>
                                        <div className="text-gray-300">40%</div>
                                        <div className="text-gray-300">60%</div>
                                        <div className="text-gray-300">30%</div>

                                        <div className="text-white">Steel</div>
                                        <div className="text-gray-300">70%</div>
                                        <div className="text-gray-300">100%</div>
                                        <div className="text-gray-300">70%</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}
