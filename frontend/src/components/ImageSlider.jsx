import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Apni images yahan import karein
import img1 from '../assets/gay.jpeg';
import img2 from '../assets/stock.jpeg';
import img3 from '../assets/single.jpeg';
import img4 from '../assets/maurti.jpeg';
import img5 from '../assets/maai.jpeg';


const slides = [img1, img2, img3, img4, img5];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [touchStart, setTouchStart] = useState(null);
  const timerRef = useRef(null);

  const goTo = (index, dir) => {
    setDirection(dir);
    setCurrent((index + slides.length) % slides.length);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent(prev => (prev + 1) % slides.length);
    }, 3500);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) { goTo(current + 1, 1); }
      else          { goTo(current - 1, -1); }
      resetTimer();
    }
    setTouchStart(null);
  };

  const variants = {
    enter:  (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <div className="relative w-full px-1 sm:px-0 max-w-5xl mx-auto">

      {/* Slider Box */}
      <div
  className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-stone-100 shadow-md"
  style={{ aspectRatio: window.innerWidth < 640 ? '4/3' : '17/9' }}
  onTouchStart={handleTouchStart}
  onTouchEnd={handleTouchEnd}
>
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={slides[current]}
              alt={`Slide ${current + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Prev/Next — mobile pe chhote, desktop pe thode bade */}
        <button
          onClick={() => { goTo(current - 1, -1); resetTimer(); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-stone-800 w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-base sm:text-xl shadow transition-all active:scale-95"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          onClick={() => { goTo(current + 1, 1); resetTimer(); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-stone-800 w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-base sm:text-xl shadow transition-all active:scale-95"
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { goTo(i, i > current ? 1 : -1); resetTimer(); }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? 'w-5 bg-orange-700' : 'w-1.5 bg-stone-300'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default ImageSlider;
