import AppBanner from "../components/AppBanner";
import Comments from "../components/Comments";
import Footer from "../components/Footer";
import GridCards from "../components/GridCards";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MostPoular from "../components/MostPoular";
import WhyUs from "../components/WhyUs";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <Hero />
        <MostPoular />
        <WhyUs />
        <GridCards />
        <AppBanner />
        <Comments />
        <Footer />
      </div>
    </>
  );
}

export default App;
