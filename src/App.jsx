import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";

import Home from "./components/Home";
import About from "./components/About";
import Qualifications from "./components/Qualifications";
import Projects from "./components/Projects"; 
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <BackToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/qualifications" element={<Qualifications />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
