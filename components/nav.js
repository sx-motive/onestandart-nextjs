import React from "react";
import Link from "next/link";

function Nav() {
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
    <ul>
      <li onClick={closeMenu} data-magnetic data-cursor="-opaque">
        <Link href="/">
          <a className="btn -skew">
            <span data-text="Главная">Главная</span>
          </a>
        </Link>
      </li>
      <li onClick={closeMenu} data-magnetic data-cursor="-opaque">
        <Link href="/about">
          <a className="btn -skew">
            <span data-text="О компании">О компании</span>
          </a>
        </Link>
      </li>
      <li onClick={closeMenu} data-magnetic data-cursor="-opaque">
        <Link href="/arenda">
          <a className="btn -skew" href="#">
            <span data-text="Аренда авто">Аренда авто</span>
          </a>
        </Link>
      </li>
      <li onClick={closeMenu} data-magnetic data-cursor="-opaque">
        <Link href="/tutorials">
          <a className="btn -skew">
            <span data-text="Работа в такси">Работа в такси</span>
          </a>
        </Link>
      </li>

      <li onClick={closeMenu} data-magnetic data-cursor="-opaque">
        <a className="btn -skew" href="#">
          <span data-text="Контакты">Контакты</span>
        </a>
      </li>
    </ul>
  );
}

export default Nav;
