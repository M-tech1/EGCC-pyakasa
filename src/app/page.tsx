import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Welcome from "@/components/sections/Welcome";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Ministries from "@/components/sections/Ministries";
import Events from "@/components/sections/Events";
import Sermons from "@/components/sections/Sermons";
import Testimonials from "@/components/sections/Testimonials";
import Giving from "@/components/sections/Giving";
import Prayer from "@/components/sections/Prayer";
import LocationMap from "@/components/sections/LocationMap";
import PlanVisit from "@/components/sections/PlanVisit";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Stats />
        <Services />
        <Ministries />
        <Events />
        <Sermons />
        <Testimonials />
        <Giving />
        <Prayer />
        <LocationMap />
        <PlanVisit />
      </main>
      <Footer />
    </>
  );
}
