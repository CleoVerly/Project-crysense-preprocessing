import OutputWeight from "../components/features/weight/Output";
import Weight from "../components/features/weight/Weight";
import Footer from "../components/footer/Footer";
import HeroWeight from "../components/hero/HeroWeight";
import Navbar from "../components/navbar/Navbar";


function WeightPage() {
  return (
    <>
      <Navbar />
      <HeroWeight />
      <Weight />
      <OutputWeight />
      <Footer />
    </>
  );
}

export default WeightPage;