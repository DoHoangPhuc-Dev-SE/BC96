import axios from "axios";
import { useFormik } from "formik";
import React from "react";

export default function ProductForm(props) {
  const formProduct = useFormik({
    initialValues: {
      name: "",
      price: 0,
      description: "",
      quantity: 0,
      imgLink: "",
    },
    onSubmit: async (values) => {
      // call api thêm sản phẩm
      // clone object values => newProduct và thêm các thuộc tính khác cho phù hợp với api
      const newProduct = {
        ...values,
        id: 0,
        sortDescription: values.description.substring(0, 20),
      };
      console.log("👉 newProduct", newProduct);
      var res = await axios.post(
        "https://apistore.cybersoft.edu.vn/api/Product/addNew",
        newProduct,
      );

      console.log("👉 res", res);
      alert("Thêm sản phẩm thành công");
      props.getProducts(); // gọi lại api để load lại danh sách sản phẩm
      formProduct.resetForm(); // reset lại formik về giá trị ban đầu
      // để formik và input có thể tương tác qua lại với nhau thì ở input cần có value={formProduct.values.name} và onChange={formProduct.handleChange}
    },
  });
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#modalId"
      >
        Thêm mới
      </button>
      <div
        className="modal fade"
        id="modalId"
        tabIndex={-1}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                Thêm sản phẩm
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form
                action=""
                onSubmit={formProduct.handleSubmit}
                onReset={formProduct.resetForm}
                style={{ width: "80%" }}
                className="mx-auto"
              >
                <div className="mb-3">
                  <label>Tên sản phẩm</label>
                  <input
                    className="form-control"
                    name="name"
                    // onChange={formProduct.handleChange}
                    // value={formProduct.values.name}
                    {...formProduct.getFieldProps("name")}
                  />
                </div>
                <div className="mb-3">
                  <label>Giá</label>
                  <input
                    className="form-control"
                    name="price"
                    // onChange={formProduct.handleChange}
                    {...formProduct.getFieldProps("price")}
                  />
                </div>
                <div className="mb-3">
                  <label>Mô tả</label>
                  <input
                    className="form-control"
                    name="description"
                    // onChange={formProduct.handleChange}
                    {...formProduct.getFieldProps("description")}
                  />
                </div>

                <div className="mb-3">
                  <label>Số lượng</label>
                  <input
                    type="number"
                    className="form-control"
                    name="quantity"
                    // onChange={formProduct.handleChange}
                    {...formProduct.getFieldProps("quantity")}
                  />
                </div>
                <div className="mb-3">
                  <label>Hình ảnh</label>
                  <input
                    className="form-control"
                    name="imgLink"
                    // onChange={formProduct.handleChange}
                    {...formProduct.getFieldProps("imgLink")}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Thêm sản phẩm
                </button>
                <button type="reset" className="btn btn-danger mx-2">
                  Reset
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Huỷ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}