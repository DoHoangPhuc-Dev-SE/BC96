import { Breadcrumb, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProductStore from "../../zustand/productStore";
// /admin/product/{id} => useParam trả về { id }
export default function ProductDetail() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const { getProductById } = useProductStore();
  const { id } = useParams();

  console.log("👉 id", id);

  console.log("👉 product", product);
  // khi nào gọi api lấy chi tiết sản phẩm
  useEffect(() => {
    const fetch = async () => {
        setLoading(true) // đang load
      const res = await getProductById(id);
      setProduct(res);
      setLoading(false) //đã load xong
    };
    fetch()
    // 
    return()=>{
        console.log("clean-up chạy", id)
    }
  }, [id]); // chạy khi id tahy đổi

  // không có dependence
  // dependence rỗng
  // dependence có tham số
  // clean-up : có return
  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: <Link to={"/admin"}>Admin</Link>,
          },
          {
            title: <Link to={"/admin/products"}>Product</Link>,
          },
        ]}
      />
      {loading ? 
      <Spin />:
      <p>Sản phẩm {product?.name}</p>
      }
    </div>
  );
}
