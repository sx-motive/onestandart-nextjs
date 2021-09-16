import React from "react";
import Head from "next/head";

function Contacts() {
  return (
    <>
      <Head>
        <title>Контакты | Таксопарк Стандарт</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Таксопарк Стандарт приглашает на работу водителей такси с возможностью аренды авто в Оренбурге. Быстрое подключение, высокий заработок."
        />
        <meta
          name="keywords"
          content="таксопарк стандарт, работа в такси, аренда автомобиля, аренда авто, работа в яндекс такси, работа водителем"
        />
        <meta name="author" content="motive" />

        <meta
          property="og:title"
          content="Работа для водителей такси в Оренбурге | Таксопарк Стандарт"
        />
        <meta
          property="og:description"
          content="Таксопарк Стандарт приглашает на работу водителей такси с возможностью аренды авто в Оренбурге. Быстрое подключение, высокий заработок."
        />
        <meta property="og:image" content="/og-title.png" />
        <meta property="og:type" content="site" />
        <meta property="og:url" content="https://onestandart.ru" />
      </Head>
      <section data-scroll-section className="text contacts-title">
        <div className="container">
          <div className="wrapper">
            <h3>Контакты</h3>
            <p>
              Таксопарк Стандарт работает по будням с 10:00 до 17:00. Если у вас
              возникли вопросы или вы хотите оставить заявку, смело свяжитесь с
              нами по контактам указанным ниже.
            </p>
          </div>
        </div>
      </section>
      <section data-scroll-section className="contacts">
        <div className="container">
          <div className="box">
            <span>+7 (3532) 232323</span>
          </div>

          <div className="box">
            <span>г. Оренбург, пр. Победы, 25</span>
          </div>
          <div className="box">
            <span>office@onestandart.ru</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;
