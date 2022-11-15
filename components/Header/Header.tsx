import { useState } from "react";
import Link from "next/link";
import s from "./Header.module.scss";
import Image from "next/legacy/image";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div id="header" className={s.header}>
      <div className="container">
        <div
          className={`${s.toggle} ${menuActive ? s.toggleActive : ""}`}
          onClick={() => setMenuActive((prevState) => !prevState)}
        ></div>
        <nav className={`${s.nav}  ${menuActive ? s.menuActive : ""}`}>
          <ul className={s.list}>
            <li className={s.item}>
              <Link
                className={s.link}
                href="/"
                onClick={() => setMenuActive((prevState) => false)}
              >
                home
              </Link>
            </li>
            <li className={s.item}>
              <Link
                className={s.link}
                href="/#projects"
                scroll={false}
                onClick={() => setMenuActive((prevState) => false)}
              >
                projects
              </Link>
            </li>
            <li className={s.item}>
              <Link
                className={s.link}
                href="/#projects"
                scroll={false}
                onClick={() => setMenuActive((prevState) => false)}
              >
                objects
              </Link>
            </li>
            <li className={s.item}>
              <Link
                className={s.link}
                href="/#about"
                scroll={false}
                onClick={() => setMenuActive((prevState) => false)}
              >
                about
              </Link>
            </li>
            <li className={s.item}>
              <Link
                className={s.link}
                href="/#contact"
                scroll={false}
                onClick={() => setMenuActive((prevState) => false)}
              >
                contact
              </Link>
            </li>
          </ul>

          <div className={s.flags}>
            <div className={s.flag}>
              <Image
                src="/images/uk-flag.png"
                alt="us flag"
                width={30}
                height={20}
              />
            </div>
            <div className={s.flag}>
              <Image
                src="/images/ge-flag.png"
                alt="ge flag"
                width={30}
                height={20}
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
