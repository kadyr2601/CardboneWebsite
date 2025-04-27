import type React from "react"
import Link from "next/link"
import {
    ArrowRight,
    Search,
    ChevronRight,
    MessageSquare,
    Filter,
    Zap,
    Shield,
    Clock,
    PenToolIcon as Tool,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Dictionary } from "@/lib/i18n/dictionaries"
import styles from "@/styles/faq-page.module.css"

interface FaqPageProps {
    dictionary: Dictionary
    lang: string
}

// FAQ data structure
type FaqCategory = {
    id: string
    title: string
    description: string
    icon: React.ReactNode
    faqs: {
        question: string
        answer: string
    }[]
}

export default function FaqPage({ dictionary, lang }: FaqPageProps) {
    // FAQ categories and questions
    const faqCategories: FaqCategory[] = [
        {
            id: "products",
            title: "Products & Materials",
            description: "Information about our carbon fiber products and materials",
            icon: <Shield className="h-6 w-6" />,
            faqs: [
                {
                    question: "What types of carbon fiber do you offer?",
                    answer:
                        "We offer a comprehensive range of carbon fiber types including standard modulus (33-34 MSI), intermediate modulus (42-50 MSI), high modulus (50-70 MSI), and ultra-high modulus (70-140 MSI). We also provide various weave patterns such as plain weave, twill weave, harness satin weave, and unidirectional, each with specific performance characteristics suited to different applications.",
                },
                {
                    question: "Can carbon fiber be colored or customized?",
                    answer:
                        "Yes, we offer carbon fiber in various colors and finishes. Our standard options include classic black, blue, red, gold, purple, and green tints. We can also create custom colors and finishes to match specific design requirements. Additionally, we offer different surface treatments including high-gloss, matte, textured, and forged carbon looks.",
                },
                {
                    question: "How durable are carbon fiber products?",
                    answer:
                        "Carbon fiber products are exceptionally durable. They resist corrosion, fatigue, and environmental degradation, maintaining their structural integrity over long periods. When properly manufactured and maintained, carbon fiber components can outlast many traditional materials, even in demanding conditions. However, they should be protected from direct impacts as carbon fiber can be susceptible to localized damage from sharp impacts.",
                },
                {
                    question: "What is the difference between carbon fiber and fiberglass?",
                    answer:
                        "While both are composite materials, carbon fiber offers significantly higher strength-to-weight ratio and stiffness compared to fiberglass. Carbon fiber is approximately 70% lighter than steel and 40% lighter than aluminum, while fiberglass is about 15% heavier than carbon fiber. Carbon fiber also provides superior fatigue resistance and thermal properties, though it comes at a higher cost than fiberglass.",
                },
                {
                    question: "Do you offer carbon fiber repair services?",
                    answer:
                        "Yes, we provide comprehensive repair services for carbon fiber components. Our repair process involves assessing the damage, removing the affected area, preparing the surface, and applying new carbon fiber layers with matching resin systems. For structural components, we conduct thorough testing to ensure the integrity of the repair meets or exceeds original specifications.",
                },
            ],
        },
        {
            id: "ordering",
            title: "Ordering & Customization",
            description: "Questions about ordering and customizing carbon fiber products",
            icon: <Clock className="h-6 w-6" />,
            faqs: [
                {
                    question: "What is the typical lead time for custom carbon fiber projects?",
                    answer:
                        "Lead times vary depending on project complexity, size, and our current production schedule. Simple components may take 2-4 weeks, while complex or large-scale projects can take 8-12 weeks from design approval to delivery. During the consultation phase, we provide a detailed timeline specific to your project requirements. Rush services are available for certain applications at an additional cost.",
                },
                {
                    question: "Do you offer material samples before ordering?",
                    answer:
                        "Yes, we provide material sample kits that showcase our different carbon fiber types, weaves, and finishes. These samples allow you to evaluate the aesthetic and tactile qualities of our materials before committing to a full project. Sample kits can be requested through our contact form and are available for a nominal fee that is credited toward your first order.",
                },
                {
                    question: "What information do you need for a custom quote?",
                    answer:
                        "For an accurate quote, we need details about your project including dimensions, desired carbon fiber type, finish preferences, quantity, application requirements, and timeline. CAD files or technical drawings are extremely helpful if available. The more information you provide, the more precise our quote will be. Our team is available to help guide you through this process.",
                },
                {
                    question: "Can you match specific colors or patterns?",
                    answer:
                        "Yes, our color-matching capabilities allow us to create custom carbon fiber solutions that align with your brand colors or design specifications. We can produce custom-tinted carbon fiber in virtually any color, and can also incorporate patterns, logos, or other design elements through specialized layup techniques or printing processes.",
                },
                {
                    question: "Do you ship internationally?",
                    answer:
                        "Yes, we ship our carbon fiber products worldwide. International shipping costs and delivery times are calculated based on destination, package dimensions, weight, and service level. We handle all necessary export documentation and can advise on any import requirements for your country. For large or complex international orders, we offer logistics consultation to ensure smooth delivery.",
                },
            ],
        },
        {
            id: "technical",
            title: "Technical Specifications",
            description: "Technical details about carbon fiber properties and performance",
            icon: <Tool className="h-6 w-6" />,
            faqs: [
                {
                    question: "What are the mechanical properties of your carbon fiber?",
                    answer:
                        "Our standard modulus carbon fiber composites typically feature tensile strength of 3500-4500 MPa, tensile modulus of 230-240 GPa, flexural strength of 1200-1500 MPa, and density of 1.55-1.75 g/cm³. High-modulus and ultra-high-modulus options offer even greater performance characteristics. We provide detailed technical data sheets for all our materials upon request.",
                },
                {
                    question: "How does temperature affect carbon fiber performance?",
                    answer:
                        "Carbon fiber maintains excellent mechanical properties across a wide temperature range. Our standard epoxy-based composites perform optimally from -40°C to 120°C. For high-temperature applications, we offer specialized resin systems that can withstand temperatures up to 200°C continuously and brief exposures up to 300°C. Carbon fiber's thermal expansion coefficient is also extremely low, providing dimensional stability across temperature changes.",
                },
                {
                    question: "Is carbon fiber electrically conductive?",
                    answer:
                        "Yes, carbon fiber is electrically conductive, though its conductivity is significantly lower than metals like copper or aluminum. This property can be advantageous for applications requiring EMI/RFI shielding or static dissipation. For applications where electrical conductivity is undesirable, we offer specialized non-conductive formulations with insulating resin systems.",
                },
                {
                    question: "How do you ensure quality control in your carbon fiber products?",
                    answer:
                        "We maintain strict quality control throughout our manufacturing process. This includes material testing, precision manufacturing techniques, and comprehensive final inspections. Each component undergoes ultrasonic scanning to detect any internal defects, and structural parts are tested for strength and integrity. We adhere to industry standards and certifications relevant to each application, ensuring consistent quality across all our products.",
                },
                {
                    question: "What is the UV resistance of carbon fiber?",
                    answer:
                        "While carbon fiber itself is not significantly affected by UV radiation, the epoxy resin matrix can degrade with prolonged exposure. All our carbon fiber products include UV-resistant clear coats or resin systems to protect against yellowing and degradation. For outdoor applications, we recommend our premium UV-stabilized systems that provide protection for 10+ years of continuous exposure.",
                },
            ],
        },
        {
            id: "care",
            title: "Care & Maintenance",
            description: "How to care for and maintain carbon fiber products",
            icon: <MessageSquare className="h-6 w-6" />,
            faqs: [
                {
                    question: "How should I clean carbon fiber surfaces?",
                    answer:
                        "For regular cleaning, use a soft microfiber cloth with mild soap and water. Avoid abrasive cleaners, solvents, or rough materials that could scratch the surface. For deeper cleaning, specialized carbon fiber cleaners are available. After cleaning, apply a high-quality carnauba wax or carbon fiber-specific protectant to maintain the finish and provide additional protection against UV damage and environmental contaminants.",
                },
                {
                    question: "Can damaged carbon fiber be repaired?",
                    answer:
                        "Yes, carbon fiber can be repaired when damaged. Minor cosmetic damage like scratches can often be polished out or filled with specialized carbon fiber repair products. Structural damage requires professional repair, which involves removing the damaged area, preparing the surface, and applying new carbon fiber layers with matching resin. Our service department offers comprehensive repair services for all carbon fiber products.",
                },
                {
                    question: "How long will carbon fiber products last?",
                    answer:
                        "When properly manufactured and maintained, carbon fiber products can last decades. Unlike metals, carbon fiber doesn't corrode or fatigue in the same way, and it's resistant to environmental degradation. The limiting factor is typically the resin system, which may show signs of UV degradation after prolonged exposure if not properly protected. With appropriate care, carbon fiber products often outlast their conventional material counterparts.",
                },
                {
                    question: "Are there special storage requirements for carbon fiber products?",
                    answer:
                        "Carbon fiber products should be stored in a clean, dry environment away from direct sunlight and extreme temperatures. For smaller items, consider using protective cases or covers. Larger components should be supported properly to prevent warping or stress. Avoid storing carbon fiber items in areas with high humidity or where they might be exposed to chemicals, as these can potentially affect the resin system over time.",
                },
                {
                    question: "Do carbon fiber products require special handling?",
                    answer:
                        "While carbon fiber is extremely strong in the direction of the fibers, it can be susceptible to damage from sharp impacts perpendicular to the fiber orientation. Avoid dropping carbon fiber items or subjecting them to point impacts. When transporting carbon fiber components, use appropriate padding and support. For large or complex items, we provide handling guidelines specific to each product.",
                },
            ],
        },
    ]

    return (
        <div className={styles.faqContainer}>
            <div className={styles.carbonTexture}></div>
            <div>
                <h1 className={styles.floatingSearchTitle}>Knowledge Center</h1>
                <p className={styles.floatingSearchSubtitle}>
                    Find answers to your carbon fiber questions with our comprehensive knowledge base
                </p>
            </div>
            <section className={styles.categoriesSection}>
                <div className={styles.categoriesContent}>
                    <div className={styles.categoriesGrid}>
                        {faqCategories.map((category, index) => (
                            <a href={`#${category.id}`} key={category.id} className={styles.categoryCard} data-index={index}>
                                <div className={styles.categoryCardInner}>
                                    <div className={styles.categoryIcon}>{category.icon}</div>
                                    <h2 className={styles.categoryTitle}>{category.title}</h2>
                                    <p className={styles.categoryDescription}>{category.description}</p>
                                    <div className={styles.categoryStats}>
                                        <span className={styles.categoryCount}>{category.faqs.length}</span>
                                        <span className={styles.categoryCountLabel}>Questions</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Content Sections */}
            {faqCategories.map((category, categoryIndex) => (
                <section
                    id={category.id}
                    key={category.id}
                    className={`${styles.faqSection} ${styles[`faqSection${categoryIndex % 5}`]}`}
                >
                    <div className={styles.faqSectionContent}>
                        <div className={styles.faqSectionHeader}>
                            <div className={styles.faqSectionIcon}>{category.icon}</div>
                            <div>
                                <h2 className={styles.faqSectionTitle}>{category.title}</h2>
                                <p className={styles.faqSectionDescription}>{category.description}</p>
                            </div>
                        </div>

                        <div className={styles.faqList}>
                            <Accordion type="single" collapsible className={styles.faqAccordion}>
                                {category.faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`${category.id}-item-${index}`} className={styles.accordionItem}>
                                        <AccordionTrigger className={styles.accordionTrigger}>
                                            <div className={styles.questionWrapper}>
                                                <div className={styles.questionNumber}>{index + 1}</div>
                                                <span>{faq.question}</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className={styles.accordionContent}>
                                            <div className={styles.answerWrapper}>
                                                <p>{faq.answer}</p>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        <div className={styles.faqSectionFooter}>
                            <a href="#" className={styles.backToTopLink}>
                                Back to Categories
                            </a>
                        </div>
                    </div>
                </section>
            ))}

            {/* Contact Card */}
            <section className={styles.contactCardSection}>
                <div className={styles.contactCardContent}>
                    <div className={styles.contactCard}>
                        <div className={styles.contactCardBackground}>
                            <div className={`${styles.carbonTexture} ${styles.carbonTextureBlue}`}></div>
                        </div>
                        <div className={styles.contactCardInner}>
                            <div className={styles.contactIcon}>
                                <MessageSquare className="h-8 w-8" />
                            </div>
                            <h2 className={styles.contactTitle}>Still Have Questions?</h2>
                            <p className={styles.contactDescription}>
                                Our carbon fiber specialists are ready to assist with any questions not covered in our FAQ. Contact us
                                for personalized support and expert advice.
                            </p>
                            <div className={styles.contactButtons}>
                                <Link href={`/${lang}/contact`} className={styles.primaryButton}>
                                    Contact Our Team
                                    <ArrowRight className={styles.buttonIcon} />
                                </Link>
                                <Link href={`/${lang}/products`} className={styles.secondaryButton}>
                                    Explore Products
                                    <ChevronRight className={styles.buttonIcon} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
