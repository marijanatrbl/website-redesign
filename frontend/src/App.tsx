import "./App.css";
import { Routes, Route } from "react-router-dom";

// komponente
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// stranice
import Home from "./pages/Home";
import Apartments from "./pages/Apartments";
import FindUs from "./pages/FindUs";
import Contact from "./pages/Contact";

// funkcija za resetovanje pozicije prilikom menjanja strana
import ScrollToTop from "./components/ScrollToTop.tsx";

function App() {
  return (
    <>
      <div className="app">
        <ScrollToTop />

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/findus" element={<FindUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
