import HeroSection from '../../components/Hero/Hero.jsx';
import PopularCartegory from '../../components/PopularCartegory/PopularCartegory.jsx';
import ExplorService from '../../components/ExplorService/ExploreService.jsx'
import Footer from '../../components/Footer/Footer.jsx';
import Magazine from '../../components/MagazineGrid/MagazineGrid.jsx';
// import CardReviews from '../../components/CardReviews/CardReviews.jsx';
import QuickEatLoader from '../../components/QuickEatLoader/QuickEatLoader.jsx';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularCartegory />
      <ExplorService />
      <Magazine/>
      {/* <CardReviews /> */}
      <QuickEatLoader />
      <Footer />
    </>
  )
}
