import { create } from "zustand";
import productApi from "../api/productApi";

const useProductStore = create((set, get) => ({
  // =============
  // STATE
  // =============
  products: [],
  pageSize: 10,
  pageIndex: 1,
  keywords: "",
  totalRow: 0,
  categories: [],

  // =============
  // ACTION
  // =============
  getProducts: async () => {
    try {
      // tạm thời không truyền tham số để test trước
      // không truyền thì lấy default trong hàm getpaging
      // lay ra bang get
      const { pageIndex, pageSize, keywords } = get();
      var response = await productApi.getPaging(pageIndex, pageSize, keywords);

      // console.log("👉 response", response.data.content.items);

      // set product = response.data.content.items
      set({
        products: response.data.content.items,
        totalRow: response.data.content.totalRow,
      });
    } catch (err) {
      console.log(err);
    }
  },
  setPageIndex: (pIndex) => {
    set({
      pageIndex: pIndex,
    });
  },
  setPageSize: (pageSize) => {
    set({ pageSize });
  },
  setKeyword: (keywords) => {
    set({ keywords });
  },
  addProduct: async (obj) => {
    try {
      const response = await productApi.addProductApi(obj);
      // thành công thì load lại ds sản phẩm
      await get().getProducts();
      console.log("✅ Thêm thành công");
    } catch (error) {
      console.log("✅ Lỗi thêm sản phẩm");
    }
  },
  getCategories: async () => {
    try {
      const response = await productApi.getCategoryApi();

      // console.log("👉 category", response.data.content);
      set({ categories: response.data.content });
    } catch (error) {}
  },

  // update
  updateProduct: async (obj) => {
    try {
      const response = await productApi.updateProductApi(obj);
      // thành công thì load lại ds sản phẩm
      await get().getProducts();
      console.log("✅ Cập nhật thành công");
    } catch (error) {
      console.log("✅ Lỗi cập nhật sản phẩm");
    }
  },
  // getproductById
  getProductById: async (id) => {
    try {
      const res = await productApi.getProductById(id);
      // không quản lý state - giá trị trả về trong zustand
      return res.data.content;
    } catch (error) {
      console.log("✅ Lỗi lấy chi tiết", error);
    }
  },
}));

export default useProductStore;
