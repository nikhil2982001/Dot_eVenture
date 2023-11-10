import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Features from "./Features";
import Offer from "./Offer";
import Contact from "./Contact";
function Layout() {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <Offer />
      <Contact />
      <footer></footer>
    </div>
  );
}

export default Layout;
