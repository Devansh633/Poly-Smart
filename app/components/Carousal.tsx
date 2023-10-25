'use client'
import React, { useEffect, useRef } from 'react';

const Carousal = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const items = carousel.getElementsByClassName('carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;

    const moveCarousel = () => {
      currentIndex = (currentIndex + 1) % totalItems;

      // Hide all items
      for (let i = 0; i < totalItems; i++) {
        items[i].classList.add('hidden');
      }

      // Show the current index item
      items[currentIndex].classList.remove('hidden');
    };

    // Set up interval to move carousel every 3 seconds
    const intervalId = setInterval(moveCarousel, 2000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="lg:h-[24rem] h-[16rem] md:h-[20rem] carousel carousel-vertical rounded-box" ref={carouselRef}>
  <div className="carousel-item h-full">
    <img src="/images/image-054.jpg" />
  </div> 
  <div className="carousel-item h-full">
    <img src="/images/image-055.jpg"  />
  </div> 
  <div className="carousel-item h-full">
    <img src="/images/image-056.jpg"  />
  </div> 
  <div className="carousel-item h-full">
    <img src="/images/image-057.jpg"  />
  </div> 
  <div className="carousel-item h-full">
    <img src="/images/image-058.jpg"  />
  </div> 
  <div className="carousel-item h-full">
    <img src="/images/image-059.jpg"  />
  </div> 
  <div className="carousel-item h-full">
    <img src="/images/image-060.jpg"  />
  </div>
</div>
  )
}

export default Carousal


