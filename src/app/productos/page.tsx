import Shop from "@/components/main/shop"

type SearchParams = Promise<{ [key: string]: string | undefined }>

export default async function Page(props: {
  searchParams: SearchParams
}) {
  const searchParams = await props.searchParams
  const q = searchParams.q || ''
  const categoria = searchParams.categoria || ''
  return (
    <section className="max-w-screen-xl mx-auto px-10 md:px-0 my-20">
      <Shop category={categoria} query={q} />
    </section>
  )
}
