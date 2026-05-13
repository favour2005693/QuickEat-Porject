import BurgerBanner from "../../components/banner";
import Footer from '../../components/Footer/Footer.jsx'
import ProductCard from "../../components/productcard/ProductCard.jsx";
import FilterButtons from "../../components/FilterButtons/FilterButtons.jsx";
export default function Menu() {
  return (
    <div>
      <BurgerBanner />
      <h2 className="section-title">Explore Menu</h2>
      {/* <FilterButtons /> */}
      <ProductCard />
      <Footer />
    </div>
  )
}
