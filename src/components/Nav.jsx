import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { Group_obj, Group_key_arr } from "../atom/NavList";
import mainLogo from "../images/logo.png";

function Nav() {
  // scroll, hover 상태에 따라 nav css 변경
  const [NavBlue, setNavBlue] = useState(false);
  const [Hover, setHover] = useState(false);

  const onscroll = () => {
    if (window.scrollY > 0 && !NavBlue) {
      setNavBlue(true);
      return;
    }
    if (window.scrollY == 0 && NavBlue) {
      setNavBlue(false);
      return;
    }
  };

  const handleMouseHover = () => {
    if (Hover) {
      setHover(false);
    } else {
      setHover(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onscroll);
    return () => {
      window.removeEventListener("scroll", onscroll); //clean up
    };
  }, [NavBlue]);

  const blue = {
    backgroundColor: "#1a237e",
    boxShadow: "0 13px 27px -5px rgba(50, 50, 93, 0.25)",
  };
  const transparent = {
    backgroundColor: "transparent",
  };

  return (
    <div>
      <div
        className={styles.container}
        style={NavBlue || Hover ? blue : transparent}
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
                  <Link to={`/page/${Group_obj[key]}`}>{key}</Link>
                </div>
              </div>
            );
          })}
        </div>
        <a href="tel:01093953184">전화</a>
      </div>
    </div>
  );
}

export default Nav;
