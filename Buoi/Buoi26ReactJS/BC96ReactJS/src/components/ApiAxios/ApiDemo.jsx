import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductForm from "./ProductForm";

export default function ApiDemo() {
  // khai báo 1 state để lưu ds sp lấy từ api
  const [products, setProducts] = useState([]);

  const [count, setCount] = useState(0);

  const getProducts = async () => {
    // call api bằng axios
    try {
      const res = await axios.get(
        "https://apistore.cybersoft.edu.vn/api/Product",
      );

      console.log("[👉 API res ]", res.data.content);
      setProducts(res.data.content);
    } catch (err) {
      console.log("err", err);
    }
  };
  //   getProducts()
  useEffect(() => {
    console.log("[useEffect] chạy 1 lần sau khi render UI lần đầu");
    // cho gọi hàm getproduct
    getProducts();
  }, []); // [] dependency

  useEffect(() => { 
    console.log("[useEffect] - Count thay đổi ", count);
   },[count,products]) // chạy lần đầu tiên và chạy mỗi khi count thay đổi


  useEffect(() => { 
    console.log("[useEffect] - Không có dependency"); // chạy lần đầu tiên và chạy sau khi render UI (chạy mỗi khi state hoặc props thay đổi, )
   })
   
  return (
    <div className="container mx-auto">
        <div className="d-flex my-3">
            <button className="btn btn-outline-success" onClick={() => setCount(count + 1)}>Like</button>
            <span className="mx-3">{count}</span>
            <button className="btn btn-outline-danger" onClick={() => setCount(count - 1)}>Dislike</button>
        </div>


      <button className="btn btn-primary" onClick={getProducts}>
        Get Products
      </button>
      <div className="d-flex justify-content-between flex-wrap my-3">
        <h2 className="text-center">Danh sách sản phẩm</h2>
      <ProductForm getProducts={getProducts}/>
      </div>
      <div className="row g-3">
        {products.map((item, index) => {
          return (
            <div className="col-3" key={index}>
              <div className="card h-100">
                <img
                  className="card-img-top"
                  style={{
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src={item.image}
                  alt={item.name}
                />
                <div className="card-body">
                  <h5>{item.name}</h5>
                  <p className="text-danger fw-bold">
                    {item.price.toLocaleString()} VNĐ
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}