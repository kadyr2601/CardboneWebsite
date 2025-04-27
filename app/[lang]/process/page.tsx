import { getDictionary } from "@/lib/i18n/dictionaries"
import ProcessPage from "@/components/process-page"

export default async function Process({ params }: { params: { lang: string } }) {
  const dictionary = await getDictionary(params.lang)

  return <ProcessPage dictionary={dictionary} lang={params.lang} />
}
