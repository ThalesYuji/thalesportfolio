"use client";

import { FiArrowDown } from "react-icons/fi";
import styles from "./Hero.module.css";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={`${styles.backgroundCircle} ${styles.circle1}`} />
      <div className={`${styles.backgroundCircle} ${styles.circle2}`} />

      <div className={styles.content}>
        <h1 className={styles.title}>THALES</h1>
        <p className={styles.subtitle}>Motion Designer & Editor</p>
        <p className={styles.description}>
          Edições dinâmicas, anime motion edits e sincronização audiovisual
        </p>

        <div className={styles.buttons}>
          <a
            href="#projetos"
            className={styles.btnPrimary}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#projetos");
            }}
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className={styles.btnSecondary}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contato");
            }}
          >
            Contato
          </a>
        </div>
      </div>

      <a
        href="#sobre"
        className={styles.scrollIndicator}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("#sobre");
        }}
      >
        <span className={styles.scrollText}>Role para baixo</span>
        <span className={styles.scrollArrow}>
          <FiArrowDown size={24} />
        </span>
      </a>
    </section>
  );
}