import React, { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const galleryImages = [
  "https://drive.google.com/file/d/1N0nKLvfuZShttgpruQcl82VSnd_YmEDD/preview",
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center" id="gallery">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Galeria de Fotos</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Descubre los momentos únicos y la belleza de nuestro entorno. Cada imagen cuenta una historia de sabores, naturaleza y experiencias inolvidables.
        </p>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            > <iframe src={image} allow="autoplay" alt="gallery" title="gallery" className="gallery__image">
              </iframe>
              <a href="https://www.instagram.com/cimabarmc/" className="gallery__image-icon" target="_blank" rel="noopener noreferrer">
                <BsInstagram />
              </a>
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("Right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
