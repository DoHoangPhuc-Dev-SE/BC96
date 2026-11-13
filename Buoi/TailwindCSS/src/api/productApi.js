import api from "./axios";

export const getProductPaging = () => {};
export const addProduct = () => {};
// GET api/Product/getpaging
// productApi.getPaging
// productApi.addProduct
const productApi = {
  getPaging: (pageIndex = 1, pageSize = 10, keywords = "") => {
    //
    return api.get(
      `/Product/getpaging?pageIndex=${pageIndex}&pageSize=${pageSize}&keywords=${keywords}`,
    );
  },
  // thêm mới
  addProductApi: (obj) => {
    return api.post(`/Product`, obj);
  },
  // xoá
  deleteProductByIdApi: (id) => {
    return api.delete(`/Product/${id}`);
  },
  // update
  updateProductApi: (obj) => {
    return api.put(`/Product`, obj);
  },
  // lấy chi tiết
  getProductById: (id) => {
    return api.get(`/Product/getbyid?id=${id}`);
  },

  // lấy ra ds category
  getCategoryApi: () => {
    return api.get(`/Product/getAllCategory`);
  },
};

export default productApi;
