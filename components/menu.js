import Link from "next/link";
import Nav from "./nav";

function Menu() {
  function openMenu() {
    const burger = document.getElementsByClassName("burger")[0];
    const menu = document.getElementsByClassName("menu")[0];
    menu.classList.toggle("m-active");
    burger.classList.toggle("m-active");
  }

  function closeMenu() {
    const burger = document.getElementsByClassName("burger")[0];
    const menu = document.getElementsByClassName("menu")[0];
    menu.classList.toggle("m-active");
    burger.classList.toggle("m-active");
  }

  return (
    <>
      <div id="menu" className="menu">
        <header data-scroll-section className="header">
          <a className="logo toggle-logo" aria-label="motive" href="/">
            motive
          </a>
        </header>

        <div className="menu-wrapper">
          <div className="menu-main">
            <div className="menu-col">
              <div className="menu-col-title">
                <span>Соцсети</span>
              </div>
              <div className="social-list">
                <ul>
                  <li onClick={closeMenu} data-magnetic data-cursor="-opaque">
                    <a className="btn -underline" href="#">
                      Awwwards
                    </a>
                  </li>
                  <li onClick={closeMenu} data-magnetic data-cursor="-opaque">
                    <a className="btn -underline" href="#">
                      Behance
                    </a>
                  </li>
                  <li onClick={closeMenu} data-magnetic data-cursor="-opaque">
                    <a className="btn -underline" href="#">
                      Dribble
                    </a>
                  </li>
                  <li onClick={closeMenu} data-magnetic data-cursor="-opaque">
                    <a className="btn -underline" href="#">
                      Vkontakte
                    </a>
                  </li>
                  <li onClick={closeMenu} data-magnetic data-cursor="-opaque">
                    <a className="btn -underline" href="#">
                      Telegram
                    </a>
                  </li>
                  <li onClick={closeMenu} data-magnetic data-cursor="-opaque">
                    <a className="btn -underline" href="#">
                      Patreon
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="menu-col">
              <div className="menu-col-title">
                <span>Меню</span>
              </div>
              <div className="nav-list">
                <Nav />
              </div>
            </div>
          </div>
          <div className="menu-footer">
            <div className="contact">
              <div className="menu-col-title">
                <span>Напишите мне</span>
              </div>
              <a className="btn -underlined" href="#">
                info@motive.cafe
              </a>
            </div>
          </div>
        </div>
        <div className="menu-wrapper-bg"></div>
      </div>

      <div
        data-magnetic
        data-cursor-stick="#cursor-stick-area"
        className="toggle-wrap"
        id="cursor-stick-area"
        data-cursor="-exclusion -lgm"
      >
        <div onClick={openMenu} className="toggle-zone">
          <button className="toggle-menu burger"></button>
        </div>
      </div>
    </>
  );
}

export default Menu;
