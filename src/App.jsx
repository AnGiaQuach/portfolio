import { Header } from "./Header";
import styles from "./App.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swipe.css";
import { useEffect, useState } from "react";

export function App() {
  const [slidesPerView, setSlidesPerView] = useState(4);
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 450) {
      setSlidesPerView(2);
    }
    if (window.innerWidth > 450) {
      setSlidesPerView(4);
    }
  });
  return (
    <div className={styles.AppContainer}>
      <Header />
      <div className={styles.MainHeader}>antquacking</div>
      <div className={styles.SwiperContainer}>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          className={styles.Swiper}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
