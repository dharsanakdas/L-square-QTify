import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";

export default function Carousel({
  items = [],
  renderItem,
  children,
  slidesPerViewConfig,
  spaceBetween = 16,
}) {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const defaultBreakpoints = {
    0: { slidesPerView: 1.2 },
    480: { slidesPerView: 2.2 },
    768: { slidesPerView: 3.2 },
    1024: { slidesPerView: 4.2 },
    1280: { slidesPerView: 5.2 },
    1440: { slidesPerView: 6.2 },
    1680: { slidesPerView: 7.0 },
  };

  const breakpoints = slidesPerViewConfig || defaultBreakpoints;

  return (
    <div className={styles.carouselWrapper}>
      <button
        type="button"
        aria-label="Previous"
        ref={(node) => setPrevEl(node)}
        className={styles.navLeft}
      >
        ‹
      </button>

      <div className={styles.swiperBox}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={spaceBetween}
          breakpoints={breakpoints}
          navigation={{
            prevEl,
            nextEl,
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevEl;
              swiper.params.navigation.nextEl = nextEl;
            }
          }}
          onInit={(swiper) => {
            try {
              swiper.navigation.init();
              swiper.navigation.update();
            } catch (e) {
            }
          }}
        >
          {children
            ? React.Children.map(children, (child, i) => (
                <SwiperSlide key={i}>{child}</SwiperSlide>
              ))
            : items.map((it, idx) => (
                <SwiperSlide key={it?.id ?? idx}>
                  {renderItem ? renderItem(it) : null}
                </SwiperSlide>
              ))}
        </Swiper>
      </div>

      <button
        type="button"
        aria-label="Next"
        ref={(node) => setNextEl(node)}
        className={styles.navRight}
      >
        ›
      </button>
    </div>
  );
}
