import styles from "./Sub1_1.module.css";
import sema9 from "../img/HPsemaimg/sema9.jpg";
import sema4 from "../img/HPsemaimg/sema4.jpg";

import MenuCoverImg from "../components/MenucoverImg";

function Sub2_1() {
  return (
    <div className={styles.container}>
      <section className={styles.coverPage}>
        <MenuCoverImg />
      </section>
      <section className={styles.mainPage}>
        <h1 className={styles.title}>입지환경</h1>
        <div className={styles.mainPageContainer}>
          <img className={styles.image} src={sema9} />
          <img className={styles.image} src={sema4} />
        </div>
      </section>
    </div>
  );
}

export default Sub2_1;
