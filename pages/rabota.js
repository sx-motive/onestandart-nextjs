import React from "react";
import Head from "next/head";

function Job() {
  return (
    <>
      <Head>
        <title>Работа в Яндекс Такси | Таксопарк Стандарт</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Официальный партнер Яндекс Такси - Таксопарк Стандарт приглашает на работу водителей такси с возможностью аренды авто в Оренбурге. Быстрое подключение, высокий заработок."
        />
        <meta
          name="keywords"
          content="таксопарк стандарт, работа в такси, аренда автомобиля, аренда авто, работа в яндекс такси, работа водителем"
        />
        <meta name="author" content="motive" />

        <meta
          property="og:title"
          content="Работа в Яндекс Такси | Таксопарк Стандарт"
        />
        <meta
          property="og:description"
          content="Таксопарк Стандарт приглашает на работу водителей такси с возможностью аренды авто в Оренбурге. Быстрое подключение, высокий заработок."
        />
        <meta property="og:image" content="/og-title.png" />
        <meta property="og:type" content="site" />
        <meta property="og:url" content="https://onestandart.ru" />
      </Head>
      <section data-scroll-section className="text">
        <div className="container">
          <div className="wrapper">
            <h3>Работа в такси</h3>
            <p>Ниже контент страницы работа в такси</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Job;
