import styles from "./Sub1_1.module.css";
import sema6 from "../img/HPsemaimg/sema6.jpg";
import sema7 from "../img/HPsemaimg/sema7.jpg";
import sema8 from "../img/HPsemaimg/sema8.jpg";
import sema29 from "../img/HPsemaimg/sema29.jpg";
import sema30 from "../img/HPsemaimg/sema30.jpg";
import sema31 from "../img/HPsemaimg/sema31.jpg";
import sema32 from "../img/HPsemaimg/sema32.jpg";

import MenuCoverImg from "../components/MenucoverImg";

function Sub4_1() {
  return (
    <div className={styles.container}>
      <section className={styles.coverPage}>
        <MenuCoverImg />
      </section>
      <section className={styles.mainPage}>
        <h1 className={styles.title}>관련뉴스</h1>
        <div className={styles.mainPageContainer}>
          <img className={styles.image} src={sema6} />
          <img className={styles.image} src={sema7} />
          <img className={styles.image} src={sema8} />
          <img className={styles.image} src={sema29} />
          <img className={styles.image} src={sema30} />
          <img className={styles.image} src={sema31} />
          <img className={styles.image} src={sema32} />
        </div>
      </section>
    </div>
  );
}

export default Sub4_1;
