import FoodData1 from "../../assets/DataFile/FoodData1.jpg";
import FoodData2 from "../../assets/DataFile/FoodData1.jpg" ;
import FoodData3 from "../../assets/DataFile/FoodData1.jpg" ;
import FoodData4 from "../../assets/DataFile/FoodData1.jpg" ;
import FoodData5 from "../../assets/DataFile/FoodData1.jpg" ;

import "./MagazineGrid.css";

export default function BentoGrid() {
  return (
    <section className="magazine">
      <div className="item item1">
        <img src={FoodData1} alt="image" />
        <div className="content">
          <h2>Main Featured Story</h2>
          <p>This is the headline article of the magazine layout.</p>
        </div>
      </div>

      <div className="item item2">
        <img src={FoodData2} alt="image" />
        <div className="content">
          <h3>Fresh and Yummy</h3>
        </div>
      </div>

      <div className="item item3">
        <img src={FoodData3} alt="image" />
        <div className="content">
          <h3>Travel Guide</h3>
        </div>
      </div>

      <div className="item item4">
        <img src={FoodData4} alt="image" />
        <div className="content">
          <h3>Tasty</h3>
        </div>
      </div>
    </section>
  );
}
