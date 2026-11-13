import axios from "axios";

const api = axios.create({
    baseURL: "https://apistore.cybersoft.edu.vn/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a request interceptor
// gửi đi
api.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        const accessToken = localStorage.getItem("accessToken");
        // console.log(config.url, accessToken);

        // console.log({ config });
        config.headers.Authorization = accessToken

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
// nhận kết qủa từ api
api.interceptors.response.use(
    function (response) {
        // Thành công thì cấu hình trong này - đầu 2
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
       
        return response;
    },
    function (error) {
        // thất bại  đầu 4XX, 5XX,...
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
         // 401 , 403 => xoá accessToken và đá ra login
         
        // console.log("👉 error", error.response);
        // console.log("👉 error", error);
        // var statusCode = error.response.status
        // if(statusCode == 401 || statusCode == 403){
        //     localStorage.removeItem("accessToken")
        //     window.location.href("/login")
        // }
        return Promise.reject(error);
    },
);

export default api;
