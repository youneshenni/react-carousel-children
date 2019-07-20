import React from "react";
import Carousel from "./Carousel";

const Obj = [
  {
    id: 1,
    marque: "Samsung",
    logo: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    children: [
      {
        id: 442,
        picture:
          "https://www.91-img.com/pictures/89993-v1-samsung-galaxy-s7-edge-mobile-phone-large-1.jpg",
        model: "Galaxy S7",
        children: [
          {
            photo:
              "https://image-us.samsung.com/SamsungUS/home/mobile/phones/galaxy-s/pdp/sm-g935azbaatt/gallery/smg935azbaatt-gallery1-1114.png?$product-details-jpg$"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    marque: "Huawei",
    logo: "https://live.staticflickr.com/65535/48332518031_12de9188df_o_d.png",
    children: []
  }
];

export default function App() {
  return (
    <Carousel
      onClickImage={console.log}
      Obj={Obj}
      src={["logo", "picture", "photo"]}
    />
  );
}
