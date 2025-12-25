import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>THALES NISHIKAWA</div>

          <p className={styles.subtitle}>
            Motion Designer & Video Editor
          </p>

          <div className={styles.divider} />

          <p className={styles.copyright}>
            © <span className={styles.year}>{currentYear}</span> Thales Yuji. Todos os direitos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
}