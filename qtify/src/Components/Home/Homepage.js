import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
// import Hero from "../Hero/Hero";
// import Logo from "../Logo/Logo";   // Only needed if you use Logo directly here

function Homepage() {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
      {/* <Hero /> */}
    </div>
  );
}

export default Homepage;
