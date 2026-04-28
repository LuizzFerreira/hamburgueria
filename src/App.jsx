import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Location from "./pages/Location";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </MainLayout>
  );
}

export default App;