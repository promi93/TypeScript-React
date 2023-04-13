import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FetchComponent from "./components/FetchComponent";
import MyNav from "./components/MyNav";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNav />
        <Routes>
          <Route path="/home" element={<FetchComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
