import Link from "next/link";

import Nav from "./nav";

function Outro() {
  return (
    <section data-scroll-section className="outro">
      <div className="container">
        <div className="outro-top">
          <div className="outro-col">
            <h5>Onestandart</h5>
            <p>
              Таксопарк «Стандарт» — сертифицированный партнер Яндекс.Такси и
              Didi. Мы подключаем водителей к сервисам, обучаем работе с
              приложениями и консультируем по всем вопросам, возникающим на всех
              этах работы.
            </p>
          </div>
          <div className="outro-col">
            <h5>Навигация по сайту</h5>
            <Nav />
          </div>
          <div className="outro-col">
            <h5>Контакты</h5>
            <ul>
              <li>г. Оренбург, пр-кт Победы 75Е</li>
              <li>+7 (3532) 793-794</li>
              <li>office@onestandart.ru</li>
            </ul>
          </div>
        </div>
        <div className="outro-bottom">
          <div className="outro-bottom-left">
            <Link href="https://motive.cafe">
              <a className="btn -underline -skew">
                <span data-text="Development and promotion by MOTIVE">
                  Development and promotion by MOTIVE
                </span>
              </a>
            </Link>
          </div>
          <div className="outro-bottom-right">
            <ul>
              <li>
                <a className="btn -underline" href="#">
                  Вконтакте
                </a>
              </li>
              <li>
                <a className="btn -underline" href="#">
                  Инстаграм
                </a>
              </li>
              <li>
                <a className="btn -underline" href="#">
                  Вайбер
                </a>
              </li>
              <li>
                <a className="btn -underline" href="#">
                  Ватсап
                </a>
              </li>
              <li>
                <a className="btn -underline" href="#">
                  Телеграм
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Outro;
