import React from "react";
import SectionImgFull from "../components/sections/image-full-section";

function Arenda() {
  return (
    <>
      <section data-scroll-section className="text page">
        <div className="container">
          <h1>Аренда автомобиля в таксопарке</h1>
          <p>Аренда авто от эконом до комфорт класса.</p>
        </div>
      </section>
      <SectionImgFull img="/images/06.png" alt="Работа в такси" />
    </>
  );
}

export default Arenda;
