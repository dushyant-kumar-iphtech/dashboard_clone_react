import React from "react";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Analytics from "../pages/Analytics";
import Fintech from "../pages/Fintech";
import Main from "../pages/Main";

const Dashboard = () => {
  return (
    <>
      <div className="w-full bg-white">
        <Header />
      </div>
      <div className="w-full h-full ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/fintech" element={<Fintech />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default Dashboard;
