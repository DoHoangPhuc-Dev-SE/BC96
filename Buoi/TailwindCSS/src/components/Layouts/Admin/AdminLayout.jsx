import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAuth } from "../../../zustand/authStore";
import { useEffect } from "react";

export default function AdminLayout() {
  // layout admin
  // kiểm tra nếu đã đăng nhập thì mới vào được
  let { userInfo, isCheckingAuth, logout } = useAuth();

  console.log("👉 isCheckingAuth", isCheckingAuth);
  console.log("👉 userInfo", userInfo);

  // Bước 1 chờ chạy getprofile
  if (isCheckingAuth) {
    // đang kiem tra
    return <p>Đang kiểm tra thông tin đăng nhập</p>
  }
  // Bước 2: userInfo
  // người bình thường | chưa chưa đăng nhập
  if (!userInfo || userInfo.userTypeId !== "ADMIN") {
    // logout()
    return <Navigate to="/"/>;
  }

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        {/* HEADER */}
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
          <div>
            <h2 className="text-lg font-semibold text-slate-800">Dashboard</h2>
          </div>

          <button
            className="
              rounded-lg border border-slate-200
              px-4 py-2
              text-sm font-medium text-slate-700
              transition
              hover:bg-slate-100
            "
            onClick={logout}
          >
            Đăng xuất
          </button>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
