import { SocialIcon } from "react-social-icons";

import { Social } from "typings";

import s from "./Footer.module.scss";

type Props = {
  socials: Social[];
};

export default function Footer({ socials }: Props) {
  const orderedSocials = socials?.sort((a, b) =>
    ("" + a.title).localeCompare(b.title)
  );

  const renderSocialIcon = (id: string, url: string) => {
    return (
      <SocialIcon
        key={id}
        url={url}
        target="_blank"
        rel="noreferrer"
        fgColor="rgb(230,230,230)"
        bgColor="transparent"
        style={{
          width: "45px",
          height: "45px",
        }}
      />
    );
  };

  return (
    <div id="footer" className={s.footer}>
      <div className="container">
        <div className={s.socials}>
          {orderedSocials?.map((social) =>
            renderSocialIcon(social["_id"], social["url"])
          )}
        </div>
      </div>
    </div>
  );
}
