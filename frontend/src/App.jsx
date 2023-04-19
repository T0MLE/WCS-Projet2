import Newsletter from "./components/Newsletter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.scss";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
