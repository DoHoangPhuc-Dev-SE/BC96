import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
  // return đúng 1 tag <> </>
  return (
    <div>
      <Header />
      <div className="row g-0">
        <div className="col-5">
          <Navigation />
        </div>
        <div className="col-7">
          <Content />
        </div>
      </div>

      App

      <Footer />
    </div>
  );
}

export default App;