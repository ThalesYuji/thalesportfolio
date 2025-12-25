"use client";

import { FaInstagram, FaYoutube, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./Contact.module.css";

export default function Contact() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram size={32} />,
      url: "https://www.instagram.com/thales_yuji/",
      className: styles.instagram,
    },
    {
      name: "YouTube",
      icon: <FaYoutube size={32} />,
      url: "https://www.youtube.com/@JawPs",
      className: styles.youtube,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={32} />,
      url: "https://www.linkedin.com/in/thales-yuji-15b07b35b/",
      className: styles.linkedin,
    },
    {
      name: "Email",
      icon: <FaEnvelope size={32} />,
      url: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRdwTPgTvWXzPQfFRCKDVTHtlFHHbRBSJMZMVqjFlSBljgVWrHZWrHsvNhLHNSfWbtNMhN",
      className: styles.email,
    },
  ];

  return (
    <section id="contato" className={styles.contact}>
      <div className={styles.container}>
        {/* Cabeçalho */}
        <div className={styles.header}>
          <h2 className={styles.title}>Entre em Contato</h2>
          <div className={styles.divider} />
        </div>

        {/* Descrição */}
        <p className={styles.description}>
          Vamos trabalhar juntos? Entre em contato através das minhas redes
          sociais ou envie um e-mail. Estou sempre aberto a novos projetos e
          colaborações!
        </p>

        {/* Links sociais */}
        <div className={styles.socialGrid}>
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${social.className}`}
              aria-label={social.name}
            >
              <span className={styles.icon}>{social.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
