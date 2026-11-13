import React, { useState } from "react";
import useCategory from "../../hooks/useCategory";
import { Button, Form, Image, message, Select, Spin, Table } from "antd";
import {
  useProductMutations,
  useProductPaging,
} from "../../hooks/useProductQuery";

export default function ProductTest() {
  const { data, isLoading, error } = useCategory();

  console.log("👉 data", data);

  console.log("👉 error", error);
  const [search, setSearch] = useState({
    pageIndex: 1,
    pageSize: 10,
    keywords: "",
  });

  const { data: productData } = useProductPaging(
    search.pageIndex,
    search.pageSize,
    search.keywords,
  );

  console.log("👉 productData", productData);
  const column = [
    { title: "Id", dataIndex: "id", key: "id" },
    { title: "Tên sản phẩm", dataIndex: "name", key: "name"},
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (data) => <Image src={data} width={50} />,
    },
  ];
  const handleChanged = (page, size) => {
    setSearch({
      ...search, // tạo ra obj mới từ obj cũ
      pageIndex: page, // ghi đề giá trị mới cho pageIndex
      pageSize: size,
    });
  };

  const { addProductMutation } = useProductMutations();
  const isSubmiting = addProductMutation.isPending;
  const add = async () => {
    const newObj = {
      id: 0,
      name: "Adidas 2.1",
      alias: "adidas-2",
      price: "9991",
      description: "Magnam mollitia enim",
      size: [38, 39],
      sizes: "[38,39]",
      shortDescription: "Rerum voluptate quis",
      quantity: "713",
      categories: [{ id: "ADIDAS", category: "ADIDAS" }],
      relatedProducts: [],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ns2vNync-xu0vo5c2VFLqpMt7-X6N6ckbFJDODYdaQ&s=10",
      imgLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ns2vNync-xu0vo5c2VFLqpMt7-X6N6ckbFJDODYdaQ&s=10",
    };
    try {
      await addProductMutation.mutateAsync(newObj);
      message.success("Thêm mới thành công");
    } catch (error) {
      message.error("Thêm mới thất bại");
    }
  };
  return (
    <div>
      PRODUCT TEST
      {isLoading ? (
        <Spin />
      ) : (
        data?.map((item, index) => <p key={index}>{item.category}</p>)
      )}
      <h2>Table</h2>
      <Button type="primary" onClick={add} disabled={isSubmiting}>
        Thêm mới
      </Button>
      <Table
        columns={column}
        dataSource={productData?.items ?? []}
        rowKey="id"
        pagination={{
          total: productData?.totalRow,
          pageSize: search.pageSize,
          onChange: (page, size) => {
            handleChanged(page, size);
          },
        }}
      />
    </div>
  );
}
