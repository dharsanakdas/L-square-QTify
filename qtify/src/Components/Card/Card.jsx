import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

export default function AlbumCard({ album, isSong = false }) {

  console.log(album)

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img src={album.image} alt={album.title} className={styles.image} />
        </div>

        <div className={styles.bottom}>
         
          {isSong ? <Chip label={`${album.likes} likes`}
            className={styles.chip}
            sx={{
              backgroundColor: "#121212",
              color: "#FFFFFF",
              fontSize: "11px",
              height: "25px",
              borderRadius: "10px",
            }} /> :  <Chip
            label={`${album.follows} Follows`}
            className={styles.chip}
            sx={{
              backgroundColor: "#121212",
              color: "#FFFFFF",
              fontSize: "11px",
              height: "25px",
              borderRadius: "10px",
            }}
          />}
        </div>
      </div>
      <p className={styles.title}>{album.title}</p>
    </div>
  );
}
