import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About Us | ECWA Gospel Church Pyakasa",
  description:
    "Learn about our story, mission, vision, and the life of ECWA Gospel Church Pyakasa — a beacon of hope and transformational community in the heart of Abuja.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}
