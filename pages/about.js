import SectionImgFull from "../components/sections/image-full-section";

function About() {
  return (
    <>
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
