import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Amenities from "@/components/Amenities";
import B2B from "@/components/B2B";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main role="main">
        <Hero />
        <Concept />
        <Amenities />
        <B2B />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
