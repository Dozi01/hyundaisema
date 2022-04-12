import styles from "./Sub1_1.module.css";
import sema3 from "../img/HPsemaimg/sema3.jpg";
import sema4 from "../img/HPsemaimg/sema4.jpg";

import MenuCoverImg from "../components/MenucoverImg";

function Sub5_1() {
  return (
    <div className={styles.container}>
      <section className={styles.coverPage}>
        <MenuCoverImg />
      </section>
      <section className={styles.mainPage}>
        <h1 className={styles.title}>사업개요</h1>
        <div className={styles.mainPageContainer}>
          <img className={styles.image} src={sema3} />
          <img className={styles.image} src={sema4} />
        </div>
      </section>
    </div>
  );
}

export default Sub5_1;
