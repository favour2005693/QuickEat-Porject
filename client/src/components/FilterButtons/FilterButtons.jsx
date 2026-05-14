import React from 'react'
import productsData from "../../data/data";


export default function FilterButtons() {
  return (
    <div>
      {productsData.map((productCat)=>
    <div key={productCat.id}>
        <button>{productCat.name}</button>
    </div>
    )}
    </div>
  )
}
