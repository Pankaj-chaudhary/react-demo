import React from 'react';
import ImageGallery from './ImageGallery';
const imageUrls: string[] = [
    'https://picsum.photos/220/320',
    'https://picsum.photos/221/321',
    'https://picsum.photos/222/322',
    'https://picsum.photos/223/323',
    'https://picsum.photos/224/324',
    'https://picsum.photos/225/325',
    'https://picsum.photos/226/326',
    'https://picsum.photos/227/327',
    'https://picsum.photos/228/328',
    'https://picsum.photos/229/329',
    'https://picsum.photos/230/330',
    'https://picsum.photos/231/331',
    'https://picsum.photos/232/332',
    'https://picsum.photos/233/333',
    'https://picsum.photos/234/334',
    'https://picsum.photos/235/335',
    'https://picsum.photos/236/336',
    'https://picsum.photos/237/337',
    'https://picsum.photos/238/338',
    'https://picsum.photos/239/339',
    'https://picsum.photos/240/340',
    'https://picsum.photos/241/341',
    'https://picsum.photos/242/342',
    'https://picsum.photos/243/343',
    'https://picsum.photos/244/344',
    'https://picsum.photos/245/345',
    'https://picsum.photos/246/346',
    'https://picsum.photos/247/347',
    'https://picsum.photos/248/348',
    'https://picsum.photos/249/349',
    'https://picsum.photos/250/350',
    'https://picsum.photos/251/351',
    'https://picsum.photos/252/352',
    'https://picsum.photos/253/353',
    'https://picsum.photos/254/354',
    'https://picsum.photos/255/355',
    'https://picsum.photos/256/356',
    'https://picsum.photos/257/357',
    'https://picsum.photos/258/358',
    'https://picsum.photos/259/359'
];

export const LazyImageLoader = () => {
  return (
    <div>
        <ImageGallery images={imageUrls}/>
      </div>
  );
}
