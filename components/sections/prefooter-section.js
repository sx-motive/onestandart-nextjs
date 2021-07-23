import React from "react";
import Image from "next/image";
import Btn from "../buttons";

function SectionPrefooter() {
  return (
    <section data-scroll-section className="prefooter">
      <div className="container">
        <div className="prefooter-col">
          <h3>Оставьте заявку на подключение</h3>
          <p>Оставьте заявку и менеджер перезвонит уже через 30 минут!</p>
          <form name="Заявки на подключение" method="POST" action="/success" data-netlify="true" data-netlify-recaptcha="true">
            <input type="hidden" name="form-name" value="Заявка на подключение" />
            <input type="text" name="Имя" id="yourname" placeholder="Имя и Фамилия" />
            <input type="tel" name="Телефон" id="phone" placeholder="Номер телефона" />
            <input
              type="text" name="Стаж по ВУ"
              placeholder="Стаж по водительскому удостоверению"
            />
            <div data-netlify-recaptcha="true"></div>
            <button data-magnetic type="submit" className="btn -skew -outline -form" cursor="-color-white">
              <span data-text="Отправить заявку">Отправить заявку</span>

              <div className="ripple">
                <div className="ripple-span"></div>
              </div>
            </button>
          </form>
          <span className="privacy">
            Отправляя заявку, вы соглашаетесь с условиями Политики обработки
            персональных данных и Пользовательского соглашения
          </span>
        </div>
        <div className="prefooter-col">
          <div className="img-wrap">
            <Image
              loading="eager"
              data-cursor-text="Explore service"
              data-cursor="-color-accent-lilac"
              layout="fill"
              data-scroll
              data-scroll-speed="-3"
              src="/images/05.jpg"
              alt="Работа в такси"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionPrefooter;
