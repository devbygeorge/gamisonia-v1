import s from "@/styles/Hero.module.scss";

export default function Hero() {
  return (
    <div id="hero" className={s.hero}>
      <img className={s.img} src="/images/interior.jpg" alt="Interior" />

      <div className={`container ${s.textWrapper}`}>
        <h1 className={s.heading}>gamisonia</h1>
      </div>
    </div>
  );
}
