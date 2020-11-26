import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import styles from '../../styles/Images.module.css'; 
import { Lightbox } from "react-modal-image";

function Image(props) {
    const [open,setOpen]=useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = useCallback((event) => {
    setCurrentImage(parseInt(event.target.attributes[2].value));
    setOpen(true);
  }, []);
  const onClose=()=>{
      setOpen(false);
  }
  const imageRenderer = useCallback(
    ({ index, key, photo }) => (
      <img
      className={styles.imageTile}
      src={photo.src}
      onClick={openLightbox}
        key={key}
        index={index}
        photo={photo}
      />
    ),
  );
  return (
    <div >
      <Gallery photos={props.photos} onClick={openLightbox} renderImage={imageRenderer} />
      {
  open ?
    <Lightbox
    small={props.photos[currentImage].src}
    large={props.photos[currentImage].src}
    alt={props.photos[currentImage].title}
      onClose={onClose}
    />
  :null
}
    </div>
  );
}
export default Image;
