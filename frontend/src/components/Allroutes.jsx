import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Upload from "../pages/Upload";

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  );
}

export default Allroutes;
