import React from "react";
import styles from "./footer.module.scss";
import icon from "../../images/vass.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_links}>
        <div className={styles.vass}>
          <div className={styles.vass_items}>
            <span>Complex</span>
            <span>Made</span>
            <span>Simple</span>
          </div>
          <img src={icon} alt="" className={styles.icon} />
        </div>
        <div className={styles.sitemap}>
          <h3 className={styles.title}>Sitemap VASS</h3>
          <a href="#">Home</a>
          <a href="#">Casos éxito</a>
          <a href="#">Somos VASS</a>
          <a href="#">Impactos</a>
          <a href="#">Metodo</a>
          <a href="#">Tecnologias</a>
          <a href="#">Proyectos I+D+i</a>
          <a href="#">Insights</a>
          <a href="#">Noticias</a>
          <a href="#">VASS Research</a>
          <a href="#">Canal de denuncias</a>
          <a href="#">Contacto</a>
        </div>
        <div className={styles.talent}>
          <h3 className={styles.title}>Sitemap Talento</h3>
          <a href="#">Talento</a>
          <a href="#">#LifeVASS</a>
          <a href="#">Beneficios</a>
          <a href="#">Planes para ti</a>
          <a href="#">Proyectos</a>
          <a href="#">Smartworking</a>
          <a href="#">TOfertas</a>
        </div>
        <div className={styles.company}>
          <h3 className={styles.title}>Empresas</h3>
          <a href="#">VASS</a>

          <a href="#">Nateevo</a>

          <a href="#">Serbatic</a>

          <a href="#">vdSHOP</a>
        </div>
      </div>
      <div className={styles.container_footer}>
        <div className={styles.copyright}>
          <p>Copyright © 2021 Todos los derechos reservados</p>
        </div>
        <div className={styles.politic}>
          <span>
            <a href="#">Memoria ambiental</a>
            <span>|</span>
            <a href="#">Politica de cookies</a>
            <span>|</span>
            <a href="#">Politica de provacidad</a>
            <span>|</span>
            <a href="#">Politica de calidad y medio ambiente</a>
          </span>
        </div>
        <div className={styles.social}>
          <TwitterIcon />
          <LinkedInIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
