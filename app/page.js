import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import Features from "@/components/shared/Features";
import Advantages from "@/components/shared/Advantages";
import Advantages2 from "@/components/shared/Advantages2";
import Testimonial from "@/components/shared/Testimonial";
import Faqs from "@/components/shared/Faqs";
import Fbanner from "@/components/shared/Fbanner";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main>
      <Header />
        <section>
            <Hero />
        </section>
        <section>
            <Features />
        </section>
        <section>
            <Advantages />
        </section>
        <section>
            <Advantages2 />
        </section>
        <section>
            <Testimonial />
        </section>
        <section>
            <Faqs />
        </section>
        <section>
            <Fbanner />
        </section>
        <section>
            <Footer />
        </section>
    </main>
  );
}
