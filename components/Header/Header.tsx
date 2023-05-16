import { useState } from "react";

import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Translations } from "typings";

import s from "./Header.module.scss";

const links = [
  {
    name: "home",
    url: "/",
  },
  {
    name: "projects",
    url: "/#projects",
  },
  {
    name: "about",
    url: "/#about",
  },
  {
    name: "contact",
    url: "/#contact",
  },
];

const locales = [
  {
    name: "USA",
    path: "/images/flag-usa.png",
    code: "en",
  },
  {
    name: "GEO",
    path: "/images/flag-geo.png",
    code: "ge",
  },
];

type Props = {
  translations: Translations;
};

export default function Header({ translations }: Props) {
  const [isNavbarActive, setNavbarActive] = useState(false);
  const router = useRouter();

  const handleNavbarClose = () => setNavbarActive(false);
  const handleNavbarToggle = () => setNavbarActive((prevState) => !prevState);

  const handleLocaleChange = (locale: string) => {
    router.push("/", "/", { locale: locale });
    handleNavbarClose();
  };

  return (
    <div id="header" className={s.header}>
      {/* Logo */}
      <div className={s.logo}>
        <Link href="/" onClick={handleNavbarClose}>
          <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
        </Link>
      </div>

      {/* Menu Toggle */}
      <button
        className={s.toggle}
        aria-expanded={isNavbarActive}
        onClick={handleNavbarToggle}
      ></button>

      <div className="container">
        {/* Navbar */}
        <nav className={s.navbar} data-visible={isNavbarActive}>
          {/* Menu Links */}
          <div className={s.menu}>
            {links.map((item, i) => (
              <Link
                key={i}
                scroll={false}
                href={item.url}
                className={s.menu_link}
                onClick={handleNavbarClose}
              >
                {translations[item.name]}
              </Link>
            ))}
          </div>

          {/* Locales Flags */}
          <div className={s.locales}>
            {locales.map((locale, i) => (
              <div
                key={i}
                className={s.locale_item}
                onClick={() => handleLocaleChange(locale.code)}
              >
                <Image
                  src={locale.path}
                  alt={locale.name}
                  width={30}
                  height={20}
                />
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
