import Header from "../components/Header";
import Hero from "../components/Hero";
import Career from "../components/Career";
import Experience from "../components/Experience";
import Insurance from "../components/Insurance";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Career />
      <Experience />
      <Insurance />
      <Footer />
    </div>
  );
}
