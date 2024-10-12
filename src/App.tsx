import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"; // Ensure this path is correct
// import backgroundImage from "./assets/bg1.png"; // Import your image

function App() {
  return (
    <div className="font-poppins">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Uncomment the next line to include additional routes */}
          {/* <Route path="/*" element={<AppRoutes />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
