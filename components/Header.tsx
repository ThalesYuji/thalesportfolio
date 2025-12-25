"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Previne scroll do body quando o menu está aberto
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            THALES NISHIKAWA
          </Link>

          <nav className={styles.nav}>
            <a
              href="#sobre"
              className={styles.navLink}
              onClick={(e) => scrollToSection(e, "#sobre")}
            >
              Sobre
            </a>
            <a
              href="#projetos"
              className={styles.navLink}
              onClick={(e) => scrollToSection(e, "#projetos")}
            >
              Projetos
            </a>
            <a
              href="#contato"
              className={styles.navLink}
              onClick={(e) => scrollToSection(e, "#contato")}
            >
              Contato
            </a>
          </nav>

          <button
            className={styles.menuButton}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <FiMenu />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isMobileMenuOpen ? styles.open : ""}`}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
      >
        <button
          className={styles.closeButton}
          onClick={closeMenu}
          aria-label="Fechar menu"
        >
          <FiX />
        </button>

        <nav className={styles.mobileNav}>
          <a
            href="#sobre"
            className={styles.mobileNavLink}
            onClick={(e) => scrollToSection(e, "#sobre")}
          >
            Sobre
          </a>
          <a
            href="#projetos"
            className={styles.mobileNavLink}
            onClick={(e) => scrollToSection(e, "#projetos")}
          >
            Projetos
          </a>
          <a
            href="#contato"
            className={styles.mobileNavLink}
            onClick={(e) => scrollToSection(e, "#contato")}
          >
            Contato
          </a>
        </nav>
      </div>
    </>
  );
}