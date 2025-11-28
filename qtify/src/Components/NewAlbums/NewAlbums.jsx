import React, { useEffect, useState } from "react";
import axios from "axios";
import Section from "../Section/Section";
import AlbumCard from "../Card/Card";
import Carousel from "../Carousel/Carousel";

import styles from "./NewAlbums.module.css";

export default function NewAlbums() {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    axios.get("https://qtify-backend.labs.crio.do/albums/new")
      .then((res) => setAlbums(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Section
      title="New Albums"
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
            {/* <LeftNav /> */}
            <Carousel items={albums} renderItem={(album) => <AlbumCard album={album} />} />
            {/* <RightNav /> */}
          </div>
        )}
      </div>
    </Section>
  );
}
