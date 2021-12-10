import React from "react";
import Image from "next/image";
import Head from "next/head";

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
      <Head>
        <title>Аренда автомобиля в Оренбурге | Таксопарк Стандарт</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Таксопарк Стандарт предлагает уникальную возможность аренды автомобиля в Оренбурге"
        />
        <meta
          name="keywords"
          content="таксопарк стандарт, аренда автомобиля, аренда авто, авто для работы, арендовать авто, аренда гранта, аренда датсун, аренда для работы в такси"
        />
        <meta name="author" content="motive" />

        <meta
          property="og:title"
          content="Аренда автомобиля в Оренбурге | Таксопарк Стандарт"
        />
        <meta
          property="og:description"
          content="Таксопарк Стандарт предлагает уникальную возможность аренды автомобиля в Оренбурге"
        />
        <meta property="og:image" content="/og-title.png" />
        <meta property="og:type" content="site" />
        <meta property="og:url" content="https://onestandart.ru" />
      </Head>
      <section data-scroll-section className="text">
        <div className="container">
          <div className="wrapper">
            <h3>Аренда автомобиля</h3>
            <p>
              Взять автомобиль в аренду, дешевле и быстрее, чем покупать новый.
              ТО и обслуживание - ответственность парка. Чтобы взять автомобиль
              в аренду, оставьте заявку на сайте, или позвоните нам.
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
                    priority
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
                    priority
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
