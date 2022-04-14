import semamenu2 from "../img/HPsemaimg/semamenu2.jpg";
import styles from "./MenucoverImg.module.css";

function MenuCoverImg() {
  return (
    <div className={styles.menuCoverImgContainer}>
      <img className={styles.menuCoverImg} src={semamenu2} />
    </div>
  );
}

export default MenuCoverImg;
