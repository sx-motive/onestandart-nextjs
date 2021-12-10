import React from "react";
import Image from "next/image";

function SectionImgFull(props) {
  const src = props.img;
  return (
    <section data-scroll-section className="img-full">
      <Image
        priority
        layout="fill"
        data-scroll
        data-scroll-speed="-4"
        src={src || "/images/placeholder.svg"}
        alt={props.alt}
      />
    </section>
  );
}

export default SectionImgFull;
