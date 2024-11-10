import HeroSection from "./components/heroSection";
import NavBar from "./components/navBar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar/>
      <div className="container mx-auto py-12 px-4">
      <HeroSection/>
      </div>
    </div>
  );
}
