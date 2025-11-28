import axios from "axios";
import React, { useEffect, useState } from "react";
import Section from "./components/Section/Section";

const TopAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    axios.get("https://qtify-backend.labs.crio.do/albums/top")
      .then((res) => setAlbums(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Section 
      title="Top Albums"
      data={collapsed ? albums.slice(0, 6) : albums} 
      collapseEnabled={true}
      isCollapsed={collapsed}
      onCollapseToggle={() => setCollapsed(!collapsed)}
    />
  );
};

export default TopAlbums;
