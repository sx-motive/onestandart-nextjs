// dependencies import
import Image from "next/image";

// components import
import SectionImgText from "../components/sections/image-text-section";
import SectionImgFull from "../components/sections/image-full-section";
import SectionText from "../components/sections/text-section";
import SectionPrefooter from "../components/sections/prefooter-section";

export default function Home() {
  return (
    <>
      <SectionText
        title="Работа для водителя такси в Оренбурге"
        description="Автопарк “СТАНДАРТ” приглашает на работу водителей такси, как на личном авто, так и автомобили компании. Мы гарантируем выгодные условия аренды и  высокий зароботок. Оставьте заявку и менеджер перезвонит Вам."
        btntitle="Оставить заявку"
        link="/contacts"
      />
      <SectionImgFull img="/images/02.png" alt="Работа в такси" />
      <SectionImgText
        title="Таксопарк Стандарт"
        description="Автопарк “СТАНДАРТ”- сертифицированный партнер Яндекс.Такси. Мы подключаем водителей к сервису, обучаем работе с приложением и консультируем во всем вопросам, возникающим на всех этапах работы.
        Хотите работать в такси, но не хотите использовать свой автомобиль? В нашем автопарке вы можете арендовать брендированный  автомобиль, на бензине, или на газу. Так же у нас, вы можете забрендировать свой автомобиль, или взять в аренду детское кресло.
        "
        btntitle="Оставить заявку"
        btnlink="/contacts"
        img="/images/03.png"
        reverse
      />

      <SectionImgText
        title="Преимущества работы с нами"
        description="• Свободный график. Когда работать, выбираете вы.
        • Быстрое подключение. Начать работать вы сможете уже сегодня.
        • Выбирайте самостоятельно: получать оплату за каждый заказ или за количесво часов на линии.
        • Моментальные и автоматические выплаты. Можно вывести денежные средства в любое удобное для вас время, или они поступят на ваш счет в конце дня.
        • 0% комиссии за вывод денежных средств."
        btntitle="Оставить заявку"
        btnlink="/contacts"
        img="/images/04.jpg"
      />
      <section data-scroll-section className="we-do">
        <div className="container">
          <h3>Возможности и условия</h3>
        </div>
        <div className="container">
          <div className="we-do-box">
            <div className="img-wrap">
              <Image
                loading="eager"
                data-cursor-text="Explore service"
                data-cursor="-color-accent-lilac"
                layout="fill"
                data-scroll
                data-scroll-speed="-1"
                src="/images/svg-1.png"
                alt="работа в такси"
              />
            </div>
            <h5>Быстрый старт</h5>
            <p>
              От заявки до первого клиента, всего 30мин, оставьте заявку
              сегодня.
            </p>
          </div>
          <div className="we-do-box">
            <div className="img-wrap">
              <Image
                loading="eager"
                data-cursor-text="Explore service"
                data-cursor="-color-accent-lilac"
                layout="fill"
                data-scroll
                data-scroll-speed="-1"
                src="/images/svg-2.png"
                alt="работа в такси"
              />
            </div>
            <h5>Много заказов</h5>
            <p>
              Яндекс.Такси ведущий агрегатор в России. Гарантия большого
              количества заказов.
            </p>
          </div>
          <div className="we-do-box">
            <div className="img-wrap">
              <Image
                loading="eager"
                data-cursor-text="Explore service"
                data-cursor="-color-accent-lilac"
                layout="fill"
                data-scroll
                data-scroll-speed="-1"
                src="/images/svg-3.png"
                alt="работа в такси"
              />
            </div>
            <h5>Аренда автомобиля</h5>
            <p>
              В нашем автопарке вы можете арендовать автомобиль на выгодных
              условия.
            </p>
          </div>
        </div>
      </section>
      <SectionPrefooter />
    </>
  );
}