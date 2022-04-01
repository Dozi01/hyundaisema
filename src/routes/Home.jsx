import styles from "./Home.module.css";
import mainImg from "../img/HPsemaimg/SemaImg.jpg";
import sema1 from "../img/HPsemaimg/sema1.jpg";
import sema2 from "../img/HPsemaimg/sema2.jpg";

function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.coverPage}>
        <img className={styles.coverImg} src={mainImg} />
        {/* <div className={styles.description}>
          <h1 className={styles.title}>현대 프리미어 캠퍼스</h1>
          <h2 className={styles.subpage}>사업 개요</h2>
          <button className={styles.btn}>관심고객등록</button>
        </div> */}
      </section>
      <section className={styles.mainPage}>
        <div className={styles.mainPageContainer}>
          <img className={styles.image} src={sema1} />

          <img className={styles.image} src={sema2} />
        </div>
      </section>
    </div>
  );
}

export default Home;
