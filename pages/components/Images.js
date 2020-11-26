import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import ModalImage from "react-modal-image";
import { Lightbox } from "react-modal-image";

function Image(props) {
    const [open,setOpen]=useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setOpen(true);
  }, []);

  const onClose=()=>{
      setOpen(false);
  }
  return (
    <div >
      <Gallery photos={props.photos} onClick={openLightbox}  />
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
