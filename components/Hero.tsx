import styles from "@/styles/Hero.module.scss";

export default function Hero() {
  return (
    <div id="hero" className={styles.hero}>
      <img className={styles.img} src="/images/interior.jpg" alt="Interior" />

      <div className={`container ${styles.textWrapper}`}>
        <h1 className={styles.heading}>gamisonia</h1>
      </div>
    </div>
  );
}
