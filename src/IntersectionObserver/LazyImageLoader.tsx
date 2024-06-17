import React from 'react';
import ImageGallery from './ImageGallery';
const imageUrls = [
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img1.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img2.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img3.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img4.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img5.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img6.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img7.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img1.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img2.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img3.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img4.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img5.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img6.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img7.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img1.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img2.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img3.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img4.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img5.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img6.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img7.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img1.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img2.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img3.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img4.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img5.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img6.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img7.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img1.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img2.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img3.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img4.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img5.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img6.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img7.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img1.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img2.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img3.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img4.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img5.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img6.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img7.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img1.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img2.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img3.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img4.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img5.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img6.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img7.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img1.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img2.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img3.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img4.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img5.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img6.jpg',
  'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/lazy_loading/preview_assets/img7.jpg'
  // add more URLs as needed
];
export const LazyImageLoader = () => {
  return (
    <div>
        <ImageGallery images={imageUrls}/>
      </div>
  );
}
