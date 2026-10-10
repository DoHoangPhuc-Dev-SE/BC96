import Content from "./components/Content";
import DataBinding from "./components/DataBinding";
import EventDemo from "./components/EventDemo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import StateDemo from "./components/StateDemo";

function App() {
// return đúng 1 tag <> </>
return (
<div>
      <Header />
      {/* <Header />
     <div className="row g-0">
       <div className="col-5">
         <Navigation />

     App

      <Footer />
      <Footer /> */}
      <DataBinding />
      {/* <EventDemo /> */}
      {/* <StateDemo /> */}
</div>
);
}
export default App;