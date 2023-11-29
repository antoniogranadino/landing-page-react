import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
  return (
    <>
      <NavBar />
      <body className="mt-5">
        <div className="container">
          <div className="row">
            <Header />
            <Card />
          </div>
        </div>
      </body>
        <Footer />
    </>
  );
};

export default Home;
