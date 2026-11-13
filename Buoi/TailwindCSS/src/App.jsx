import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/Layouts/Admin/AdminLayout";
import AuthLayout from "./components/Layouts/AuthLayout.jsx";
import MainLayout from "./components/Layouts/MainLayout";
import Dashboard from "./pages/Admin/Dashboard";
import Game from "./pages/Game.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { useAuth } from "./zustand/authStore.js";
import ManagerProduct from "./pages/Admin/ManagerProduct.jsx";
import TestAntd from "./pages/TestAntd.jsx";
import ProductDetail from "./pages/Admin/ProductDetail.jsx";
import ProductTest from "./pages/Admin/ProductTest.jsx";
// Có thể đặt tên tuỳ ý khi import mà không cần đụng đến file component
import LayoutWithCss from "./components/demo/TestCss.jsx";
import { TestExport_1 as TestExport, TestExport_2 } from "./components/demo/TestExport.jsx";
import { DemoMemo } from "./pages/DemoMemo.jsx";
import { DemoCallback } from "./pages/DemoCallback.jsx";
// import heroImg from './assets/hero.png'

function App() {
    
    const getInfo = useAuth((state) => state.getInfo);
    useEffect(() => {
        getInfo();
    }, [getInfo]);
    
    return (
        <Routes>
            {/* Layout web user */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="game" element={<Game />} />
                <Route path="antd" element={<TestAntd />} />
                <Route path="test" element={<LayoutWithCss />} />
                <Route path="test-export-1" element={<TestExport />} />
                <Route path="test-export-2" element={<TestExport_2 />} />
                <Route path="memo" element={<DemoMemo />} />
                <Route path="callback" element={<DemoCallback />} />
            </Route>

            {/* Layout đăng ký đăng nhập */}
            <Route element={<AuthLayout />}>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Route>

            {/* layout Admin */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="products" element={<ManagerProduct />} /> 
                <Route path="products/:id" element={<ProductDetail />} /> 
                <Route path="products/test" element={<ProductTest />} /> 

            </Route>
        </Routes>
    );
}

export default App;
