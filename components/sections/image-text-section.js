import React from "react";
import Image from "next/image";
import Btn from "../buttons";

function SectionImgText(props) {
  const src = props.img;

  return (
    <section
      data-scroll-section
      className={`img-text` + `${props.reverse ? " -reverse" : ""}`}
    >
      <div className="container">
        <div className="img-col">
          <div className="img-split-wrap">
            <Image
              loading="eager"
              data-cursor-text="Explore service"
              data-cursor="-color-accent-lilac"
              layout="fill"
              data-scroll
              data-scroll-speed="-3"
              src={src || "/images/placeholder.svg"}
              alt="img"
            />
          </div>
        </div>
        <div className="text-col">
          <h4>{props.title}</h4>
          <p>{props.description}</p>
          <Btn
            title={props.btntitle}
            link={props.btnlink}
            class="-skew -outline"
            cursor="-color-white"
            magnetic
          />
        </div>
      </div>
    </section>
  );
}

export default SectionImgText;
