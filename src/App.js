/* eslint-disable no-undef */
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MenShoes from "./pages/MenShoes";
import WomenShoes from "./pages/WomenShoes";
import KidShoes from "./pages/KidShoes";
import SportShoes from "./pages/SportShoes";
import DOD from "./pages/DOD";
import { Tooltip } from "react-tooltip";

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <div>
        <Navbar></Navbar>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/men" element={<MenShoes></MenShoes>}></Route>
        <Route path="/women" element={<WomenShoes></WomenShoes>}></Route>
        <Route path="/kid" element={<KidShoes></KidShoes>}></Route>
        <Route path="/sports" element={<SportShoes></SportShoes>}></Route>
        <Route path="/dod" element={<DOD></DOD>}></Route>
      </Routes>

      <ToastContainer position="top-center" />
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default App;
