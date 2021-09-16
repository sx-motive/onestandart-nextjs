import Head from "next/head";

import SectionImgFull from "../components/sections/image-full-section";

function About() {
  return (
    <>
      <Head>
        <title>О компании | Таксопарк Стандарт</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Таксопарк Стандарт - региональный партнер Яндекс Такси. Мы предоставляем услуги по подключению и аренде автомобилей для работы в такси в городе Оренбург"
        />
        <meta
          name="keywords"
          content="таксопарк стандарт, работа в такси, аренда автомобиля, аренда авто, работа в яндекс такси, работа водителем"
        />
        <meta name="author" content="motive" />

        <meta property="og:title" content="О компании | Таксопарк Стандарт" />
        <meta
          property="og:description"
          content="Таксопарк Стандарт - региональный партнер Яндекс Такси. Мы предоставляем услуги по подключению и аренде автомобилей для работы в такси в городе Оренбург"
        />
        <meta property="og:image" content="/og-title.png" />
        <meta property="og:type" content="site" />
        <meta property="og:url" content="https://onestandart.ru" />
      </Head>
      <section data-scroll-section className="text">
        <div className="container">
          <div className="wrapper">
            <h3>О таксопарке</h3>
            <p>
              Автопарк “СТАНДАРТ”- сертифицированный партнер Яндекс.Такси. Мы
              подключаем водителей к сервису, обучаем работе с приложением и
              консультируем во всем вопросам, возникающим на всех этапах работы.
              Хотите работать в такси, но не хотите использовать свой
              автомобиль? В нашем автопарке вы можете арендовать брендированный
              автомобиль, на бензине, или на газу. Так же у нас, вы можете
              забрендировать свой автомобиль, или взять в аренду детское кресло.
            </p>
          </div>
        </div>
      </section>

      <SectionImgFull img="/images/010.jpg" alt="Работа в такси" />
    </>
  );
}

export default About;
