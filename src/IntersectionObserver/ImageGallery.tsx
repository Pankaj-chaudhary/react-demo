import React, { useEffect, useCallback, useRef } from 'react';

interface ImageGalleryProps {
  images: string[];
}
const styles = {
    galleryContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 200px)',
      gap: '10px',
    },
    imageWrapper: {
      width: '200px',
      height: '200px',
    },
    image: {
      width: '100%',
      height: '100%',
      backgroundColor: '#f0f0f0',
    },
  };

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {  
  const imgRefs = useRef<any>([]);
  const handleIntersection = useCallback((entries: any, observer: any) => {
    entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          const img = entry.target;          
          setTimeout(() => {
              img.src = img.dataset.src;
              observer.unobserve(img);
          }, 1000); // Timeout set to 2 seconds (2000 milliseconds)
        }
    });
}, []);

useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
        rootMargin: '100px',
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
        observer.observe(img);
    });

    return () => {
        observer.disconnect();
    };
}, [handleIntersection]);

return (
    <div style={styles.galleryContainer}>
      {images.map((src, index) => (
          <div key={index} style={styles.imageWrapper}>
          <img
              ref={(el) => (imgRefs.current[index] = el)}
              data-src={src}
              src=""
              alt=""
              style={styles.image}
          />
          </div>
      ))}
    </div>
);
};

export default ImageGallery;
