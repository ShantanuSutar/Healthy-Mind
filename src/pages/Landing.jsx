import Navbar from "../components/Navbar";
import LandingImages from "../components/LandingImages";
import Search from "../components/Search";
import News from "../components/News";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className=" font-serif">
      <Navbar />
      <div className=" pt-16 w-[71%] text-white mx-auto items-center justify-center">
        <LandingImages />
        <Search />
        <News />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
