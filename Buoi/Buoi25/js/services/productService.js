import { BASE_URL, PRODUCT_URL } from "../config.js";
import { ProductType } from "../models/ProductType.js";

// GET ALL PRODUCT
export async function getProducts() {
  try {
    const response = await axios.get(PRODUCT_URL);
    const data = response.data.content
    console.log("👉 data", data);
    // map về ProductType
    return data.map(item => new ProductType(item));
  } catch (err) {
    console.error("[Lỗi] :", error);
  }
}

// GET PRODUCT BY ID
export async function getProductByID(id){
  try{
    const response = await axios.get(`${PRODUCT_URL}/getbyid?id=${id}`)
    return response.data.content
  }
  catch(err){
    console.log("✅ err", err);
  }
}