import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Upload from "../pages/Upload";
import Profile from "./Profile";
import Widget from "./Widget";

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/widget/upload" element={<Widget />} />
      <Route path="/profile/upload" element={<Profile />} />
    </Routes>
  );
}

export default Allroutes;
