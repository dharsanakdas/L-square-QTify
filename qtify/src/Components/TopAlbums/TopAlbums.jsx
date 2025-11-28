import React, { useEffect, useState } from "react";
import axios from "axios";
import Section from "../Section/Section";
import AlbumCard from "../Card/Card";
import Carousel from "../Carousel/Carousel";

import styles from "./TopAlbums.module.css";

export default function TopAlbums() {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    axios.get("https://qtify-backend.labs.crio.do/albums/top")
      .then((res) => setAlbums(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Section
      title="Top Albums"
      data={albums}
      collapseEnabled={true}
      isCollapsed={isCollapsed}
      onCollapseToggle={() => setIsCollapsed((s) => !s)}
    >
     
      <div className={styles.contentArea}>
        {!isCollapsed ? (
          <div className={styles.grid}>
            {albums.map((a) => (
              <AlbumCard key={a.id} album={a} />
            ))}
          </div>
        ) : (
          <div className={styles.carouselWrapper}>
            {/* <LeftNav className={styles.leftNav} /> */}
            <Carousel
              items={albums}
              renderItem={(album) => <AlbumCard album={album} />}
            />
            {/* <RightNav className={styles.rightNav} /> */}
          </div>
        )}
      </div>
    </Section>
  );
}
