import React, { useEffect } from "react";
import { Link } from "react-router";
import Footer from "../../components/Footer/Footer";
import Transition from "../../components/transition/Transition";
import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import CommunityTrends from "../../components/CommunityTrends/CommunityTrends";
import "./Home.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";

const Home = () => {
  const lenis = useLenis(({ scroll }) => {});

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".mix-tape",
      start: "top bottom",
      end: "bottom bottom",
      onUpdate: (self) => {
        gsap.set(".strip", {
          x: self.progress * 300,
        });
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="page home">
        <section className="hero">
          <div className="hero-img">
            <ParallaxImage
              src="/home/hero-robot.png"
              alt="Músicos creando con IA"
            />
          </div>

          <div className="hero-header">
            <h1>Riffly AI</h1>
            <p>Crea música increíble con IA y compártela con el mundo</p>
            <button>
              <Link to="/create">Crear mi primera canción</Link>
            </button>
          </div>

          {/*<div className="news-article">
            <div className="news-article-title">
              <p className="primary">
                Lanzamiento: Nueva función <br /> de colaboración musical
              </p>
            </div>
            <div className="news-article-info">
              <p>Nuevo</p>
              <p>Comunidad</p>
            </div>
          </div>*/}
        </section>

        <section className="site-intro">
          <div className="intro-col">
            <p className="primary">
              Música sin límites. Creatividad sin barreras.
            </p>
            <p>Genera, colabora y comparte tu música</p>

            <MusicPlayer />
          </div>
          <div className="intro-col">
            <p>La revolución musical está aquí.</p>
            <h2>
              Tu Estudio <br /> A un <span className="color-accent">Click</span>
            </h2>
            <h3>Convierte tus ideas en canciones profesionales en minutos.</h3>
            <p>
              Riffly AI te permite crear música de calidad profesional usando
              inteligencia artificial de vanguardia. Desde crear beats hasta
              componer melodías o generar letras, nuestra plataforma te da todas
              las herramientas que necesitas para expresar tu creatividad.
              Comparte tus creaciones, colabora con otros artistas y forma parte
              de una comunidad global de músicos que están redefiniendo el
              futuro de la música.
            </p>
            <div className="intro-img">
              <div className="intro-img-wrapper">
                <ParallaxImage
                  src="/home/site-intro.jpg"
                  alt="Estudio de música virtual"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="cover">
          <div className="cover-img">
            <ParallaxImage src="/home/cover.jpg" alt="Comunidad de músicos" />
          </div>

          <div className="cover-copy">
            <h3>Únete a la</h3>
            <h2>Comunidad Riffly</h2>
            <p>
              Conecta con miles de creadores musicales de todo el mundo.
              Comparte tus creaciones, recibe feedback, colabora en proyectos y
              aprende de otros artistas con los mismos intereses que tú.
            </p>
            <br />
            <br />
            <p>
              Participa en retos semanales, eventos exclusivos y sesiones de
              colaboración en tiempo real. En Riffly, no solo creamos música -
              construimos conexiones y experiencias memorables.
            </p>

            <div className="cover-cta">
              <button>
                <Link to="/community">Explorar Comunidad</Link>
              </button>
            </div>
          </div>
        </section>

        <section className="mix-tape">
          <p className="primary">Potencia tu creatividad</p>
          <p>Herramientas de IA</p>

          <h1>
            De la Idea <br />
            Al Exito
          </h1>

          <div className="tape">
            <div className="strip">
              <img src="/home/strip.png" alt="" />
            </div>
            <div className="tape-img">
              <img src="/home/tape.png" alt="" />
            </div>
          </div>

          <div className="tape-info">
            <p>
              Nuestros modelos de IA están entrenados con millones de canciones
              para ayudarte a crear música única que refleje tu estilo personal.
            </p>
            <br />
            <br />
            <p>
              Genera melodías, armonías, ritmos, letras y arreglos con un solo
              clic. Ajusta cada elemento hasta que suene exactamente como lo
              imaginas. Riffly hace que el proceso creativo sea más rápido y
              divertido, sin importar tu nivel de experiencia musical.
            </p>

            <div className="sticker">
              <img src="/stickers-dark.png" alt="" />
            </div>
          </div>
        </section>

        <section className="latest-updates">
          <h1>Éxitos de la Comunidad</h1>
          <p className="lp-tagline">
            Descubre las mejores creaciones de nuestra comunidad y déjate
            inspirar por el talento de los artistas Riffly.
          </p>

          <div className="updates-page-link">
            <Link to="/trending">Ver Tendencias</Link>
          </div>

          {/*<CommunityTrends />*/}

          <div className="articles-row">
            <div className="article">
              <div className="article-img">
                <ParallaxImage
                  src="/updates/article1.jpg"
                  alt="Canción destacada"
                  speed={0.1}
                />
              </div>
              <div className="article-title">
                <h3>
                  "Summer Nights" de @laura_music alcanza 10,000 reproducciones
                  en solo 48 horas
                </h3>
              </div>
              <div className="article-link">
                <p className="primary">
                  <Link to="/trending/summer-nights">Escuchar ahora</Link>
                </p>
              </div>
            </div>

            <div className="article">
              <div className="article-img">
                <ParallaxImage
                  src="/updates/article2.jpg"
                  alt="Colaboración musical"
                  speed={0.1}
                />
              </div>
              <div className="article-title">
                <h3>
                  La colaboración entre @beatmaker y @vocalguru está
                  revolucionando el género electrónico
                </h3>
              </div>
              <div className="article-link">
                <p className="primary">
                  <Link to="/trending/electro-revolution">Escuchar ahora</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Home);
