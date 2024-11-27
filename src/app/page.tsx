import Hero from "@/components/main/hero";
import Main from "@/components/main/main";

export default async function Page ({ searchParams } : { searchParams: { q?: string } }) {
  const { q } = await searchParams
  return (
    <main>
      <Hero />
      <section className="max-w-screen-2xl mx-auto my-20">
        <Main query={q || ''} />
      </section>
    </main>
  );
}
