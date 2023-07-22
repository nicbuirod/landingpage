import React, { useState } from "react";
import styles from "./header.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import icon from "../../images/vass.png";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderComponent = ({ onHoverChange }) => {
  const [country, setCountry] = useState(false);
  const [divider, setDivider] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleFocus = () => {
    setCountry(true);
  };
  const handleLeave = () => {
    setCountry(false);
  };

  const handleMouseEnter = () => {
    onHoverChange(true);
    setDivider(true);
  };

  const handleMouseLeave = () => {
    onHoverChange(false);
    setDivider(false);
  };

  return (
    <div className={styles.background}>
      <div className={styles.background_color}>
        <div className={styles.divider}></div>
        {divider && <div className={styles.divider_black}></div>}
        <div
          className={styles.menu_header}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.menu}>
            <div className={styles.icon}>
              <img src={icon} alt="vass" className={styles.icon_image} />
            </div>
            <div className={styles.right_menu}>
              <div className={styles.links}>
                <a href="#">Casos de éxito</a>
                <h2>
                  Mercados <span>▼</span>
                </h2>
                <h2 onMouseEnter={handleFocus}>
                  Países <span>▼</span>
                </h2>
                <h2>
                  Somos VASS <span>▼</span>
                </h2>
                <h2>
                  Cómo lo hacemos <span>▼</span>
                </h2>
                <a href="#">Insights</a>
                <a href="#">Noticias</a>
                <a href="#">VASS Research</a>
                <h2>EN</h2>
                <SearchIcon className={styles.icon_search} />
              </div>
              <a href="#" className={styles.talent}>
                Talento
              </a>
            </div>
            <div className={styles.show_menu}>
              <SearchIcon className={styles.icon_search} />
              <button className={styles.button_menu}>
                <MenuIcon />
              </button>
              {menu && (
                <div className={styles.links}>
                  <a href="#">Casos de éxito</a>
                  <h2>
                    Mercados <span>▼</span>
                  </h2>
                  <h2 onMouseEnter={handleFocus}>
                    Países <span>▼</span>
                  </h2>
                  <h2>
                    Somos VASS <span>▼</span>
                  </h2>
                  <h2>
                    Cómo lo hacemos <span>▼</span>
                  </h2>
                  <a href="#">Insights</a>
                  <a href="#">Noticias</a>
                  <a href="#">VASS Research</a>
                  <h2>EN</h2>

                  <a href="#" className={styles.talent}>
                    Talento
                  </a>
                </div>
              )}
            </div>
          </div>
          {country && (
            <div
              className={styles.country}
              onMouseEnter={handleFocus}
              onMouseLeave={handleLeave}
            >
              <span className={styles.country_select}>Chile</span>
              <span className={styles.country_select}>Colombia</span>
              <span className={styles.country_select}>México</span>
              <span className={styles.country_select}>Perú</span>
              <span className={styles.country_select}>Reino Unido</span>
              <span className={styles.country_select}>Benelux</span>
            </div>
          )}
        </div>
        <div className={styles.contact}>CONTACTO</div>
      </div>
    </div>
  );
};

export default HeaderComponent;
