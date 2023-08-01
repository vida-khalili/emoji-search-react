import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="container-sm d-grid  justify-items-center position-relative p-5">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
