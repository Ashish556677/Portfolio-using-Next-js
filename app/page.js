import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-black via-gray-900  bg-opacity-90 backdrop-filter backdrop-blur-lg">
      <Navbar />
      <div class="container mt-24  mx-auto px-9 py-5 ">
        <HeroSection/>
        <br/><br/><br/><br/><br/><br/><br/>
        <AboutSection/>
        <br/><br/><br/><br/><br/>
        <ProjectsSection />
        <br/><br/>
      </div>
      <Footer/>
    </main>
  );
}

