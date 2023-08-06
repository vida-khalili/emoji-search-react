import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="container-xs d-grid  justify-items-center position-relative p-3">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
