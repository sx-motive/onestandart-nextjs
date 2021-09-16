import React from "react";

function Contacts() {
  return (
    <>
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
