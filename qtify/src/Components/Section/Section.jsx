import React from "react";
import Button from "../Button/Button";
import styles from "./Section.module.css";

export default function Section({
  title,
  collapseEnabled,
  isCollapsed,
  onCollapseToggle,
  children,
}) {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>{title}</h2>
        {collapseEnabled && (
          <Button onClick={onCollapseToggle}>
            {isCollapsed ? "Show All" : "Collapse"}
          </Button>
        )}
      </div>

      <div className={styles.sectionBody}>
        {children}
      </div>
    </section>
  );
}
