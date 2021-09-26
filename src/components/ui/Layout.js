import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <div className="container">
        <Header />
        <main>{props.children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
