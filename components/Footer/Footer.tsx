import s from "./Footer.module.scss";
import { FaTiktok } from "react-icons/fa";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";

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
              <BsInstagram />
            </a>
          </li>
          <li className={s.item}>
            <a
              className={s.link}
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook />
            </a>
          </li>
          <li className={s.item}>
            <a
              className={s.link}
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter />
            </a>
          </li>
          <li className={s.item}>
            <a
              className={s.link}
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
            >
              <BsPinterest />
            </a>
          </li>
          <li className={s.item}>
            <a
              className={s.link}
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
