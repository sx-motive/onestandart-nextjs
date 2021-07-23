import React from "react";
import Image from "next/image";
import Btn from "../buttons";

function SectionPrefooter() {
  return (
    <section data-scroll-section className="prefooter">
      <div className="container">

<form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>



        <div className="prefooter-col">
          <h3>Оставьте заявку на подключение</h3>
          <p>Оставьте заявку и менеджер перезвонит уже через 30 минут!</p>
          <form>
            <input type="text" placeholder="Имя и Фамилия" />
            <input type="tel" placeholder="Номер телефона" />
            <input
              type="tel"
              placeholder="Стаж по водительскому удостоверению"
            />
            <a data-magnetic type="submit" className="btn -fullsolid">
              <span data-text="Отправить заявку">Отправить заявку</span>

              <div className="ripple">
                <div className="ripple-span"></div>
              </div>
            </a>
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
