import Link from "next/link";
import Nav from "./nav";

function Header() {
  return (
    <header data-scroll-section>
      <Link href="/">
        <a className="logo -skewlogo" aria-label="onestandart">
          <span data-text="Твой таксопарк">Onestandart</span>
        </a>
      </Link>
      <div className="right-header">
        <Nav />
        <button
          data-magnetic
          className="btn -skew -outline -form"
          cursor="-color-white"
        >
          <span data-text="Обратный звонок">Обратный звонок</span>

          <div className="ripple">
            <div className="ripple-span"></div>
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;
