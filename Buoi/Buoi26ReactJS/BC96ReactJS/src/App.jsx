import { Route, Routes } from "react-router-dom";
import ApiDemo from "./components/ApiAxios/ApiDemo";
import Content from "./components/Content";
import DataBinding from "./components/DataBinding";
import EventDemo from "./components/EventDemo";
import ExerciseCart from "./components/ExGioHang/ExerciseCart";
import Footer from "./components/Footer";
import FormDemo from "./components/Formik/FormDemo";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
// import PropsComponent from "./components/Props/PropsComponent";
import StateDemo from "./components/StateDemo";
import Home from "./pages/Home";
import MainLayout from "./components/Layout/MainLayout";
import AdminLayout from "./components/Layout/Admin/AdminLayout";
import DashboardAdmin from "./pages/Admin/DashboardAdmin";
import Setting from "./pages/Admin/Setting";

function App() {
  // return đúng 1 tag <> </>
  return (
    // <div>
    //   {/* <Header />
    //   <div className="row g-0">
    //     <div className="col-5">
    //       <Navigation />
    //     </div>
    //     <div className="col-7">
    //       <Content />
    //     </div>
    //   </div>

    //   App

    //   <Footer /> */}
    //   {/* <DataBinding /> */}
    //   {/* <EventDemo /> */}
    //   {/* <StateDemo /> */}
    //   {/* <PropsComponent/> */}
    //   {/* <ExerciseCart /> */}
    //   <ApiDemo />
    //   {/* <FormDemo /> */}
    // </div>
    <Routes>
      {/*  mỗi route là 1 web page và render component tương ứng trong element */}

      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/api-demo" element={<ApiDemo />} />
        <Route path="/form-demo" element={<FormDemo />} />
      </Route>
      {/*  tạo layout admin  bên trong có 1 số page là Admin, Setting */}
      {/* ROUTE cho layoiut của admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<DashboardAdmin />} />
        <Route path="setting" element={<Setting />} /> {/* admin/setting */}
      </Route>
    </Routes>
  );
}

export default App;
