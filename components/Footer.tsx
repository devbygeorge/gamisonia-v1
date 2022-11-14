import s from "@/styles/Footer.module.scss";

export default function Footer() {
  return (
    <div id="footer" className={s.footer}>
      <div className="container">
        <ul className={s.list}>
          <li className={s.item}>
            <a
              className={s.link}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instragram
            </a>
          </li>
          <li className={s.item}>
            <a
              className={s.link}
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li className={s.item}>
            <a
              className={s.link}
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li className={s.item}>
            <a
              className={s.link}
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
            >
              Pinterest
            </a>
          </li>
          <li className={s.item}>
            <a
              className={s.link}
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
            >
              Tiktok
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
