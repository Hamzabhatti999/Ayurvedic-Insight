import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/appRoutes";

function App() {
  return (
    <div className="font-poppins">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
