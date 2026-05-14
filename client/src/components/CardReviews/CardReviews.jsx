// import React from 'react'
import "./CardReviews.css";
import productDatas from "../../data/FoodData";

export default function CardReviews() {
  return (
    <div>
      <h2 className="section-title">Local Dishes</h2>
      <div className="product-container">
        {productDatas.map((productData, id) => (
          <div className="product-card" key={id}>
            <div className="product-image-container">
            <img src={productData.image} className="pro-img" alt="image" />
            </div>
            <div className="product-card-details">
            <p> {productData.name} </p>
            <p> {productData.category} </p>
            <p>{productData.price}</p>
            <button className="add-to-cart-btn">add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
