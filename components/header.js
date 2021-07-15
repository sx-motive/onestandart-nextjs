import Link from "next/link";
import Nav from "./nav";

function Header() {
  return (
    <header data-scroll-section>
      <div className="container">
        <Link href="/">
          <a class="logo -skewlogo" aria-label="onestandart">
            <span data-text="Твой таксопарк">Onestandart</span>
          </a>
        </Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
