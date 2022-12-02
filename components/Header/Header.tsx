import Link from "next/link";
import Image from "next/legacy/image";
import { useState } from "react";

import s from "./Header.module.scss";
import { useRouter } from "next/router";
import { Translations } from "typings";

type Props = {
  translations: Translations;
};

export default function Header({ translations }: Props) {
  const [menuActive, setMenuActive] = useState(false);
  const router = useRouter();

  const handleMenuClose = () => setMenuActive(false);
  const handleMenuToggle = () => setMenuActive((prevState) => !prevState);

  const handleLocaleChange = (locale: string) => {
    router.push("/", "/", { locale: locale });
    handleMenuClose();
  };

  return (
    <div id="header" className={s.header}>
      <div className="container">
        <div className={s.logo}>
          <Link href="/">
            <Image
              src="/images/logo-white.png"
              alt="Logo"
              width={40}
              height={40}
            />
          </Link>
        </div>
        <div
          className={`${s.toggle} ${menuActive ? s.toggleActive : ""}`}
          onClick={handleMenuToggle}
        ></div>
        <nav className={`${s.nav}  ${menuActive ? s.menuActive : ""}`}>
          <ul className={s.list}>
            <li className={s.item}>
              <Link className={s.link} href="/" onClick={handleMenuClose}>
                {translations.home}
              </Link>
            </li>
            <li className={s.item}>
              <Link
                className={s.link}
                href="/#projects"
                scroll={false}
                onClick={handleMenuClose}
              >
                {translations.projects}
              </Link>
            </li>
            <li className={s.item}>
              <Link
                className={s.link}
                href="/#about"
                scroll={false}
                onClick={handleMenuClose}
              >
                {translations.about}
              </Link>
            </li>
            <li className={s.item}>
              <Link
                className={s.link}
                href="/#contact"
                scroll={false}
                onClick={handleMenuClose}
              >
                {translations.contact}
              </Link>
            </li>
          </ul>

          <div className={s.flags}>
            <div className={s.flag}>
              <div onClick={() => handleLocaleChange("en")}>
                <Image
                  src="/images/uk-flag.png"
                  alt="us flag"
                  width={30}
                  height={20}
                />
              </div>
            </div>
            <div className={s.flag}>
              <div onClick={() => handleLocaleChange("ge")}>
                <Image
                  src="/images/ge-flag.png"
                  alt="ge flag"
                  width={30}
                  height={20}
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
