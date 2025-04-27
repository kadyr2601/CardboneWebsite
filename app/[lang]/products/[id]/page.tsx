import { getDictionary } from "@/lib/i18n/dictionaries"
import ProductDetailPage from "@/components/product-detail-page"

export default async function ProductDetail({ params }: { params: { lang: string; productId: string } }) {
    const {lang} = await params

    const dictionary = await getDictionary(lang)

    return <ProductDetailPage dictionary={dictionary} lang={lang} productId={params.productId} />
}
