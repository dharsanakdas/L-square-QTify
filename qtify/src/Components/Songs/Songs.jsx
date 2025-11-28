import React, { useEffect, useState } from "react";
import axios from "axios";
import Section from "../Section/Section";
import Carousel from "../Carousel/Carousel";
import AlbumCard from "../Card/Card";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styles from "./Songs.module.css";

export default function Songs() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]); // will be array of { key, label }
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    // fetch songs
    axios
      .get("https://qtify-backend.labs.crio.do/songs")
      .then((res) => {
        setSongs(Array.isArray(res.data) ? res.data : res.data || []);
      })
      .catch((err) => {
        console.error("Songs fetch failed", err);
        setSongs([]);
      });

    // fetch genres and normalize to objects { key, label }
    axios
      .get("https://qtify-backend.labs.crio.do/genres")
      .then((res) => {
        let list = [];
        if (Array.isArray(res.data)) list = res.data;
        else if (Array.isArray(res.data.genres)) list = res.data.genres;
        else if (Array.isArray(res.data.data)) list = res.data.data;

        const normalized = list.map((g) => {
          if (!g && g !== 0) return null;
          if (typeof g === "string") return { key: g, label: g };
          if (typeof g === "object") {
            const key = g.key || g.id || g.name || g.genre || (g.label ? g.label : null);
            const label = g.label || g.name || g.genre || g.key || key;
            return { key: String(key), label: String(label) };
          }
          return null;
        }).filter(Boolean);

        setGenres([{ key: "All", label: "All" }, ...normalized]);
      })
      .catch((err) => {
        console.error("Genres fetch failed", err);
        setGenres([{ key: "All", label: "All" }]);
      });
  }, []);

  const getSongGenreKey = (song) => {
    if (!song) return "";
    const g = song.genre;
    if (!g && g !== 0) return "";
    if (typeof g === "string") return g;
    if (typeof g === "object") return g.key || g.name || g.label || "";
    return "";
  };

  // Filter logic
  const filteredSongs =
    selectedGenre === "All"
      ? songs
      : songs.filter((song) => getSongGenreKey(song) === selectedGenre);

  return (
    <div className={styles.songsWrapper}>
      <Section title="Songs" collapseEnabled={false} />

      <div className={styles.tabsArea}>
        <Tabs
  value={selectedGenre}
  onChange={(e, val) => setSelectedGenre(val)}
  variant="scrollable"
  scrollButtons={false}
  TabIndicatorProps={{ style: { display: "none" } }} // hide default blue indicator
>
  {genres.map((genre) => (
    <Tab
      key={genre.key}
      label={genre.label}
      value={genre.key}
      disableRipple
      classes={{ root: styles.genreTab, selected: styles.activeTab }}
    />
  ))}
</Tabs>

      </div>

      <Carousel
        items={filteredSongs}
        
renderItem={song => { console.log('song->', song); return <AlbumCard album={song} isSong /> }}
      />
    </div>
  );
}
