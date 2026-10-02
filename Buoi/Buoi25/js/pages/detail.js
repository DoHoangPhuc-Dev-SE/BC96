import { getProductByID } from "../services/productService.js";

//
const productDetail = document.querySelector("#productDetail");
const loading = document.querySelector("#loading");
const relatedProduct = document.querySelector("#relatedProduct");
 

// id từ url
const id = new URLSearchParams(window.location.search).get("id");
const demo = new URLSearchParams(window.location.search).get("demo");

console.log("👉 id", id);
console.log("👉 demo", demo);
// GET BY ID
async function loadProductDetail() {
  try {
    // bật loading
    loading.classList.remove("d-none");
    let prod = await getProductByID(id);

    console.log("👉 prod", prod);
    // gọi hàm render detail
    renderProduct(prod)
  } catch (err) {
    console.error(err);
  } finally {
    loading.classList.add("d-none");
  }
}

// RENDER SP

function renderProduct(product) {
  const sizeHTML = product.size
    .map(
      (sz) => ` <button
            class="btn btn-outline-dark me-2 mb-2">
            ${sz}
          </button>`,
    ).join("");
  productDetail.innerHTML = `<div class="row align-items-center">
          <div class="col-md-6">
            <img
              src="${product.image}"
              alt="${product.name}"
              class="detail-image"
            />
          </div>
          <div class="col-md-6">
            <h1 class="text-capitalize">${product.name}</h1>
            <h3 class="text-danger my-3">$${product.price}</h3>
            <p>${product.description}</p>
            <p>
              <strong>Số lượng:</strong>
              ${product.quantity}
            </p>
            <div class="my-3">
              <strong> Size: </strong>
              <div class="mt-2">${sizeHTML}</div>
            </div>
            <button class="btn btn-dark btn-lg">Thêm vào giỏ hàng</button>
          </div>
        </div>`;

//  DOM UI CHO SP LIÊN QUAN

    relatedProduct.innerHTML= product.relatedProducts.map(item=>
        `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card product-card h-100">
              <img
                src="${item.image}"
                class="card-img-top"
                alt="${item.name}"
              />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title text-capitalize">${item.name}</h5>
                <p class="text-secondary">${product.shortDescription}</p>
                <p class="price mt-auto">${item.price}</p>
                <a href="./detail.html?id=${item.id}" class="btn btn-dark">
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>
        `
    ).join("")
}







loadProductDetail();