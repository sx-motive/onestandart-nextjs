import React from "react";
import Btn from "../components/buttons";
import Text from "../components/sections/text-section";

function buttons() {
  return (
    <>
      <Text
        title="A tour of motive`s boilerplate"
        description="From the moment our company was founded, we have helped our clients find exceptional solutions for their businesses , creating memorable brands and digital products. Our expertise grows with each year, and our accumulated experience empowers us to develop products exactly as they should be."
        btn="Read more"
        link="/"
      />

      <Text
        title="Sections tutorial"
        description="From the moment our company was founded, we have helped our clients find exceptional solutions for their businesses , creating memorable brands and digital products. Our expertise grows with each year, and our accumulated experience empowers us to develop products exactly as they should be."
        btn="Read more"
        link="/"
      />

      <section data-scroll-section className="text">
        <div className="container">
          <div className="wrapper">
            <h3>Buttons tutorial</h3>
            <p>
              Кнопки имеют несколько классов и специальные атрибуты
              взаимодействия.
              <br />
              Классы кнопок [] <br />
              Пропсы кнопок [link, magnetic(только ключ), class, title,
              rippleless(только ключ)]
            </p>
            <Btn
              title="Hey"
              link="/"
              class="-skew -fullsolid"
              cursor="-color-white"
              magnetic
            />
            <Btn title="this is" link="/" class="-skew -solid" magnetic />
            <Btn
              title="cool buttons"
              link="/"
              class="-skew -outline"
              cursor="-color-white"
              magnetic
            />
            <Btn
              title="i got"
              link="/"
              class="-underlined"
              cursor="-opaque"
              rippleLess
            />
            <Btn
              title="to say!"
              link="/"
              class="-underline"
              cursor="-opaque"
              rippleLess
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default buttons;
