import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import {  QueryClient, QueryClientProvider } from "@tanstack/react-query";
// bộ nhớ trung tâm của tanstack , lưu cache - (lưu tạm dự liệu trong bộ nhớ)
// để các component có thể dùng chung dữ liệu mà không cần gọi lại api
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      // cache dữ liệu trong vòng 30s
      staleTime: 30 * 1000,// 1s  = 1000 ms
      retry: 4, // hỗ trợ gọi lại api 4 lần trong trườg hợp lỗi
      refetchOnWindowFocus: false// không cần gọi lại api khi chuyển tab rồi quay lại
    }
  }
})

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </QueryClientProvider>
  // </StrictMode>,
);
