import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <div className="text-center mt-24">
        <Header></Header>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default MainLayout;
