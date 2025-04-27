"use client"

import type React from "react"

import {useState, useRef} from "react"
import Image from "next/image"
import Link from "next/link"
import {motion, AnimatePresence, useScroll, useTransform} from "framer-motion"
import {
    ArrowLeft,
    ChevronRight,
    ChevronLeft,
    Star,
    Check,
    Maximize2,
    X,
    Thermometer,
    Zap,
    Shield,
    Layers,
    Play,
    Info,
} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import type {Dictionary} from "@/lib/i18n/dictionaries"

interface ProductDetailPageProps {
    dictionary: Dictionary
    lang: string
    productId: string
}

// This would typically come from a database or API
const getProductById = (id: string) => {
    // Sample product data - in a real app, this would be fetched from an API
    const products = [
        {
            id: "perf-panel-1",
            name: "Carbon Fiber Hood Panel",
            category: "automotive",
            description:
                "Ultra-lightweight carbon fiber hood panel that reduces weight by up to 70% compared to steel alternatives.",
            longDescription:
                "Our premium Carbon Fiber Hood Panel is engineered for maximum performance and aesthetic appeal. Crafted from aerospace-grade carbon fiber, this hood panel offers exceptional strength while reducing weight by up to 70% compared to traditional steel alternatives. The reduction in weight improves vehicle handling, acceleration, and fuel efficiency.\n\nEach panel is hand-finished to ensure perfect fitment and a flawless appearance. Available in both gloss and matte finishes, with options for exposed carbon weave or painted to match your vehicle's color scheme.",
            specs: [
                "Weight: 2.3kg (70% lighter than steel equivalent)",
                "Thickness: 1.5mm with reinforced structure",
                "Finish: High-gloss clear coat with UV protection",
                "Fitment: Vehicle-specific design for perfect installation",
                "Material: 3K 2x2 twill carbon fiber with epoxy resin",
                "Installation: Direct bolt-on replacement using factory mounting points",
                "Warranty: 2-year limited warranty against manufacturing defects",
            ],
            features: [
                "Aerospace-grade carbon fiber construction",
                "Precision-engineered for perfect fitment",
                "UV-resistant clear coat to prevent yellowing",
                "Improved vehicle performance through weight reduction",
                "Enhanced cooling with optional heat extraction vents",
                "Available in multiple weave patterns and finishes",
            ],
            compatibility: [
                "BMW M3/M4 (G80/G82) 2021+",
                "Audi RS6/RS7 (C8) 2020+",
                "Porsche 911 (992) 2019+",
                "Mercedes-AMG C63 (W205) 2015-2021",
                "Tesla Model 3 2017+",
            ],
            images: [
                "/carbon-fiber-hood.png",
                "/carbon-fiber-hood-dramatic.png",
                "/carbon-fiber-hood-lighting.png",
                "/carbon-fiber-luxury.png",
            ],
            rating: 4.8,
            reviewCount: 24,
            featured: true,
            benefits: [
                {
                    title: "Weight Reduction",
                    description: "70% lighter than steel, improving performance and fuel efficiency",
                    icon: "Zap",
                },
                {
                    title: "Increased Strength",
                    description: "5x stronger than steel with superior impact resistance",
                    icon: "Shield",
                },
                {
                    title: "Enhanced Aesthetics",
                    description: "Premium carbon weave pattern with customizable finishes",
                    icon: "Layers",
                },
                {
                    title: "Improved Cooling",
                    description: "Better heat dissipation for optimal engine temperature",
                    icon: "Thermometer",
                },
            ],
            technicalSpecs: {
                material: "3K 2x2 twill carbon fiber",
                weavePattern: "2x2 Twill",
                fiberType: "Toray T300",
                resinSystem: "Epoxy",
                fiberContent: "60% by volume",
                tensileStrength: "3500 MPa",
                compressiveStrength: "1200 MPa",
                heatResistance: "Up to 180°C",
                uvResistance: "High (with clear coat)",
                chemicalResistance: "Excellent",
            },
            videos: [
                {
                    title: "Installation Guide",
                    thumbnail: "/carbon-fiber-hood-install-thumbnail.png",
                    url: "#",
                },
                {
                    title: "Performance Test",
                    thumbnail: "/carbon-fiber-hood-test.png",
                    url: "#",
                },
            ],
            reviews: [
                {
                    id: 1,
                    author: "Michael T.",
                    rating: 5,
                    date: "2 weeks ago",
                    title: "Exceptional quality and craftsmanship",
                    content:
                        "The attention to detail is remarkable. This product exceeded my expectations in every way. The carbon fiber finish is flawless and the product feels incredibly premium. Installation was straightforward with the provided hardware.",
                    verified: true,
                    helpful: 12,
                },
                {
                    id: 2,
                    author: "Sarah K.",
                    rating: 4,
                    date: "1 month ago",
                    title: "Great product, minor fitment issues",
                    content:
                        "The quality is outstanding and it looks amazing. Had some minor fitment issues but customer service was very helpful in resolving them. Would buy again but be prepared to make small adjustments during installation.",
                    verified: true,
                    helpful: 8,
                },
                {
                    id: 3,
                    author: "James R.",
                    rating: 5,
                    date: "3 months ago",
                    title: "Worth every penny",
                    content:
                        "Transformed the look of my car completely. The weight savings are noticeable in handling and acceleration. Installation took about 2 hours with basic tools. The finish is perfect and matches the factory paint perfectly.",
                    verified: true,
                    helpful: 15,
                },
            ],
            performanceData: {
                weightReduction: "70%",
                dragCoefficient: "Reduced by 0.02",
                accelerationImprovement: "0.2 seconds (0-60 mph)",
                fuelEfficiencyGain: "Up to 3%",
                heatDissipation: "Improved by 15%",
            },
        },
        // Other products would be here
    ]

    return products.find((p) => p.id === id) || products[0] // Default to first product if not found
}

