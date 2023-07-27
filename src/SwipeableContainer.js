// Based on code used by https://admin.dcode.site/
import { createContext, useEffect, useRef, useState } from "react";

export const SwiperNavigationFunctions = createContext(() => {});
export default function SwipeableContainer({
  slides = (switchPage) => ({}),
  currentPage,
  onChange,
  className
}) {
  const swiperElRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [aboutToSwitchTo, setAboutToSwitch] = useState(0);

  function switchPage(direction = "next", id) {
    const swiperEl = swiperElRef.current;
    const swiper = swiperEl.swiper;

    // detect swiper container fully transitioned to next slide
    swiperElRef.current.addEventListener("transitionend", () => {
      if (typeof id !== "undefined") {
        setCurrentSlide(pages.findIndex((slide) => slide.id === id));
        setAboutToSwitch(pages.findIndex((slide) => slide.id === id));
      } else {
        setCurrentSlide(swiper.activeIndex);
        setAboutToSwitch(swiper.activeIndex);
        onChange?.(swiper.activeIndex);
      }
      // Once the transition is done, remove the event listener
      swiperElRef.current.removeEventListener("transitionend", () => {});
    });

    if (typeof id !== "undefined") {
      setAboutToSwitch(pages.findIndex((slide) => slide.id === id));
      return swiper.slideTo(pages.findIndex((slide) => slide.id === id));
    }
  }

  const pages = slides(switchPage);

  useEffect(() => {
    if (currentPage) {
      switchPage(null, currentPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);
  return (
      <swiper-container
        allow-touch-move={false}
        ref={swiperElRef}
        class={"h-full w-full text-neutral-content" + (className ? " " + className : "")}
        className={"h-full w-full text-neutral-content" + (className ? " " + className : "")}
      >
        {pages.map((pageObject, index) => (
          <swiper-slide key={index}>

              {(currentSlide === index || aboutToSwitchTo === index) &&
                (pageObject?.page ?? "Uh oh, something went wrong!")}
          </swiper-slide>
        ))}
      </swiper-container>
  );
}
