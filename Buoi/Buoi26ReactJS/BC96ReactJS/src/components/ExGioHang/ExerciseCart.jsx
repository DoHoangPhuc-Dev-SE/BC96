import React, { useState } from "react";
import { products } from "./data";
import ProductList from "./ProductList";
import Cart from "./Cart";

export default function ExerciseCart() {
  const [productDetail, setProductDetail] = useState();
  const [cartData, setCartData] = useState([]);

  //   ==============================
  //   XEM CHI TIẾT
  //   ==============================
  const viewDetail = (product) => {
    console.log("👉 product", product);
    setProductDetail(product);
  };

  //   ==============================
  //  Thêm giỏ hàng
  //   ==============================
  
  const addToCart = (product) => {
    console.log("[CART] 👉 product", product);
    // kiểm tra xem có sp này trong giỏ hàng hay chưa
    // có rồi tăng số lượng
    // chưa có thì thêm vào
    const prodInCart = cartData.find((item) => item.maSP == product.maSP);
    // debugger;
    console.log("[CART] 👉 prodInCart", prodInCart);
    if (prodInCart) {
      // có trong giỏ hàng rồi => tăng số lượng
      // giả sử đang có 2SP trong giỏ hàng
      // chạy map để tăng số lượng sp tương ứng
      var newCart = cartData.map((cItem) => {
        if (cItem.maSP == product.maSP) {
          return { ...cItem, soLuong: cItem.soLuong + 1 };
        }
        return cItem;
      });
      setCartData(newCart);
    } else {
      var newProduct = { ...product, soLuong: 1 };
      setCartData([...cartData, newProduct]);
    }
  };

  //   ==============================
  //  Tăng / giảm số lượng
  //   ==============================

  const changeQuantity = (maSP, value) => { 
    console.log("👉  maSP, value",  maSP, value);
    // tìm sp phù hợp => update số lượng
    const newCart = cartData.map((cItem)=>{
      const newQuantity = cItem.soLuong + value;
      if(cItem.maSP == maSP && newQuantity >= 1){
        return {...cItem, soLuong: newQuantity};
      }
      return cItem;
    });
    setCartData(newCart);
  };

  //   ==============================
  //  Giao diện
  //   ==============================

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Bài tập giỏ hàng</h2>
      <Cart cartData={cartData} changeQuantity={changeQuantity}/>
      <ProductList
        productsData={products}
        viewDetail={viewDetail}
        addToCart={addToCart}
      />
      {/* Thông số kỹ thuật */}
      {productDetail && (
        <div className="mt-5">
          <h2 className="text-center">Thông số kỹ thuật</h2>
          <div className="row align-items-center">
            <div className="col-md-4">
              <h3>{productDetail.tenSP}</h3>
              <img
                src={productDetail.hinhAnh}
                alt={productDetail.tenSP}
                className="img-fluid"
                style={{
                  maxHeight: "350px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="col-md-8">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td className="fw-bold">Màn hình</td>
                    <td>{productDetail.manHinh}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Hệ điều hành</td>
                    <td>{productDetail.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Camera trước</td>
                    <td>{productDetail.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Camera sau</td>
                    <td>{productDetail.cameraSau || productDetail.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Rom</td>
                    <td>{productDetail.rom}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">RAM</td>
                    <td>{productDetail.ram}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Giá bán</td>
                    <td className="text-danger fw-bold">
                      {productDetail.giaBan?.toLocaleString("vi-VN")} VNĐ
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}