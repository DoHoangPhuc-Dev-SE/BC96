window.getUserByIdAsync = getUserByIdAsync;
window.deleteUserByIdAsync = deleteUserByIdAsync;
// # HTTP Request Methods

// GET : đường dẫn endpoint / url 
// GET : api / product
// GET : {baseURL}.io/User : : gửi lên

// POST : {baseURL}.io/User : lấy về

// PUT: {baseURL}.io/User : gửi lên nhưng mang ý nghĩa cập nhật dữ liệu

// DELETE: {baseURL}.io/User : xóa tài nguyên trong server

/*
 * HTTP STATUS CODES
 * 
 * 2xx: Mã thành công
 *   - 200: Thành công
 *   - 201: Thêm mới thành công
 *   - 204: Thành công nhưng không có nội dung
 * 
 * 4xx: Mã lỗi do Client
 *   - 400: FE gửi sai thông tin
 *   - 401: Không được phép truy cập - Không xác thực danh tính (Unauthorized)
 *   - 403: Xác định được danh tính - Không đủ quyền (Forbidden)
 *   - 404: Sai đường dẫn API - Not found
 * 
 * 5xx: Lỗi do BE, server
 */

//API GET:   https://6ab7e9f49b03155d080901a0.mockapi.io/User

function getUserByFetch() {
  //fetch dùng để gửi HTTP request
  fetch("https://6ab7e9f49b03155d080901a0.mockapi.io/User")
    // then : Xử lý khi Thành công
  .then((response) => {
      console.log("✅ Thành công");
      response.json().then((dt) => {
        console.log("✅ label", dt);
      });
    })
    // catch : Xử lý khi Thất bại
    .catch((err) => {
      console.log("🙏 Thất bại");
    });
}

// async : hàm này luôn trả về Promise, để biét hàm này có chờ đợi
// await : đợi
async function demoAsync() {
  try {
    // code chạy
    console.log("✅ 1. START Try");
    // await getUserByFetch(); // đợi getUserByFetch xong thì mới đi tiếp

    let mess = await deplay();
    console.log("✅ 2.", mess);
    console.log("✅ 3. Đã gọi API XONG getUserByFetch()");

    return "hello";
    // 0 thì js không xem là lĐỗi (exception)
    // throw new Error("lỗi tự tạo")
    // abc() // gọi hàm không tồn tại
  } catch (err) {
    // code ở try mà lỗi tính chạy vào đây
    console.error("🙏 Không thể gọi hàm chưa khai báo", err);
  }
}
//Mô phỏng gọi API
function deplay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("dữ liệu đã tải xong");
    }, 5000);
  });
}

// GET ALL
const BASE_URL = "https://6a79ddb3674f43f4db11dde7.mockapi.io";
// https://6a79ddb3674f43f4db11dde7.mockapi.io/User
async function getUserByFetchAsync() {
  try {
    let response = await fetch(`${BASE_URL}/User`);

    console.log("👉 response", response);

    let data = await response.json();

    console.log("👉 data", data);
    renderUser(data);
  } catch (err) {}
}
function renderUser(ds) {
  let content = ds.map((item, idx) => {
    return `<div class="col-3">
              <div class="card text-start">
                <img class="card-img-top" src="${item.avatar}" alt="Title" />
                <div class="card-body">
                  <h4 class="card-title">${item.name}</h4>
                  <p class="card-text">${item.email}</p>
                </div>
                <div class="card-footer">
                  <button class="btn btn-sm btn-outline-success" onclick="getUserByIdAsync(${item.id})">Xem</button>
                  <button class="btn btn-sm btn-outline-danger" onclick="deleteUserByIdAsync(${item.id})">Xoá</button>
                </div>
              </div>
            </div>`;
  });
  console.log("👉 content", content);
  document.querySelector("#lstUser").innerHTML = content.join("");
}

// ================================
// GET CHI TIET
// ================================
async function getUserByIdAsync(id) {
  try {
    let response = await fetch(`${BASE_URL}/User/${id}`);
    let data = await response.json();

    console.log(`👉 data ${id}`, data);
    document.querySelector("#detail").innerHTML = `
    <div class="card mb-3" style="max-width: 540px;" >
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="${data.avatar}"
            class="img-fluid rounded-start"
            alt="Card title"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${data.name} - ${data.id}</h5>
            <p class="card-text">
              ${data.email}
            </p>
          </div>
        </div>
      </div>
    </div>
    `;
  } catch (err) {}
}

// ================================
// DELETE xoa
// ================================
async function deleteUserByIdAsync(id) {
  try {
    let response = await fetch(`${BASE_URL}/User/${id}`, {
      method: "DELETE",
    });
    let data = await response.json();
    alert("✅ User đã xoá", data);
    getUserByFetchAsync();
  } catch (err) {
    console.error("❌ Lỗi: ", err);
  }
}

// ================================
// POST them moi
// ================================
async function postUserAsync() {
  try {
    let payload = {
      createdAt: Date(),
      name: "Phuong Nga 2",
      avatar: "https://avatars.githubusercontent.com/u/202600",
      email: "phuongnga2@gmail.com",
      id: "0",
    };

    let response = await fetch(`${BASE_URL}/User`, {
      method: "POST",
      body: JSON.stringify(payload),// parse payloaf về json
      //stringify đổi từ object -> string (json )
      headers: {
        "Content-Type": "application/json", // cho phép nhận content dạng json
      },
    });
    let data = await response.json();
    alert("thêm thành công");
    getUserByFetchAsync();
  } catch (e) {}
}

getUserByFetchAsync();
// getUserByIdAsync(1);

// await demoAsync();