import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { Group_obj, Group_key_arr } from "../atom/NavList";
import mainLogo from "../img/logo-removebg.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneFlip,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  // scroll, hover 상태에 따라 nav css 변경
  const [Hover, setHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMouseHover = () => {
    if (Hover) {
      setHover(false);
    } else {
      setHover(true);
    }
  };
  const menuButton = () => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  const white = {
    backgroundColor: "white",
    boxShadow: "0 13px 27px -5px rgba(50, 50, 93, 0.25)",
  };
  const transparent = {
    backgroundColor: "rgba( 255, 255, 255, 0.5 )",
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.navContainer}
        style={Hover ? white : transparent}
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseHover}
      >
        <div className={styles.menuButtonContainer}>
          <button className={styles.menuButton} onClick={menuButton}>
            {menuOpen ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
        <div>
          <Link to={`/`}>
            <img className={styles.logo} src={mainLogo} alt="hyundaisemaLogo" />
          </Link>
        </div>
        <div className={styles.navOptionList}>
          {Group_key_arr.map((key) => {
            return (
              <div className={styles.Link} key={key}>
                <div className={styles.Link_sep}>
                  <Link to={`/${Group_obj[key]}`}>{key}</Link>
                </div>
              </div>
            );
          })}
        </div>

        <button className={styles.phoneCall}>
          <FontAwesomeIcon icon={faPhoneFlip} />
          <a href="tel:16669338">1666-9338</a>
        </button>
      </div>
      {menuOpen ? (
        <div className={styles.navOptionListOpen}>
          {Group_key_arr.map((key) => {
            return (
              <div className={styles.Link} key={key}>
                <div className={styles.Link_sep}>
                  <Link to={`/${Group_obj[key]}`}>{key}</Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Nav;
