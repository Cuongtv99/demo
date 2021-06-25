import "../../App.css";

import React from "react";
import CoursesSection from "../CoursesSection";
import Cards from "../Cards";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <CoursesSection />
      <Cards />
      {/* <ScheduleItem /> */}
      <Footer />
    </>
  );
}

export default Home;
