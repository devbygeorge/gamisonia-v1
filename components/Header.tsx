import s from "@/styles/Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <div id="header" className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          <ul className={s.list}>
            <li className={s.item}>
              <Link className={s.link} href="/">
                home
              </Link>
            </li>
            <li className={s.item}>
              <Link className={s.link} href="/#projects" scroll={false}>
                projects
              </Link>
            </li>
            <li className={s.item}>
              <Link className={s.link} href="/#objects" scroll={false}>
                objects
              </Link>
            </li>
            <li className={s.item}>
              <Link className={s.link} href="/#about" scroll={false}>
                about
              </Link>
            </li>
            <li className={s.item}>
              <Link className={s.link} href="/#contact" scroll={false}>
                contact
              </Link>
            </li>
          </ul>

          <ul className={s.list}>
            <li className={s.item}>
              <Link className={s.link} href="#">
                Eng
              </Link>
            </li>
            <li className={s.item}>
              <Link className={s.link} href="#">
                Geo
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
