import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Styles from "./Layout.module.css";
const Layout = ({ children }) => {
  return (
    <div className={Styles.App}>
      <Header />
      <div className={Styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
