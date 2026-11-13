import { Button, Input } from "antd";
import React, { memo, useMemo, useState } from "react";

const products = [
  { id: 1, name: "Áo Sơ Mi Nam Công Sở" },
  { id: 2, name: "sp 2" },
  { id: 3, name: "Giày Thể Thao Sneaker Unisex" },
  { id: 4, name: "Tai Nghe Không Dây Bluetooth Chống Ồn" },
];

export function DemoMemo() {
  const [keywords, setKeywords] = useState("");
  const [count, setCount] = useState(0);

  // lọc sản phẩm
  // useMemo : giữ lại giá trị tính toán , tránh tính lại khi những state khác thay đổi
  // memo: component, khi props thay đổi thì mới render lại component
  const filterProduct = useMemo(() => {
    console.log("✅ Filter thay đổi");
    return products.filter((p) =>
      p.name.toLowerCase().includes(keywords.toLowerCase()),
    );
  }, [keywords, products]); // khi keywords,products thay đổi thì mới chạy lại

  //  const filterProduct = products.filter((p) => {
  //     console.log("⚠️ Đang lọc danh sách sản phẩm - KHONG DUNG MEMO");
  //     return p.name.toLowerCase().includes(keywords.toLowerCase());
  //   })
  return (
    <div className="my-5">
      <h1 className="text-3xl font-bold">{count}</h1>
      <div className="flex gap-2">
        <Button
          size="small"
          type="primary"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Tăng
        </Button>
        <Button
          size="small"
          type="primary"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          {" "}
          Giảm
        </Button>
      </div>

      <Input onChange={(e) => setKeywords(e.target.value)}></Input>
      {/*  dùng ds đã lọc để hiển thị */}
      {filterProduct.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}

      <br />
      <br />
      <br />

      <MemoList items={filterProduct} />
    </div>
  );
}
// memo : chỉ render lại khi props thay đổi
const MemoList = memo(function MemoList({ items }) {
  console.log("🟢 Component con MemoList render");
  return (
    <div>
      <h1 className="text-2xl text-gray-800 font-extrabold">Memo List</h1>
      <ul className="divide-y divide-slate-200">
        {items.map((product) => (
          <li
            key={product.id}
            className="flex items-center justify-between gap-4 py-3"
          >
            <div>
              <p className="font-medium text-slate-800">{product.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

// khi keywords thay đổi  => component rerender
// filterProduct chạy lại vì keywords thay đổi
