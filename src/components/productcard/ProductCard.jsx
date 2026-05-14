import { useState } from "react";

import productsData from "../../data/data";
import regularHeart from "../../assets/icon/heart-regular.png";
import solidHeart from "../../assets/icon/heart-solid.png";

import "./ProductCard.css";

export default function ProductCard() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <div className="product-card-wrapper">
        {productsData.map((productData) => (
          <div key={productData.id} className="product-card">
            <div className="product-card-image-container">
              <img
                src={productData.image}
                alt="image"
                className="product-image"
              />
            </div>
            <div className="product-badge" onClick={toggleLike}>
              {liked ? (
                <img src={regularHeart} alt="icon" className="heartIcon" />)
               : (
                <img src={solidHeart} alt="icon" className="heartIcon" />)
              }
            </div>
            <div className="product-card-details">
              <h3>{productData.name}</h3>
              <p>{productData.description} </p>
              <div className="product-card-rating-wrapper">
                <img src={productData.ratingImage} className="rating-image" />
                <span>{productData.rating}</span>
              </div>
              <hr className="under-line" />
              <div className="cta-wrapper">
                <div className="product-price-wrapper">
                  <span className="product-price"> ${productData.price} </span>
                  <span className="old-price">${productData.discount} </span>
                </div>
                <button className="add-to-cart-btn">add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 