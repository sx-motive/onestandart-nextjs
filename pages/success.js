import Link from "next/link"

export default function Home() {
    return (
    <section data-scroll-section className="success">
    <div className="container">
    <h4>Спасибо, ваша заявка отправлена!</h4>
    <p>Мы уже обрабатываем вашу заявку, наши менеджеры скоро свяжуться с вами для уточнения данных.</p>
    <Link href="/">
    <a data-magnetic className="btn -skew -outline -form" cursor="-color-white">
        <span data-text="Вернуться на главную">Вернуться на главную</span>
        <div className="ripple">
            <div className="ripple-span"></div>
        </div>
    </a>
    </Link>
    </div>
    </section>
    )
  }