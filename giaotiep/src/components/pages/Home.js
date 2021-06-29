import "../../App.css";
import React from "react";
import CoursesSection from "../CoursesSection";
import Cards from "../Cards";
import Footer from "../Footer";
import Schedule from "../Schedule";

function Home() {
  return (
    <>
      <CoursesSection />
      <Cards />
      <Schedule />
      <Footer />
    </>
  );
}

export default Home;
