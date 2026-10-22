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

function App() {
// return đúng 1 tag <> </>
return (
<div>
{/* <Header />
     <div className="row g-0">
       <div className="col-5">
         <Navigation />
       </div>
       <div className="col-7">
         <Content />
       </div>
     </div>

     App

     <Footer /> */}
    {/* <DataBinding /> */}
    {/* <EventDemo /> */}
    {/* <StateDemo /> */}
    {/* <PropsComponent/> */}
    {/* <ExerciseCart /> */}
    <ApiDemo />
    {/* <FormDemo /> */}
</div>
);
}

export default App;