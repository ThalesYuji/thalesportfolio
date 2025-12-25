"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Projects.module.css";

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState<{
    videoId: string;
    isVertical?: boolean;
  } | null>(null);

  const projects = [
    {
      id: 1,
      title: "Médico - ÉoDan",
      description:
        "Este video foi um teste que eu fiz focando totalmente em motion para treinar algumas funções novas.",
      category: "MOTION/PARALLAX/CÂMERA",
      thumbnail: "/imagens/maxresdefault.png",
      videoId: "T-CFW8enx7Q",
      isVertical: false,
    },
    {
      id: 2,
      title: "Deus do Trovão - ARU",
      description:
        "Essa é uma Música Geek para um canal focado em musicas de animes, neste video em específico eu foco mais em MMV que é um estilo de edição utilizando imagens estáticas onde você faz os recortes necessários na imagem e anima.",
      category: "MOTION/PARALLAX/CÂMERA",
      thumbnail: "/imagens/zeni.jpg",
      videoId: "bzbA7B51POQ",
      isVertical: false,
    },
    {
      id: 3,
      title: "Titã de Ataque - ARU",
      description:
        "Essa é uma Música Geek para um canal focado em musicas de animes, neste video em específico eu foco mais em MMV que é um estilo de edição utilizando imagens estáticas onde você faz os recortes necessários na imagem e anima.",
      category: "MOTION/PARALLAX/CÂMERA",
      thumbnail: "/imagens/eren.jpg",
      videoId: "wGD2r1_E4_M",
      isVertical: false,
    },
    {
      id: 4,
      title: "DON TOLIVER - TORE UP CS2 EDIT",
      description:
        "Este vídeo é um compilado de highlights editados onde eu faço um estilo de edição mais cinematográfico dando atimosfera para a edição e mantendo preso a atenção do espectador com sync de batidas, efeitos visuais, etc.",
      category: "HIGHLIGHT EDIT",
      thumbnail: "/imagens/don.jpg",
      videoId: "7FZR66cb2yU",
      isVertical: false,
    },
    {
      id: 5,
      title: "É QUE EU TAVA COM OUTRA CS2 FUNK EDIT",
      description:
        "Este vídeo também é um compilado de highlights editados, porém focado em efeitos visuais bem frenéticos e com muitos efeitos, syncs e batidas.",
      category: "HIGHLIGHT EDIT",
      thumbnail: "/imagens/aaa.jpg",
      videoId: "DavJJHCy0AY",
      isVertical: false,
    },
    {
      id: 6,
      title: "ALEE ALPINISTA SOCIAL - CS2 EDIT",
      description:
        "Este vídeo também é um compilado de highlights editados, porém com uma edição mais tranquila e descontraida sem muitos efeitos extraordinários...",
      category: "HIGHLIGHT EDIT",
      thumbnail: "/imagens/alee.jpg",
      videoId: "qqduq0JKxGM",
      isVertical: false,
    },
    {
      id: 7,
      title: "COLOCAMOS NOSSO AMIGO PARA JOGAR FNAF PELA PRIMEIRA VEZ...",
      description:
        "Edição sem muitos efeitos, com foco em fazer uma edição mais descontraida e engraçada, com cortes secos, alívios cômicos, etc.",
      category: "GAMEPLAY",
      thumbnail: "/imagens/fnaf.jpg",
      videoId: "0llXDCITdw4",
      isVertical: false,
    },
    {
      id: 8,
      title: "MELHORES MOMENTOS JOGOS DE TERROR",
      description:
        "Edição sem muitos efeitos, com foco em fazer uma edição mais descontraida e engraçada, com cortes secos, alívios cômicos, etc.",
      category: "GAMEPLAY",
      thumbnail: "/imagens/terror.jpg",
      videoId: "ElHIS7wCnVw",
      isVertical: false,
    },
    {
      id: 9,
      title: "DOIS PATETAS ZERANDO GRANNY (ou tentando)",
      description:
        "Edição sem muitos efeitos, com foco em fazer uma edição mais descontraida e engraçada, com cortes secos, alívios cômicos, etc.",
      category: "GAMEPLAY",
      thumbnail: "/imagens/granny.jpg",
      videoId: "RRYPOYYGl-U",
      isVertical: false,
    },
    {
      id: 10,
      title: "BLUE LOCK DIE WITH A SMILE EMOTIONAL EDIT",
      description:
        "Estilo de edição focada em passar a emoção do anime e de todo o enredo até o presente momento da história, focando em fazer sentido com a música e os personagens envolvidos.",
      category: "ANIME EDIT",
      thumbnail: "/imagens/blue.jpg",
      videoId: "dUJzxF4vVyk",
      isVertical: false,
    },
    {
      id: 11,
      title: "ONEGAI NARUTO - EDIT",
      description:
        "Este vídeo é focado mais em efeitos, sync e movimento de câmera para dar ênfase ao momento épico e icônico do personagem.",
      category: "ANIME EDIT",
      thumbnail: "/imagens/naruto.jpg",
      videoId: "ku1Bi3Asbe8",
      isVertical: false,
    },
    {
      id: 12,
      title: "ITACHI EDIT - NEVER BE LIKE YOU",
      description:
        "Este vídeo é um especial de 1000 inscritos focado em bastante efeito, sync e movimento de câmera com uma coletânea de clipes do personagem.",
      category: "ANIME EDIT",
      thumbnail: "/imagens/itachi.png",
      videoId: "IxICxqKGUdE",
      isVertical: false,
    },
    {
      id: 13,
      title: "NO IDEA REMIX - Naruto",
      description:
        "Este vídeo é um especial de 500 inscritos focado em bastante efeito, sync e movimento de câmera com uma coletânea de clipes do personagem.",
      category: "ANIME EDIT",
      thumbnail: "/imagens/sasuke.jpg",
      videoId: "XyK_cAl72yU",
      isVertical: false,
    },
    {
      id: 14,
      title: "Deus do Trovão - ARU VISUALIZER",
      description:
        "Estilo onde eu recebo a arte separada por camadas fazendo com que eu consiga animar dando vida à arte.",
      category: "VISUALIZERS",
      thumbnail: "/imagens/zenitsu.jpg",
      videoId: "HZnS3e7VxWA",
      isVertical: false,
    },
    {
      id: 15,
      title: "Titã de Ataque - ARU VISUALIZER",
      description:
        "Estilo onde eu recebo a arte separada por camadas fazendo com que eu consiga animar dando vida à arte.",
      category: "VISUALIZERS",
      thumbnail: "/imagens/yeag.jpg",
      videoId: "kr9-zBnpQUI",
      isVertical: false,
    },
    {
      id: 16,
      title: "AmericanPie 1",
      description: "Animação vertical para anúncio de todas atrações.",
      category: "EVENTOS",
      thumbnail: "/imagens/reels.jpg",
      videoId: "Jc_dRjxMC3s",
      isVertical: true,
    },
    {
      id: 17,
      title: "AmericanPie 2",
      description: "Animação vertical para anúncio de todas atrações.",
      category: "EVENTOS",
      thumbnail: "/imagens/djs.jpg",
      videoId: "dVsFNTrpNHg",
      isVertical: true,
    },
    {
      id: 18,
      title: "REDCODE 1",
      description: "Animação vertical para anúncio da atração pricipal do evento.",
      category: "EVENTOS",
      thumbnail: "/imagens/d.jpg",
      videoId: "gJ-H8Ge7HhE",
      isVertical: true,
    },
    {
      id: 19,
      title: "REDCODE 2",
      description: "Animação vertical para anúncio de todas atrações.",
      category: "EVENTOS",
      thumbnail: "/imagens/red.jpg",
      videoId: "lE_tXX-_9pY",
      isVertical: true,
    },
  ];

  // Agrupar projetos por categoria
  const categorias = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  const handleOpenVideo = (videoId: string, isVertical: boolean = false) => {
    setSelectedVideo({ videoId, isVertical });
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="projetos" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Projetos</h2>
          <div className={styles.divider} />
        </div>

        {/* Modal de vídeo do YouTube */}
        {selectedVideo && (
          <div className={styles.modalOverlay} onClick={handleCloseModal}>
            <div
              className={`${styles.modalContent} ${
                selectedVideo.isVertical ? styles.verticalModal : ""
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeModal}
                onClick={handleCloseModal}
                aria-label="Fechar modal"
              >
                ✕
              </button>
              
              {selectedVideo.isVertical ? (
                <div className={styles.verticalVideoWrapper}>
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                    title="YouTube Shorts player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className={styles.videoContainer}>
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Renderizar cada categoria */}
        {Object.entries(categorias).map(([categoria, projectsInCategory]) => (
          <div key={categoria} className={styles.categorySection}>
            <h3 className={styles.categoryTitle}>{categoria}</h3>

            <div className={styles.grid}>
              {projectsInCategory.map((project) => (
                <div
                  key={project.id}
                  className={styles.card}
                  onClick={() =>
                    handleOpenVideo(project.videoId, project.isVertical || false)
                  }
                >
                  <div className={styles.imageContainer}>
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className={styles.playButton}>▶</div>
                  </div>

                  <div className={styles.content}>
                    <span className={styles.category}>{project.category}</span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.description}>{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}