import React, { useEffect } from "react";
import Image from "next/image";
import EmblaCarousel from "embla-carousel";

import Pic1 from '../public/images/cars/kalina.jpg'
import Pic2 from '../public/images/cars/granta.jpg'
import Pic3 from '../public/images/cars/datsun.jpg'

function Carousel() {
  useEffect(() => {
    const emblaNode = document.querySelector(".embla");
    const options = { loop: false };

    const embla = EmblaCarousel(emblaNode, options);
  });
  return (
    <div className="embla">
      <div className="embla__container">

        <div className="embla__slide">
          <div className="embla-img-wrap">
            <Image
              src={Pic1}
              alt="Лада Калина"
            />
          </div>
          <h3>Лада Калина</h3>
        </div>

        <div className="embla__slide">
          <div className="embla-img-wrap">
            <Image src={Pic2} alt="Датсун" />
          </div>
          <h3>Датсун</h3>
        </div>

        <div className="embla__slide">
          <div className="embla-img-wrap">
            <Image
              src={Pic3}
              alt="Лада Гранта"
            />
          </div>
          <h3>Лада Гранта</h3>
        </div>

        <div className="embla__slide">
          <div className="embla-img-wrap">
            <Image
              src={Pic1}
              alt="Лада Калина"
            />
          </div>
          <h3>Лада Калина</h3>
        </div>

        <div className="embla__slide">
          <div className="embla-img-wrap">
            <Image src={Pic2} alt="Датсун" />
          </div>
          <h3>Датсун</h3>
        </div>

        <div className="embla__slide">
          <div className="embla-img-wrap">
            <Image
              src={Pic3}
              alt="Лада Гранта"
            />
          </div>
          <h3>Лада Гранта</h3>
        </div>

      </div>
    </div>
  );
}

export default Carousel;
