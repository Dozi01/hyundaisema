import styles from "./Home.module.css";
import sema1 from "../img/HPsemaimg/sema1.jpg";
import sema5 from "../img/HPsemaimg/sema5.jpg";
import sema10 from "../img/HPsemaimg/sema10.jpg";

import MainBanner from "../components/MainBanner";

function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.coverPage}>
        <MainBanner />
        {/* <div className={styles.description}>
          <h1 className={styles.title}>현대 프리미어 캠퍼스</h1>
          <h2 className={styles.subpage}>사업 개요</h2>
          <button className={styles.btn}>관심고객등록</button>
        </div> */}
      </section>
      <section className={styles.mainPage}>
        <div className={styles.mainPageContainer}>
          <img className={styles.image} src={sema1} />
          <h3 className={styles.phrases1}>
            세교신도시를 대표하는 지식산업센터
          </h3>
          <h3 className={styles.phrases2}>성공 비즈니스의 미래가 되다!</h3>
          <img className={styles.image} src={sema5} />
          <img className={styles.image} src={sema10} />
        </div>
      </section>
    </div>
  );
}

export default Home;
