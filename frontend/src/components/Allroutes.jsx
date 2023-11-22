import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Upload from "../pages/Upload";
import Profile from "./Profile";
import Widget from "./Widget";
import Deploy from "./Deploy";
import Pricing from "./Pricing";

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/widget/upload" element={<Widget />} />
      <Route path="/profile/upload" element={<Profile />} />
      <Route path="/deploy/upload" element={<Deploy />} />
      <Route path="/pricing/upload" element={<Pricing />} />
    </Routes>
  );
}

export default Allroutes;
