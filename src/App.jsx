import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Blog from "./pages/Blog";
import Books from "./pages/Books";
import Events from "./pages/Events";
import Connect from "./pages/Connect";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/events" element={<Events />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
