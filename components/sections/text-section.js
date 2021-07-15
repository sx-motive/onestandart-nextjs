import React from "react";
import Btn from "../buttons";

function SectionText(props) {
  return (
    <section data-scroll-section className="text">
      <div className="container">
        <div className="wrapper">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <Btn
          title={props.btntitle}
          link={props.link}
          class="-underlined"
          cursor="-opaque"
          rippleLess
        />
      </div>
    </section>
  );
}

export default SectionText;
