//

import { PRODUCT_URL } from "../config.js";
import { ProductType } from "../models/ProductType.js";
import { getProducts } from "../services/productService.js";

const productList = document.querySelector("#productList");
const loading = document.querySelector("#loading");
const btnReload = document.querySelector("#btnReload");

// GET PRODUCT
async function loadProducts() {
  try {
    // bật loading
    loading.classList.remove("d-none"); // khi bd gọi api thì hiển thị loading
    // var res = await fetch(PRODUCT_URL)
    // var data  = await res.json()

    let dsProd = await getProducts();   
    renderProducts(dsProd);
  } catch (err) {
    productList.innerHTML = `
            <div class="col-12">
                <div class="alert alert-danger">
                Không thể tải dữ liệu sản phẩm
                </div>
            </div>
            `;
  } finally {
    loading.classList.add("d-none");
  }
}
// RENDER PRODUCT
function renderProducts(lst) {
  let html = lst.map((item) => {
    if (item instanceof ProductType) {
      let { image, shortDescription, description, price, quantity, id } = item;
      return `<div class="col-12 col-md-6 col-lg-4">
                    <div class="card product-card h-100">
                    <img  src="${image}" class="card-img-top" alt="${name}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title product-name">${name}</h5>
                        <p class="card-text text-secondary">${shortDescription || description} </p>
                        <p class="price mt-auto">$${price}</p>
                        <p>Số lượng:<strong>${quantity}</strong></p>
                        <a href="./detail.html?id=${id}"class="btn btn-dark">Xem chi tiết</a>
                    </div>
                    </div>
                </div>`;
    }
  });
  productList.innerHTML = html.join("");
}

// RELOAD
btnReload.addEventListener("click",()=>loadProducts())

loadProducts();
/**
loadProducts 
⬇
getProducts()  đến từ product service
        axios để gọi api 
        map về ProductType (models)
⬇
renderProducts
⬇
dom html lên UI 
⬇
Tắt loading



 */