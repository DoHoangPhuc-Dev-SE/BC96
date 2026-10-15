import React from "react";
import ProductItem from "./ProductItem";
// import ip11 from "./../../assets/img/vsphone.jpg"

export default function ProductList({ productsData, viewDetail, addToCart }) {
  return (
    <div className="row g-4">
      {/*  tamk thoi code productitem ở đây */}
      {productsData?.map((item) => {
        return <ProductItem 
        key={item.maSP} 
        item ={item} 
        viewDetail={viewDetail} 
        addToCart={addToCart}/>
      })}
    </div>
  )
}