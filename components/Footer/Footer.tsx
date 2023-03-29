import { SocialIcon } from "react-social-icons";

import { Social } from "typings";

import s from "./Footer.module.scss";

type Props = {
  socials: Social[];
};

export default function Footer({ socials }: Props) {
  const sortedSocials = socials?.sort((a, b) =>
    ("" + a.title).localeCompare(b.title)
  );

  return (
    <div id="footer" className={s.footer}>
      <div className="container">
        <ul className={s.list}>
          {sortedSocials?.map((social) => (
            <li key={social?._id} className={s.item}>
              <SocialIcon
                url={social?.url}
                fgColor="rgb(230,230,230)"
                bgColor="transparent"
                className={s.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "45px",
                  height: "45px",
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
