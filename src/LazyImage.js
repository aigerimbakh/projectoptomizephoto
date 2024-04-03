import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const imageRef = useRef();

  useEffect(() => {
    let observer;
    const currentImage = imageRef.current;

    if (currentImage) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            setImageSrc(src);
            observer.unobserve(currentImage);
          }
        });
      });

      observer.observe(currentImage);
    }

    return () => {
      if (observer && currentImage) {
        observer.unobserve(currentImage);
      }
    };
  }, [src]);

  return <img ref={imageRef} src={imageSrc} alt={alt} />;
};

export default LazyImage;
