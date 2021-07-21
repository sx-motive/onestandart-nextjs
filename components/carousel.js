import React, { useEffect } from "react";
import Image from "next/image";
import EmblaCarousel from "embla-carousel";

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
              layout="fill"
              src="/images/cars/kalina.jpg"
              alt="Лада Калина"
            />
          </div>
          <h3>Лада Калина</h3>
        </div>
        <div class="embla__slide">
          <div className="embla-img-wrap">
            <Image layout="fill" src="/images/cars/datsun.jpg" alt="Датсун" />
          </div>
          <h3>Датсун</h3>
        </div>
        <div class="embla__slide">
          <div className="embla-img-wrap">
            <Image
              layout="fill"
              src="/images/cars/granta.jpg"
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
