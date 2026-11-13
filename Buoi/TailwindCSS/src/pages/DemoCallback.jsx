import React, { memo, useCallback, useState } from "react";
const product = {
  id: 1,
  name: "Áo Sơ Mi Nam Công Sở",
  price: 250000,
  description: "Áo sơ mi chất liệu cotton",
};
export const DemoCallback = () => {
  console.log("🔵 Cha DemoCallback render");

  const [like, setLike] = useState(0);
  // funcion xem chi tiết
  // usecallback dùng cho function 
  const getItem = useCallback(() => {
    console.log("view detail")
    alert(
      `Tên: ${product.name}\n` +
        `Giá: ${product.price.toLocaleString("vi-VN")} đ\n` +
        `Mô tả: ${product.description}`,
    );
  },[]); // tạo 1 lần đầu thôi 
  return (
    <div className="my-5">
      <h1>{product.name}</h1>
      <Product_Callback getItem={getItem} />
      <div className="my-4">
        <p>Like: {like}</p>
        <button
          className="rounded bg-blue-600 px-4 py-2 text-white"
          onClick={() => setLike(previous => previous + 1)}
        >
          Tăng Like
        </button>
    </div>
    </div>
  )
};
// memo check props getItem có bị làm mới hay không 
//=> làm mới thì render lại
const Product_Callback = memo(({ getItem })=>{
  console.log("🟢 Con Product_Callback render");
  return (
    <button
      className="rounded bg-green-600 px-4 py-2 text-white"
      onClick={getItem}
    >
      Xem chi tiết
    </button>
  )

});
