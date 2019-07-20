/*
 * Note: children should not be an empty array
 */

import React, { useState } from "react";
import Gallery from "./Gallery";

export default function Carousel(props) {
  const [depth, setDepth] = useState(0);
  const Image = props.Obj.map(item => ({
    src: item[props.src[0]],
    thumbnail: props.thumbnail ? item[props.thumbnail[0]] : item[props.src[0]],
    thumbnailWidth: props.thumbnailWidth ? props.thumbnailWidth : 320,
    thumbnailHeight: props.thumbnailHeight ? props.thumbnailHeight : 174,
    caption: props.caption ? item[props.caption[0]] : undefined,
    children: item.children,
    tags: props.tags ? item[props.tags[0]] : undefined
  }));
  const [Images, setImages] = useState(Image);
  const [currentImage, setCurrentImage] = useState(0);

  const onClickImage = () => {
    if (Images[currentImage].children) {
      if (Images[currentImage].children.length !== 0) {
        setDepth(depth + 1);
        setImages(
          Images[currentImage].children.map(child => ({
            src: child[props.src[depth + 1]],
            thumbnail: props.thumbnail
              ? child[props.thumbnail[depth]]
              : child[props.src[depth]],
            thumbnailWidth: props.thumbnailWidth ? props.thumbnailWidth : 320,
            thumbnailHeight: props.thumbnailHeight
              ? props.thumbnailHeight
              : 174,
            caption: props.caption ? child[props.caption[depth]] : undefined,
            children: child.children ? child.children : undefined,
            tags: props.tags ? child[props.tags[depth]] : undefined
          }))
        );
        setCurrentImage(0);
      } else {
        props.onClickImage(Images[currentImage]);
      }
    } else {
      props.onClickImage(Images[currentImage]);
    }
  };
  const onCloseLightbox = () => {
    setDepth(0);
    setImages(Image);
    setCurrentImage(0);
  };
  return (
    <Gallery
      showLightboxThumbnails
      enableImageSelection={false}
      images={Images}
      lightboxWillClose={onCloseLightbox}
      onClickImage={onClickImage}
      currentImageWillChange={setCurrentImage}
    />
  );
}
