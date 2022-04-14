import styles from "./Sub1_1.module.css";

import MenuCoverImg from "../components/MenucoverImg";
import FloorInfo from "../components/FloorInfo";

function Sub5_1() {
  return (
    <div className={styles.container}>
      <section className={styles.coverPage}>
        <MenuCoverImg />
      </section>
      <section className={styles.mainPage}>
        <h1 className={styles.title}>층별안내</h1>
        <div className={styles.mainPageContainer}>
          <FloorInfo />
        </div>
      </section>
    </div>
  );
}

export default Sub5_1;
