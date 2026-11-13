import React, { useEffect, useState } from "react";
import useProductStore from "../../zustand/productStore";
import ProductForm from "../../components/product/ProductForm";
import { Button, Image, Input, Pagination, Table } from "antd";
import { Link, useSearchParams } from "react-router-dom";

export default function ManagerProduct() {
  
  //   const getProducts = useProductStore((state)=> state.getProducts)
  // const products =  useProductStore((state)=> state.products)
  // client states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productDetail, setProductDetail] = useState(null);
  // ten_cũ : ten_rename
  const {
    getProducts: getA,
    products,
    pageSize,
    pageIndex,
    totalRow,
    keywords,
    //  action
    setPageIndex,
    setPageSize,
    setKeyword,
  } = useProductStore();

  // column cần để render table
  const column = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render:data=> <Link to={`/admin/products/${data}`}>{data}</Link>
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (data) => <Image src={data} width={50} />,
    },

    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity", // thuộc tính trong ds dữ liệu
      key: "quantity",
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_, record, index) => {
        // console.log("👉 value, record, index", _, record, index);
        return (
          <Button
            type="primary"
            size="small"
            onClick={() => {
              openEdit(record);
            }}
          >
            Sửa
          </Button>
        );
      },
    },
  ];
  const openEdit = (item) => {

    // không tạo hoook ở đây dc 
    setIsModalOpen(true);
    setProductDetail(item);
  };
  const openAdd = () => {
    setIsModalOpen(true);
    setProductDetail(null);
  };

  // console.log("👉 productDetail", productDetail);
  // console.log("👉 pageIndex", pageIndex);
  const totalPage = Math.ceil(totalRow / pageSize);
  //
  const [searchParam, setSearchParam] = useSearchParams();
  // vua vao trang la lay keyword tren url xuong
  const [urlKeywords, setUrlKeywords] = useState(
    searchParam.get("keywords") || "",
  );

  const searchKeyword = (value) => {
    console.log("👉 value", value);
    // dua gia tri tren inout len url

    setSearchParam({
      keywords: value,
    });
    setUrlKeywords(value);
    setKeyword(value);
    setPageIndex(1);
  };
  // console.log("👉 products", products);
  useEffect(() => {
    setKeyword(urlKeywords);
    getA();
  }, [pageIndex, keywords,pageSize]); // lần đầu khi render, và chạy lại khi pageIndex thay đổi
  return (
    <div>
      {/*  tiêu đề và button thêm mới */}
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-slate-800">Quản lý sản phẩm</h3>
        <Button type="primary" onClick={openAdd}>
          Thêm mới
        </Button>
        <ProductForm
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          product={productDetail}
        />
      </div>
      {/*  danh sách */}
      {/*  timf kieem */}
      <div className="mt-4 flex gap-2">
        <Input.Search
          key={urlKeywords}
          defaultValue={urlKeywords}
          onSearch={(value) => {
            searchKeyword(value);
          }}
        />
      </div>
      <div className="overflow-hidden rounded-xl bg-white shadow-sm my-3">
        {/* <table className="w-full">
          <thead className="bg-slate-50 text-left">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Hình</th>
              <th className="px-4 py-3">Tên sản phẩm</th>
              <th className="px-4 py-3">Giá</th>
              <th className="px-4 py-3">Số lượng</th>
              <th className="px-4 py-3">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => {
              return (
                <tr key={index} className="">
                  <td className="px-4 py-3">{item.id}</td>
                  <td className="px-4 py-3">
                    <img src={item.image} className="w-14 h-14" alt="" />
                  </td>
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3">
                    {item.price.toLocaleString()} VNĐ
                  </td>
                  <td className="px-4 py-3">{item.quantity}</td>
                  <td className="px-4 py-3"></td>
                </tr>
              );
            })}
          </tbody>
        </table> */}
        <Table
          columns={column}
          dataSource={products}
          rowKey="id"
          pagination={{
            total: totalRow,
            pageSize: pageSize,
            onChange: (page, size) => {
              setPageIndex(page);
              setPageSize(size);
            },
          }}
        />
        {/*  PHAN TRANG - PAGINATION */}
        <div className="my-5 px-2 flex justify-between items-center">
          <p className="text-sm text-slate-500">
            Trang {pageIndex}/{totalPage}
          </p>
          <div className="flex gap-2 justify-between">
            <button
              className="text-sm font-bold rounded-lg border px-4 py-2 disabled:opacity-40 cursor-pointer"
              disabled={pageIndex == 1}
              onClick={() => {
                setPageIndex(1);
              }}
            >
              Đầu
            </button>
            <button
              className="text-sm font-bold rounded-lg border px-4 py-2 disabled:opacity-40 cursor-pointer"
              disabled={pageIndex == 1}
              onClick={() => {
                setPageIndex(pageIndex - 1);
              }}
            >
              Trước
            </button>
            <button
              className="text-sm font-bold rounded-lg border px-4 py-2 disabled:opacity-40 cursor-pointer"
              disabled={pageIndex == totalPage}
              onClick={() => {
                setPageIndex(pageIndex + 1);
              }}
            >
              Sau
            </button>
            <button
              className="text-sm font-bold rounded-lg border px-4 py-2 disabled:opacity-40 cursor-pointer"
              disabled={pageIndex == totalPage}
              onClick={() => {
                setPageIndex(totalPage);
              }}
            >
              Cuối
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
