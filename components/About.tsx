"use client";

import styles from "./About.module.css";

export default function About() {
  const skills = [
    "After Effects",
    "Premiere Pro",
    "Photoshop",
    "Motion Design",
    "Sync Edits",
    "Colorização",
    "Efeitos Visuais",
    "Anime Edits",
    "Parallax & 3D",
    "Edição Vertical",
    "Composição",
    "Movimentos de Câmera",
  ];

  return (
    <section id="sobre" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Sobre Mim</h2>
          <div className={styles.divider} />
        </div>

        <div className={styles.bioCard}>
          <p className={styles.bioText}>
            Editor de vídeo com <span>mais de 4 anos de experiência</span>,
            especializado em edições dinâmicas, motion graphics, sincronização
            audiovisual e animação de imagens estáticas. Experiência sólida em
            montagem, ritmo, narrativa visual, colorização e estética moderna
            para redes sociais.
            <br />
            <br />
            Aprendiz <span>autodidata</span> com domínio técnico e criatividade
            para entregar vídeos envolventes, modernos e com identidade visual
            marcante. Desde <span>2017</span> criando conteúdo autoral e
            desenvolvendo habilidades em anime motion edits, edições verticais
            (TikTok/Reels) e composições complexas.
          </p>
        </div>

        <h3 className={styles.skillsTitle}>Habilidades Técnicas</h3>

        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={`${skill}-${index}`} className={styles.skillCard}>
              <p className={styles.skillName}>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}