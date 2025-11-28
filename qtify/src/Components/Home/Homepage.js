import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import TopAlbums from "../TopAlbums/TopAlbums";
import NewAlbums from "../NewAlbums/NewAlbums";
import Songs from "../Songs/Songs";
function Homepage() {
  return (
    <div style={{ backgroundColor: "#121212", minHeight: "100vh"}}>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
      {/* <Hero /> */}

      <div style={{ padding: "0 32px" }}>

      <TopAlbums />

      <NewAlbums />
</div>

      <Songs />
    </div>
  );
}

export default Homepage;
