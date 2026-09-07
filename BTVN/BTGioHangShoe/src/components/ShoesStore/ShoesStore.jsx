import React, { useState } from 'react';
import { dataJson } from './dataJson';
import ProductList from './ProductList';
import Modal from './Modal';

export default function ShoesStore() {
  const [productDetail, setProductDetail] = useState(dataJson[0]);

  const setStateModal = (product) => {
    setProductDetail(product);
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Shoes shop</h1>
      <ProductList productsData={dataJson} setStateModal={setStateModal} />
      <Modal content={productDetail} />
    </div>
  );
}