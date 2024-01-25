import { Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Carousel from "./components/carousel/Carousel";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carousel" element={<Carousel />} />
      </Routes>
    </div>
  );
}

export default App;
