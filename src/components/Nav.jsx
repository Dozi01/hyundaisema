import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { Group_obj, Group_key_arr } from "../atom/NavList";
import mainLogo from "../img/logo-removebg.png";

function Nav() {
  // scroll, hover 상태에 따라 nav css 변경
  const [Hover, setHover] = useState(false);

  const handleMouseHover = () => {
    if (Hover) {
      setHover(false);
    } else {
      setHover(true);
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
    <div>
      <div
        className={styles.container}
        style={Hover ? white : transparent}
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseHover}
      >
        <div>
          <Link to={`/`}>
            <img className={styles.Logo} src={mainLogo} alt="hyundaisemaLogo" />
          </Link>
        </div>
        <div className={styles.Nav__option__list}>
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
          <a href="tel:16669338">전화</a>
        </button>
      </div>
    </div>
  );
}

export default Nav;
