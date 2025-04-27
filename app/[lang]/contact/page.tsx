import { getDictionary } from "@/lib/i18n/dictionaries"
import ContactPage from "@/components/contacts-page/contact-page"

export default async function Contact({ params }: { params: { lang: string } }) {
  const dictionary = await getDictionary(params.lang)

  return <ContactPage dictionary={dictionary} lang={params.lang} />
}
