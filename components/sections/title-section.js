import React from "react";

function SectionTitle(props) {
  return (
    <section data-scroll-section className="title">
      <div className="container">
        <h1>{props.subtitle}</h1>
        <h2>{props.title}</h2>
      </div>
    </section>
  );
}

export default SectionTitle;