// Get related products based on category
const getRelatedProducts = (currentProductId: string, category: string) => {
    // This would typically come from a database or API
    const allProducts = [
        {
            id: "perf-panel-2",
            name: "Carbon Fiber Roof Panel",
            category: "automotive",
            description: "Lightweight carbon fiber roof panel that enhances vehicle aesthetics and performance.",
            image: "/carbon-fiber-panel.png",
            rating: 4.7,
        },
        {
            id: "perf-panel-3",
            name: "Carbon Fiber Spoiler",
            category: "automotive",
            description: "High-performance carbon fiber spoiler with aerodynamic design for improved downforce.",
            image: "/carbon-fiber-spoiler.png",
            rating: 4.9,
        },
        {
            id: "perf-panel-4",
            name: "Carbon Fiber Mirror Caps",
            category: "automotive",
            description: "Sleek carbon fiber mirror caps that add a touch of motorsport styling to your vehicle.",
            image: "/carbon-fiber-mirror-caps.png",
            rating: 4.8,
        },
    ]

    // Filter products by category and exclude current product
    return allProducts.filter((product) => product.category === category && product.id !== currentProductId).slice(0, 3) // Return only 3 related products
}

export default function ProductDetailPage({dictionary, lang, productId}: ProductDetailPageProps) {
    const product = getProductById(productId)
    const [mainImage, setMainImage] = useState(product.images[0])
    const [activeImageIndex, setActiveImageIndex] = useState(0)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [activeSection, setActiveSection] = useState("overview")
    const [expandedReviews, setExpandedReviews] = useState<number[]>([])
    const relatedProducts = getRelatedProducts(productId, product.category)
    const galleryRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start", "end start"],
    })

    // Parallax effects
    const imageY = useTransform(scrollYProgress, [0, 1], [0, -100])
    const textY = useTransform(scrollYProgress, [0, 1], [0, -50])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

    // Toggle review expansion
    const toggleReviewExpansion = (reviewId: number) => {
        if (expandedReviews.includes(reviewId)) {
            setExpandedReviews(expandedReviews.filter((id) => id !== reviewId))
        } else {
            setExpandedReviews([...expandedReviews, reviewId])
        }
    }

    // Next image in gallery
    const nextImage = () => {
        const newIndex = (activeImageIndex + 1) % product.images.length
        setActiveImageIndex(newIndex)
        setMainImage(product.images[newIndex])
    }

    // Previous image in gallery
    const prevImage = () => {
        const newIndex = (activeImageIndex - 1 + product.images.length) % product.images.length
        setActiveImageIndex(newIndex)
        setMainImage(product.images[newIndex])
    }

    // Handle fullscreen toggle
    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen)
    }

    // Get icon component by name
    const getIconByName = (iconName: string) => {
        const icons: Record<string, React.ReactNode> = {
            Zap: <Zap className="h-5 w-5"/>,
            Shield: <Shield className="h-5 w-5"/>,
            Layers: <Layers className="h-5 w-5"/>,
            Thermometer: <Thermometer className="h-5 w-5"/>,
        }

        return icons[iconName] || <Info className="h-5 w-5"/>
    }

    return (
        <div className="min-h-screen bg-white" ref={containerRef}>
            {/* Back Navigation */}
            <div className="fixed top-32 left-12 z-50">
                <Link
                    href={`/${lang}/products`}
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                >
                    <ArrowLeft className="h-5 w-5 text-gray-800"/>
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black overflow-hidden">
                    {/* Carbon fiber texture */}
                    <div className="absolute inset-0 bg-[url('/carbon-fiber-background-pattern.png')] opacity-20"></div>

                    {/* Animated lines */}
                    <div className="absolute inset-0">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
                                style={{
                                    width: `${Math.random() * 30 + 20}%`,
                                    left: `${Math.random() * 70}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    opacity: [0.2, 0.5, 0.2],
                                    x: [0, 30, 0],
                                }}
                                transition={{
                                    duration: Math.random() * 5 + 5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Product Image */}
                        <motion.div
                            className="relative"
                            style={{y: imageY}}
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8}}
                        >
                            <div className="relative aspect-square max-w-lg mx-auto">
                                <Image
                                    src={mainImage || "/placeholder.svg"}
                                    alt={product.name}
                                    fill
                                    className="object-cover rounded-2xl"
                                />

                                {/* Floating badge */}
                                {product.featured && (
                                    <div className="absolute -top-4 -right-4 z-10">
                                        <motion.div
                                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg"
                                            animate={{y: [0, -5, 0]}}
                                            transition={{duration: 2, repeat: Number.POSITIVE_INFINITY}}
                                        >
                                            Featured
                                        </motion.div>
                                    </div>
                                )}

                                {/* Fullscreen button */}
                                <button
                                    className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2 hover:bg-white/30 transition-colors"
                                    onClick={toggleFullscreen}
                                >
                                    <Maximize2 className="h-5 w-5 text-white"/>
                                </button>
                            </div>

                            {/* Thumbnails */}
                            <div className="flex justify-center mt-6 space-x-3" ref={galleryRef}>
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all ${
                                            activeImageIndex === index
                                                ? "ring-2 ring-blue-500 scale-110"
                                                : "ring-1 ring-gray-300 opacity-70 hover:opacity-100"
                                        }`}
                                        onClick={() => {
                                            setMainImage(image)
                                            setActiveImageIndex(index)
                                        }}
                                    >
                                        <Image
                                            src={image || "/placeholder.svg"}
                                            alt={`${product.name} view ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Product Info */}
                        <motion.div
                            className="text-white"
                            style={{y: textY, opacity}}
                            initial={{opacity: 0, x: 50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8, delay: 0.2}}
                        >
                            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white">
                                {product.name}
                            </h1>

                            <div className="flex items-center mb-6">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-5 w-5 ${
                                                i < Math.floor(product.rating)
                                                    ? "text-yellow-400 fill-yellow-400"
                                                    : i < product.rating
                                                        ? "text-yellow-400 fill-yellow-400 opacity-50"
                                                        : "text-gray-600"
                                            }`}
                                        />
                                    ))}
                                </div>
                                <span className="ml-2 text-gray-300">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
                            </div>

                            <p className="text-gray-300 mb-8 text-lg leading-relaxed">{product.description}</p>

                            <div className="flex flex-wrap gap-3 mb-8">
                                {product.compatibility.slice(0, 3).map((item, index) => (
                                    <Badge key={index}
                                           className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border-none">
                                        {item}
                                    </Badge>
                                ))}
                                {product.compatibility.length > 3 && (
                                    <Badge
                                        className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border-none">
                                        +{product.compatibility.length - 3} more
                                    </Badge>
                                )}
                            </div>

                            <motion.div
                                className="mt-8"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.6}}
                            >
                                <div className="flex items-center">
                                    <div
                                        className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                                        <ChevronRight className="h-6 w-6 text-white"/>
                                    </div>
                                    <p className="text-white text-lg">Scroll down to explore</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content with Sidebar */}
            <section className="relative bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Sidebar */}
                        <div className="lg:col-span-3">
                            <div className="sticky top-8">
                                <h3 className="text-xl font-bold mb-6 text-gray-900">Product Details</h3>
                                <nav className="space-y-1">
                                    {[
                                        {id: "overview", label: "Overview"},
                                        {id: "benefits", label: "Key Benefits"},
                                        {id: "specs", label: "Specifications"},
                                        {id: "reviews", label: "Reviews"},
                                    ].map((item) => (
                                        <button
                                            key={item.id}
                                            className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${
                                                activeSection === item.id
                                                    ? "bg-blue-50 text-blue-600 font-medium"
                                                    : "text-gray-600 hover:bg-gray-50"
                                            }`}
                                            onClick={() => setActiveSection(item.id)}
                                        >
                                            <span>{item.label}</span>
                                            {activeSection === item.id && <ChevronRight className="h-4 w-4 ml-auto"/>}
                                        </button>
                                    ))}
                                </nav>

                                <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
                                    <h4 className="font-medium text-gray-900 mb-4">Need Help?</h4>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Our product specialists are available to answer any questions about this
                                        product.
                                    </p>
                                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">Contact
                                        Support</Button>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-9">
                            {/* Overview Section */}
                            {activeSection === "overview" && (
                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: -20}}
                                    transition={{duration: 0.3}}
                                >
                                    <h2 className="text-3xl font-bold mb-8 text-gray-900">Product Overview</h2>

                                    <div className="prose max-w-none mb-12">
                                        <p className="text-gray-700 text-lg leading-relaxed">{product.longDescription}</p>
                                    </div>

                                    {/* Feature Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                        {product.features.map((feature, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex items-start p-5 rounded-xl bg-gray-50 border border-gray-100"
                                                initial={{opacity: 0, y: 20}}
                                                animate={{opacity: 1, y: 0}}
                                                transition={{delay: index * 0.1}}
                                            >
                                                <div
                                                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mr-4">
                                                    <Check className="h-5 w-5"/>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">{feature}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Videos if available */}
                                    {product.videos && product.videos.length > 0 && (
                                        <div className="mb-12">
                                            <h3 className="text-2xl font-bold mb-6 text-gray-900">Product Videos</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {product.videos.map((video, index) => (
                                                    <div key={index}
                                                         className="relative rounded-xl overflow-hidden group">
                                                        <div className="aspect-video relative">
                                                            <Image
                                                                src={video.thumbnail || "/placeholder.svg"}
                                                                alt={video.title}
                                                                fill
                                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                            />
                                                            <div
                                                                className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-all">
                                                                <div
                                                                    className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                                                    <Play className="h-8 w-8 text-white fill-white"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="p-4 bg-white border border-gray-100 rounded-b-xl">
                                                            <h4 className="font-medium text-gray-900">{video.title}</h4>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            )}

                            {/* Benefits Section */}
                            {activeSection === "benefits" && (
                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: -20}}
                                    transition={{duration: 0.3}}
                                >
                                    <h2 className="text-3xl font-bold mb-8 text-gray-900">Key Benefits</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                        {product.benefits.map((benefit, index) => (
                                            <motion.div
                                                key={index}
                                                className="relative overflow-hidden rounded-xl"
                                                initial={{opacity: 0, y: 20}}
                                                animate={{opacity: 1, y: 0}}
                                                transition={{delay: index * 0.1}}
                                            >
                                                <div
                                                    className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl transform -rotate-1"></div>
                                                <div
                                                    className="relative p-6 bg-white rounded-xl border border-gray-100 shadow-sm z-10">
                                                    <div
                                                        className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-4">
                                                        {getIconByName(benefit.icon)}
                                                    </div>
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                                    <p className="text-gray-600">{benefit.description}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Performance Data */}
                                    {product.performanceData && (
                                        <div className="mt-12">
                                            <h3 className="text-2xl font-bold mb-8 text-gray-900">Performance Data</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                                {Object.entries(product.performanceData).map(([key, value], index) => (
                                                    <motion.div
                                                        key={index}
                                                        className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center"
                                                        initial={{opacity: 0, scale: 0.9}}
                                                        animate={{opacity: 1, scale: 1}}
                                                        transition={{delay: index * 0.1}}
                                                        whileHover={{
                                                            y: -5,
                                                            boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)"
                                                        }}
                                                    >
                                                        <div
                                                            className="text-3xl font-bold text-blue-600 mb-2">{value}</div>
                                                        <p className="text-gray-500">
                                                            {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                                                        </p>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            )}

                            {/* Specifications Section */}
                            {activeSection === "specs" && (
                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: -20}}
                                    transition={{duration: 0.3}}
                                >
                                    <h2 className="text-3xl font-bold mb-8 text-gray-900">Technical Specifications</h2>

                                    {/* Basic Specs */}
                                    <div className="mb-12">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {product.specs.map((spec, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="flex items-start p-4 rounded-xl bg-white border border-gray-100 shadow-sm"
                                                    initial={{opacity: 0, x: index % 2 === 0 ? -20 : 20}}
                                                    animate={{opacity: 1, x: 0}}
                                                    transition={{delay: index * 0.05}}
                                                >
                                                    <Check className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"/>
                                                    <span className="text-gray-700">{spec}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Technical Specs */}
                                    <div>
                                        <h3 className="text-2xl font-bold mb-6 text-gray-900">Detailed
                                            Specifications</h3>
                                        <div
                                            className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                                            {Object.entries(product.technicalSpecs).map(([key, value], index) => (
                                                <div
                                                    key={index}
                                                    className={`flex flex-col sm:flex-row sm:items-center py-4 px-6 ${
                                                        index !== Object.entries(product.technicalSpecs).length - 1
                                                            ? "border-b border-gray-100"
                                                            : ""
                                                    }`}
                                                >
                          <span className="text-sm font-medium text-gray-500 sm:w-1/3 mb-1 sm:mb-0">
                            {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                          </span>
                                                    <span className="text-gray-900 sm:w-2/3">{value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Reviews Section */}
                            {activeSection === "reviews" && (
                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: -20}}
                                    transition={{duration: 0.3}}
                                >
                                    <div className="flex items-center justify-between mb-8">
                                        <h2 className="text-3xl font-bold text-gray-900">Customer Reviews</h2>

                                        <div className="flex items-center">
                                            <div className="flex items-center mr-3">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`h-5 w-5 ${
                                                            i < Math.floor(product.rating)
                                                                ? "text-yellow-400 fill-yellow-400"
                                                                : i < product.rating
                                                                    ? "text-yellow-400 fill-yellow-400 opacity-50"
                                                                    : "text-gray-300"
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-gray-600">
                        {product.rating} ({product.reviewCount} reviews)
                      </span>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {product.reviews.map((review) => (
                                            <motion.div
                                                key={review.id}
                                                className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm"
                                                initial={{opacity: 0, y: 20}}
                                                whileInView={{opacity: 1, y: 0}}
                                                viewport={{once: true}}
                                            >
                                                <div className="p-6">
                                                    <div className="flex justify-between items-start mb-4">
                                                        <div>
                                                            <h4 className="font-bold text-gray-900 text-lg">{review.title}</h4>
                                                            <div className="flex items-center mt-1">
                                                                <div className="flex items-center">
                                                                    {[...Array(5)].map((_, i) => (
                                                                        <Star
                                                                            key={i}
                                                                            className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                                <span
                                                                    className="ml-2 text-sm text-gray-500">{review.date}</span>
                                                            </div>
                                                        </div>
                                                        {review.verified && (
                                                            <Badge
                                                                className="bg-green-100 text-green-800 hover:bg-green-200 border-none">
                                                                Verified Purchase
                                                            </Badge>
                                                        )}
                                                    </div>

                                                    <div>
                                                        <p className={`text-gray-700 ${expandedReviews.includes(review.id) ? "" : "line-clamp-3"}`}>
                                                            {review.content}
                                                        </p>
                                                        {review.content.length > 150 && (
                                                            <button
                                                                className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2"
                                                                onClick={() => toggleReviewExpansion(review.id)}
                                                            >
                                                                {expandedReviews.includes(review.id) ? "Show less" : "Read more"}
                                                            </button>
                                                        )}
                                                    </div>

                                                    <div
                                                        className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                                                        <span
                                                            className="text-sm text-gray-500">By {review.author}</span>
                                                        <div className="flex items-center">
                                                            <span
                                                                className="text-sm text-gray-500 mr-2">{review.helpful} found this helpful</span>
                                                            <Button variant="ghost" size="sm"
                                                                    className="text-gray-600 hover:text-gray-900">
                                                                Helpful
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="mt-8 text-center">
                                        <Button variant="outline"
                                                className="border-gray-300 text-gray-700 hover:bg-gray-50">
                                            View All Reviews
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {isFullscreen && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        onClick={toggleFullscreen}
                    >
                        <motion.div
                            className="relative max-w-5xl max-h-[90vh]"
                            initial={{scale: 0.9}}
                            animate={{scale: 1}}
                            exit={{scale: 0.9}}
                        >
                            <Image
                                src={mainImage || "/placeholder.svg"}
                                alt={product.name}
                                width={1200}
                                height={800}
                                className="object-contain max-h-[90vh]"
                            />
                            <button
                                className="absolute top-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                                onClick={toggleFullscreen}
                            >
                                <X className="h-6 w-6 text-white"/>
                            </button>

                            {/* Navigation controls */}
                            <button
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 rounded-full p-3 hover:bg-white/30 transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    prevImage()
                                }}
                            >
                                <ChevronLeft className="h-6 w-6 text-white"/>
                            </button>
                            <button
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 rounded-full p-3 hover:bg-white/30 transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    nextImage()
                                }}
                            >
                                <ChevronRight className="h-6 w-6 text-white"/>
                            </button>

                            {/* Image counter */}
                            <div
                                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                                {activeImageIndex + 1} / {product.images.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
