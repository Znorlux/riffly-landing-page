import React from "react";
import { Link } from "react-router";
import ParallaxImage from "../ParallaxImage/ParallaxImage";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      {/*<div className="footer-bg">
        <ParallaxImage src="/home/hero-org.jpg" alt="" />
      </div>*/}

      <div className="footer-nav">
        <div className="footer-nav-link">
          <Link to="/about">Nosotros</Link>
        </div>
        <div className="footer-nav-link">
          <Link to="/solutions">Soluciones</Link>
        </div>
        <div className="footer-nav-link">
          <Link to="/updates">Actualizaciones</Link>
        </div>
        <div className="footer-nav-link">
          <Link to="/contact">Contacto</Link>
        </div>
      </div>

      <div className="footer-outro">
        <div className="footer-col">
          <p>¿Necesitas ayuda?</p>
          <h3>Contáctanos</h3>
          <p className="primary">
            soporte@riffly.com <br />
            @RifflyMusic
          </p>
          <p>© 2024 Riffly AI</p>
        </div>
        <div className="footer-col">
          <p>¿Quieres saber más?</p>
          <h3>Comunidad</h3>
          <p className="primary">
            Únete a miles de músicos <br />
            creando con Riffly
          </p>
          <p>Diseñado con 💛 por Grupo Koyso</p>
        </div>
      </div>

      <div className="footer-form">
        <p className="primary">¡Únete a la revolución musical!</p>
        <p>Crea música increíble con IA</p>

        <span>
          Suscríbete para recibir actualizaciones, consejos y acceso anticipado
          a nuevas funciones.
        </span>

        <div className="footer-ws"></div>

        <div className="footer-input">
          <input type="text" placeholder="Nombre" />
        </div>
        <div className="footer-input">
          <input type="text" placeholder="Apellido" />
        </div>
        <div className="footer-input">
          <input type="text" placeholder="Correo electrónico" />
        </div>
        <div className="footer-submit">
          <Link to="/">Suscribirse</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
