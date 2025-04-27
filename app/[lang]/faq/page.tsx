import { getDictionary } from "@/lib/i18n/dictionaries"
import FaqPage from "@/components/faq-page"

export default async function FAQ({ params }: { params: { lang: string } }) {
    const dictionary = await getDictionary(params.lang)

    return <FaqPage dictionary={dictionary} lang={params.lang} />
}
