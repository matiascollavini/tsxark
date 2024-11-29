import Hero from "@/components/main/hero";
import Main from "@/components/main/main";

export default function Page() {
  return (
    <main>
      <Hero />
      <section className="max-w-screen-xl mx-auto my-20">
        <Main />
      </section>
    </main>
  );
}
