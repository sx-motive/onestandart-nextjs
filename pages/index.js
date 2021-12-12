// dependencies import
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

// components import
import SectionImgText from "../components/sections/image-text-section";
import SectionImgFull from "../components/sections/image-full-section";
import SectionText from "../components/sections/text-section";
import SectionPrefooter from "../components/sections/prefooter-section";

function Home() {
  return (
    <>
      <Head>
        <title>
          Работа для водителей такси в Оренбурге | Таксопарк Стандарт
        </title>
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

      <SectionText
        title="Работа для водителей такси в Оренбурге"
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
        btntitle="Подробнее о компании"
        btnlink="/contacts"
        img="/images/03.png"
        reverse
      />

      <section data-scroll-section className="text-scroll">
        <div className="text-scroll-wrap">
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Таксопарк стандарт - Аренда автомобиля - Работа для водителей в
            такси
          </span>

          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            Аренда автомобиля - Работа для водителей в такси - Таксопарк
            стандарт
          </span>
        </div>
      </section>

      <SectionImgText
        title="Преимущества работы с нами"
        description={
          <>
            • Свободный график. Когда работать, выбираете вы.
            <br />
            • Быстрое подключение. Начать работать вы сможете уже сегодня.
            <br />
            • Выбирайте самостоятельно: получать оплату за каждый заказ или за
            количесво часов на линии.
            <br />
            • Моментальные и автоматические выплаты. Можно вывести денежные
            средства в любое удобное для вас время, или они поступят на ваш счет
            в конце дня.
            <br />• 0% комиссии за вывод денежных средств.
          </>
        }
        btntitle="Оставить заявку"
        btnlink="/contacts"
        img="/images/011.jpg"
      />

      <section
        data-scroll-section
        className="tiles tiles--rotated auto"
        id="grid2"
      >
        <div className="container">
          <div className="text-wrap">
            <h3>Автомобили в аренду</h3>
            <p>
              Взять автомобиль в аренду, дешевле и быстрее, чем покупать новый.
              ТО и обслуживание- ответственность парка. Чтобы взять автомобиль в
              аренду, оставьте заявку на сайте, или позвоните нам.
            </p>
            <Link href="/arenda">
              <a>
                <button
                  data-magnetic
                  className="btn -skew -outline -form"
                  cursor="-color-white"
                >
                  <span data-text="Посмотреть все авто">
                    Посмотреть все авто
                  </span>

                  <div className="ripple">
                    <div className="ripple-span"></div>
                  </div>
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="tiles__wrap">
          <div
            className="tiles__line"
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img n1"></div>
            <div className="tiles__line-img n2"></div>
            <div className="tiles__line-img n3"></div>
          </div>
          <div
            className="tiles__line"
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img n4"></div>
            <div className="tiles__line-img n5"></div>
            <div className="tiles__line-img n6"></div>
            <div className="tiles__line-img n7"></div>
            <div className="tiles__line-img n8"></div>
          </div>
          <div
            className="tiles__line"
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            <div className="tiles__line-img n9"></div>
            <div className="tiles__line-img n10"></div>
            <div className="tiles__line-img n11"></div>
            <div className="tiles__line-img n12"></div>
            <div className="tiles__line-img n13"></div>
            <div className="tiles__line-img n14"></div>
          </div>
          <div
            className="tiles__line"
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            <div className="tiles__line-img n15"></div>
            <div className="tiles__line-img n16"></div>
            <div className="tiles__line-img n17"></div>
            <div className="tiles__line-img n18"></div>
            <div className="tiles__line-img n19"></div>
            <div className="tiles__line-img"></div>
          </div>
          <div
            className="tiles__line"
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img n20"></div>
            <div className="tiles__line-img n21"></div>
            <div className="tiles__line-img n22"></div>
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img"></div>
          </div>
        </div>
      </section>

      <section data-scroll-section className="we-do">
        <div className="container">
          <h3>Возможности и условия</h3>
        </div>
        <div className="container">
          <div className="we-do-box">
            <div className="img-wrap">
              <Image
                loading="eager"
                data-cursor-text="таксопарк стандарт"
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
                data-cursor-text="таксопарк стандарт"
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
                data-cursor-text="таксопарк стандарт"
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

export default Home;
