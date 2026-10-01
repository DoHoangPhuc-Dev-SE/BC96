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