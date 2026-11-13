import React, { useEffect, useState } from "react";
import { Button, message, Modal, Select } from "antd";
import { Checkbox, Form, Input } from "antd";
import useProductStore from "../../zustand/productStore";

const ProductForm = ({ isModalOpen, setIsModalOpen, product }) => {
  console.log("👉 product", product);
  const [form] = Form.useForm();
  // lấy getCategories để gọi
  const { getCategories, categories, addProduct, updateProduct } =
    useProductStore();

  console.log("👉 categories", categories);
  // MODAL
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  //    FORM
  const onFinish = async (values) => {
    console.log("Success:", values);
    // category
    // tìm category trong ds categories
    // từ ds id đã chọn
    const selectCategory = values.categoryIds.map((id) => {
      // tìm ra phân loại ban đầu (có nhiều thông tin)
      const find = categories.find((item) => item.id == id);
      return {
        id: find.id,
        category: find.category,
      };
    });

    console.log("👉 selectCategory", selectCategory);

    const payload = {
      id: product ? product.id : 0,
      name: values.name.trim(),
      alias: values.name,
      price: values.price,
      description: values.description,
      size: values.size,
      sizes: JSON.stringify(values.size), //"[31,32,33]"
      shortDescription: values.shortDescription,
      quantity: values.quantity,
      categories: selectCategory,
      relatedProducts: [],
      image: values.image,
      imgLink: values.image,
    };
    try {
      if (product) {
        // update

        console.log("👉 payload", payload);
        await updateProduct(payload);
        message.success("Cập nhât thành công");
      } else {
        // add
        await addProduct(payload);
        message.success("Thêm mới thành công!");
      }

      closeModal();
    } catch (err) {
      message.error(err);
      alert("thao tác thất bại");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const options = [];

  console.log("👉 options", options);
  for (let i = 36; i < 50; i++) {
    options.push({
      label: i,
      value: i,
    });
  }
  useEffect(() => {
    getCategories();
  }, []);
  // dependence:

  useEffect(() => {
    product &&
      form.setFieldsValue({
        name: product.name,
        price: product.price,
        description: product.description,
        shortDescription: product.shortDescription,
        size: JSON.parse(product.size),
        quantity: product.quantity,
        image: product.image,
        categoryIds: JSON.parse(product.categories)?.map((item) => item.id),
      });
  }, [product, isModalOpen]); //
  return (
    <>
      <Modal
        title={product ? "Cập nhật sản phẩm" : "Thêm mới"}
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={closeModal}
        footer={null}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Tên sản phẩm"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Giá"
            name="price"
            rules={[{ required: true, message: "Vui lòng nhập giá!" }]}
          >
            <Input type={"number"} />
          </Form.Item>
          <Form.Item
            label="Mô tả"
            name="description"
            rules={[{ required: true, message: "Vui lòng nhập mô tả!" }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="Mô tả ngắn"
            name="shortDescription"
            rules={[{ required: true, message: "Vui lòng nhập mô tả ngắn!" }]}
          >
            <Input.TextArea rows={2} />
          </Form.Item>

          <Form.Item
            label="Size"
            name="size"
            rules={[{ required: true, message: "Vui lòng chọn size!" }]}
          >
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              options={options}
            />
          </Form.Item>
          {/* Phân loại */}
          <Form.Item
            label="Phân loại"
            name="categoryIds"
            rules={[{ required: true, message: "Vui lòng chọn phân loại]!" }]}
          >
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              options={categories.map((item) => ({
                label: item.category,
                value: item.id,
              }))}
              //  options là ds có kiểu là {value : "", label: ""}
            />
          </Form.Item>
          <Form.Item
            label="Số lượng"
            name="quantity"
            rules={[{ required: true, message: "Vui lòng nhập số lượng!" }]}
          >
            <Input type={"number"} />
          </Form.Item>
          <Form.Item
            label="HÌnh ảnh (Link online)"
            name="image"
            rules={[
              { required: true, message: "Vui lòng nhập hình sản phẩm!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default ProductForm;
