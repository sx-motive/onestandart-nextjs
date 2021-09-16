import React from "react";
import Image from "next/image";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://my-json-server.typicode.com/sx-motive/data/cars"
  );
  const data = await res.json();

  return {
    props: { cars: data },
  };
};

const Arenda = ({ cars }) => {
  return (
    <>
      <section data-scroll-section className="text">
        <div className="container">
          <div className="wrapper">
            <h3>Аренда автомобиля</h3>
            <p>
              Взять автомобиль в аренду, дешевле и быстрее, чем покупать новый.
              ТО и обслуживание- ответственность парка. Чтобы взять автомобиль в
              аренду, оставьте заявку на сайте, или позвоните нам.
            </p>
          </div>
        </div>
      </section>

      <section data-scroll-section className="arenda">
        <div className="container">
          {cars.map((car) => (
            <div key={car.id} className="arenda-box">
              <div className="arenda-images-wrapper">
                <div className="arenda-img-wrap">
                  <Image
                    loading="eager"
                    data-cursor-text="Забронировать авто"
                    data-cursor="-color-accent-lilac"
                    data-scroll
                    data-scroll-speed="-2"
                    layout="fill"
                    src={car.img}
                    alt={car.title}
                  />
                </div>
                <div className="arenda-img-wrap">
                  <Image
                    loading="eager"
                    data-cursor-text="Забронировать авто"
                    data-cursor="-color-accent-lilac"
                    data-scroll
                    data-scroll-speed="2"
                    layout="fill"
                    src={car.img2}
                    alt={car.title}
                  />
                </div>
              </div>
              <div className="arenda-meta-wrapper">
                <div className="arenda-meta-col">
                  <h4>{car.title}</h4>
                  <span className="arenda-price"></span>
                  <button
                    data-magnetic
                    className="btn -skew -outline -form"
                    cursor="-color-white"
                  >
                    <span data-text="Забронировать авто">
                      Забронировать авто
                    </span>

                    <div className="ripple">
                      <div className="ripple-span"></div>
                    </div>
                  </button>
                </div>
                <div className="arenda-meta-col">
                  <dl className="dl-inline">
                    <dt className="dt-dotted">
                      <span>Год выпуска </span>
                    </dt>
                    <dd>2018</dd>
                  </dl>
                  <dl className="dl-inline">
                    <dt className="dt-dotted">
                      <span>Коробка передач </span>
                    </dt>
                    <dd>автомат</dd>
                  </dl>
                  <dl className="dl-inline">
                    <dt className="dt-dotted">
                      <span>Кондиционер </span>
                    </dt>
                    <dd>есть</dd>
                  </dl>
                  <dl className="dl-inline">
                    <dt className="dt-dotted">
                      <span>Привод </span>
                    </dt>
                    <dd>полный</dd>
                  </dl>
                  <dl className="dl-inline">
                    <dt className="dt-dotted">
                      <span>Вид топлива </span>
                    </dt>
                    <dd>АИ-95</dd>
                  </dl>
                  <p>
                    *Эксплуатация ТС должна быть строго в соответствии с его
                    целевым назначением и только на территории г. Оренбурга
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Arenda;
