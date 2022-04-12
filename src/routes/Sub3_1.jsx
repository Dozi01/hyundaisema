import styles from "./Sub1_1.module.css";
import sema11 from "../img/HPsemaimg/sema11.jpg";
import sema12 from "../img/HPsemaimg/sema12.jpg";

import MenuCoverImg from "../components/MenucoverImg";

function Sub3_1() {
  return (
    <div className={styles.container}>
      <section className={styles.coverPage}>
        <MenuCoverImg />
      </section>
      <section className={styles.mainPage}>
        <h1 className={styles.title}>상업시설</h1>
        <div className={styles.mainPageContainer}>
          <img className={styles.image} src={sema11} />
          <img className={styles.image} src={sema12} />
        </div>
      </section>
    </div>
  );
}

export default Sub3_1;
