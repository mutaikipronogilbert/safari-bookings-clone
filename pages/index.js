import MainNavigation from "../components/MainNavigation";
import Services from "../components/Services";
import TourDestinations from "../components/TourDestinations";
import HomeBackground from "../components/HomeBackground";
import TourSearch from "../components/TourSearch";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
function HomePage() {
  return (
    <div>
      <Navbar />
      <TourSearch />
      <TourDestinations />
      <HomeBackground />
      <Footer />
    </div>
  );
}

export default HomePage;
