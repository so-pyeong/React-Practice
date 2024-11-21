import React from 'react';

const images = [
  { src: "1.jpg", title: "Movie 1" },
  { src: "2.png", title: "Movie 2" },
  { src: "3.jpg", title: "Movie 3" },
  { src: "4.jpg", title: "Movie 4" },
];

function ImageList() {
  return (
    <div>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={`./images/${image.src}`} 
            width='150px' 
            height='200px' 
            alt={image.title}
          />
          <p>{image.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ImageList;
