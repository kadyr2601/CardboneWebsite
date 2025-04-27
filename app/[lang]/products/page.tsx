import { getDictionary } from "@/lib/i18n/dictionaries"
import ProductsPage from "@/components/products-page/products-page"

export default async function Products({ params }: { params: { lang: string } }) {
  const {lang} = await params

  const dictionary = await getDictionary(lang)

  return <ProductsPage dictionary={dictionary} lang={lang} />
}
