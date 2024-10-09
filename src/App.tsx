import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Sidebar from "./components/Sidebar/sidebar";
// import AppRoutes from "./routes/appRoutes";
import "./index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          {/* <Route exact path="/*" element={<AppRoutes />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
