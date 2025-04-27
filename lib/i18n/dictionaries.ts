export type Dictionary = {
  navigation: {
    home: string
    products: string
    process: string
    applications: string
    testimonials: string
    faq: string
    blog: string
    contact: string
    getQuote: string
  }
  hero: {
    title: string
    titleHighlight: string
    subtitle: string
    exploreProducts: string
    watchProcess: string
  }
  products: {
    title: string
    subtitle: string
    tabs: {
      automotive: string
      home: string
      custom: string
    }
    specifications: string
    explore: string
    viewCatalog: string
  }
  process: {
    title: string
    subtitle: string
    facilityTitle: string
    facilityDescription: string
    tourButton: string
  }
  applications: {
    title: string
    subtitle: string
    keyApplications: string
    requestInfo: string
  }
  specifications: {
    title: string
    subtitle: string
    materialProperties: string
    materialAdvantages: string
    downloadButton: string
  }
  testimonials: {
    title: string
    subtitle: string
    readMore: string
  }
  team: {
    title: string
    subtitle: string
    joinTitle: string
    joinDescription: string
    viewPositions: string
  }
  faq: {
    title: string
    subtitle: string
    notFound: string
    contactSupport: string
  }
  blog: {
    title: string
    subtitle: string
    readMore: string
    viewAll: string
  }
  partners: {
    title: string
    subtitle: string
    becomeTitle: string
    becomeDescription: string
    partnerButton: string
  }
  contact: {
    title: string
    subtitle: string
    expertConsultation: string
    expertDescription: string
    quickResponse: string
    quickDescription: string
    qualityGuarantee: string
    qualityDescription: string
    callUs: string
    emailUs: string
    visitUs: string
    formTitle: string
    nameLabel: string
    emailLabel: string
    phoneLabel: string
    interestLabel: string
    messageLabel: string
    privacyConsent: string
    sendButton: string
  }
  newsletter: {
    title: string
    subtitle: string
    placeholder: string
    button: string
    privacyNote: string
  }
  footer: {
    description: string
    productsTitle: string
    companyTitle: string
    supportTitle: string
    copyright: string
    privacyPolicy: string
    termsOfService: string
    cookiePolicy: string
    sitemap: string
  }
  languageSwitcher: {
    en: string
    ru: string
  }
}

export const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("./en.json").then((module) => module.default),
  ru: () => import("./ru.json").then((module) => module.default),
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  return (dictionaries[locale] || dictionaries.en)()
}
