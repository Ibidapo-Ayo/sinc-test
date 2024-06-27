
import Banner from "./ui/banner";
import Footer from "./ui/footer";
import Header from "./ui/header";
import HeroSections from "./ui/hero";

export default function Home() {
  return (
  <main className="w-full">
    <Header />
    <Banner />
    <HeroSections />
    <Footer />
  </main>
  );
}
