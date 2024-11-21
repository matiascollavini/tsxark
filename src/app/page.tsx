import Hero from "@/components/main/hero";
import Shop from "@/components/main/shop";

export default function Page () {
  return (
    <main>
      <Hero />
      <section className="max-w-screen-2xl mx-auto my-20">
        <Shop />
      </section>
    </main>
  );
}
