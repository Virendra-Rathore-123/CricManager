import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-160px)] p-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
