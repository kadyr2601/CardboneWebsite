"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import {
    ArrowRight,
    MapPin,
    Phone,
    Mail,
    Clock,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    ExternalLink,
    MessageSquare,
    Send,
    ChevronDown,
    Car,
    Plane,
    Home,
    Briefcase,
} from "lucide-react"
import type { Dictionary } from "@/lib/i18n/dictionaries"
import styles from "@/styles/contact-page.module.css"

interface ContactPageProps {
    dictionary: Dictionary
    lang: string
}

export default function ContactPage({ dictionary, lang }: ContactPageProps) {
    const heroRef = useRef<HTMLDivElement>(null)
    const isHeroInView = useInView(heroRef, { once: true })
    const { scrollYProgress } = useScroll()
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9])

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // In a real application, you would handle form submission here
        console.log("Form submitted:", formData)
        alert("Thank you for your message! We'll get back to you soon.")
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        })
    }

    const scrollToContent = () => {
        const contentElement = document.getElementById("color-showcase")
        if (contentElement) {
            contentElement.scrollIntoView({ behavior: "smooth" })
        }
    }

    // Carbon fiber color options
    const carbonColors = [
        {
            name: "Classic Carbon Black",
            description:
                "The timeless standard in carbon fiber aesthetics, featuring a deep black finish with a subtle metallic sheen.",
            className: styles.colorBlack,
        },
        {
            name: "Sapphire Carbon Blue",
            description:
                "A stunning blue-tinted carbon fiber that adds a touch of elegance and uniqueness to any application.",
            className: styles.colorBlue,
        },
        {
            name: "Ruby Carbon Red",
            description: "Bold and striking red-tinted carbon fiber that makes a powerful statement in any design.",
            className: styles.colorRed,
        },
        {
            name: "Luxury Gold Carbon",
            description:
                "Premium gold-tinted carbon fiber that exudes opulence and sophistication for the most exclusive projects.",
            className: styles.colorGold,
        },
        {
            name: "Royal Purple Carbon",
            description: "Rich purple-tinted carbon fiber that creates a distinctive and regal appearance.",
            className: styles.colorPurple,
        },
        {
            name: "Emerald Carbon Green",
            description:
                "Elegant green-tinted carbon fiber that brings a fresh and natural aesthetic to technical applications.",
            className: styles.colorGreen,
        },
    ]

    // Carbon fiber expertise areas
    const expertiseAreas = [
        {
            title: "Automotive Excellence",
            description:
                "From racing components to luxury vehicle accents, our automotive carbon fiber solutions combine performance with stunning aesthetics.",
            icon: <Car className="h-6 w-6" />,
        },
        {
            title: "Aerospace Innovation",
            description:
                "Lightweight, high-strength carbon fiber components designed to meet the rigorous demands of aerospace applications.",
            icon: <Plane className="h-6 w-6" />,
        },
        {
            title: "Luxury Interiors",
            description:
                "Transform your living spaces with custom carbon fiber furniture, fixtures, and architectural elements.",
            icon: <Home className="h-6 w-6" />,
        },
        {
            title: "Professional Equipment",
            description: "Precision-engineered carbon fiber solutions for professional equipment across industries.",
            icon: <Briefcase className="h-6 w-6" />,
        },
    ]

    return (
        <div className={styles.contactContainer}>

            <section id="contact-form" className={styles.contactSection}>
                <div className={styles.contactContent}>
                    <motion.div>
                        <h2 className={styles.sectionTitle}>Get In Touch</h2>
                        <p className={styles.sectionSubtitle}>
                            Our carbon fiber specialists are ready to assist with your project needs, from material selection to
                            custom design and manufacturing.
                        </p>
                    </motion.div>

                    <div className={styles.contactGrid}>
                        {/* Contact Form */}
                        <motion.div>
                            <div className={styles.formContainer}>
                                <div className={styles.formHeader}>
                                    <h3 className={styles.formTitle}>Send Us a Message</h3>
                                    <p className={styles.formSubtitle}>
                                        Fill out the form below and our team will get back to you within 24 hours with a personalized
                                        response.
                                    </p>
                                </div>
                                <form onSubmit={handleSubmit} className={styles.formBody}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name" className={styles.formLabel}>
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your full name"
                                            required
                                            className={styles.formInput}
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="email" className={styles.formLabel}>
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your.email@example.com"
                                            required
                                            className={styles.formInput}
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="phone" className={styles.formLabel}>
                                            Phone Number (Optional)
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+1 (555) 123-4567"
                                            className={styles.formInput}
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="subject" className={styles.formLabel}>
                                            Inquiry Type
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className={`${styles.formInput} ${styles.formSelect}`}
                                        >
                                            <option value="" disabled>
                                                Select your inquiry type
                                            </option>
                                            <option value="custom-project">Custom Project Inquiry</option>
                                            <option value="material-samples">Request Material Samples</option>
                                            <option value="technical-support">Technical Support</option>
                                            <option value="partnership">Partnership Opportunities</option>
                                            <option value="facility-tour">Schedule Facility Tour</option>
                                            <option value="other">Other Inquiry</option>
                                        </select>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="message" className={styles.formLabel}>
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Describe your project or inquiry in detail..."
                                            required
                                            className={`${styles.formInput} ${styles.formTextarea}`}
                                        ></textarea>
                                    </div>

                                    <button type="submit" className={styles.formButton}>
                                        <div className={styles.formButtonGlow}></div>
                                        <div className={styles.formButtonText}>
                                            Submit Inquiry
                                            <Send className={`${styles.formButtonIcon} h-5 w-5`} />
                                        </div>
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <div className={styles.contactInfo}>
                            <motion.div>
                                <div className={styles.infoCard}>
                                    <h3 className={styles.infoTitle}>
                                        <div className={styles.infoIcon}>
                                            <MessageSquare className="h-5 w-5" />
                                        </div>
                                        Contact Information
                                    </h3>
                                    <ul className={styles.infoList}>
                                        <li className={styles.infoItem}>
                                            <div className={styles.infoItemIcon}>
                                                <MapPin className="h-4 w-4" />
                                            </div>
                                            <div className={styles.infoItemContent}>
                                                <div className={styles.infoItemTitle}>Headquarters</div>
                                                <p className={styles.infoItemText}>
                                                    1234 Carbon Innovation Way
                                                    <br />
                                                    Tech District, San Francisco
                                                    <br />
                                                    CA 94103, United States
                                                </p>
                                            </div>
                                        </li>
                                        <li className={styles.infoItem}>
                                            <div className={styles.infoItemIcon}>
                                                <Phone className="h-4 w-4" />
                                            </div>
                                            <div className={styles.infoItemContent}>
                                                <div className={styles.infoItemTitle}>Phone</div>
                                                <p className={styles.infoItemText}>
                                                    <a href="tel:+15551234567" className={styles.infoLink}>
                                                        +1 (555) 123-4567
                                                    </a>
                                                    <br />
                                                    <span className="text-xs text-gray-500">Main Office</span>
                                                </p>
                                                <p className={styles.infoItemText} style={{ marginTop: "0.5rem" }}>
                                                    <a href="tel:+15559876543" className={styles.infoLink}>
                                                        +1 (555) 987-6543
                                                    </a>
                                                    <br />
                                                    <span className="text-xs text-gray-500">Technical Support</span>
                                                </p>
                                            </div>
                                        </li>
                                        <li className={styles.infoItem}>
                                            <div className={styles.infoItemIcon}>
                                                <Mail className="h-4 w-4" />
                                            </div>
                                            <div className={styles.infoItemContent}>
                                                <div className={styles.infoItemTitle}>Email</div>
                                                <p className={styles.infoItemText}>
                                                    <a href="mailto:info@carbonx.com" className={styles.infoLink}>
                                                        info@carbonx.com
                                                    </a>
                                                    <br />
                                                    <span className="text-xs text-gray-500">General Inquiries</span>
                                                </p>
                                                <p className={styles.infoItemText} style={{ marginTop: "0.5rem" }}>
                                                    <a href="mailto:support@carbonx.com" className={styles.infoLink}>
                                                        support@carbonx.com
                                                    </a>
                                                    <br />
                                                    <span className="text-xs text-gray-500">Technical Support</span>
                                                </p>
                                                <p className={styles.infoItemText} style={{ marginTop: "0.5rem" }}>
                                                    <a href="mailto:sales@carbonx.com" className={styles.infoLink}>
                                                        sales@carbonx.com
                                                    </a>
                                                    <br />
                                                    <span className="text-xs text-gray-500">Sales Department</span>
                                                </p>
                                            </div>
                                        </li>
                                        <li className={styles.infoItem}>
                                            <div className={styles.infoItemIcon}>
                                                <Clock className="h-4 w-4" />
                                            </div>
                                            <div className={styles.infoItemContent}>
                                                <div className={styles.infoItemTitle}>Business Hours</div>
                                                <p className={styles.infoItemText}>
                                                    <strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM PST
                                                    <br />
                                                    <strong>Saturday:</strong> 10:00 AM - 4:00 PM PST
                                                    <br />
                                                    <strong>Sunday:</strong> Closed
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className={styles.socialLinks}>
                                        <a href="#" className={styles.socialLink} aria-label="Facebook">
                                            <Facebook className="h-5 w-5" />
                                        </a>
                                        <a href="#" className={styles.socialLink} aria-label="Twitter">
                                            <Twitter className="h-5 w-5" />
                                        </a>
                                        <a href="#" className={styles.socialLink} aria-label="Instagram">
                                            <Instagram className="h-5 w-5" />
                                        </a>
                                        <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                                            <Linkedin className="h-5 w-5" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
