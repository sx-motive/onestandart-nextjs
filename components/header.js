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
      <Nav />
    </header>
  );
}

export default Header;
