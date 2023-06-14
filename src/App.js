import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Features from "./Features";
import Contact from "./Contact";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
<Contact />;

export default App;
