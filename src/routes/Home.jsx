import styles from "./Home.module.css";
import sema1 from "../img/HPsemaimg/sema1.jpg";
import sema5 from "../img/HPsemaimg/sema5.jpg";
import sema10 from "../img/HPsemaimg/sema10.jpg";
import sema21 from "../img/HPsemaimg/sema21.jpg";
import sema22 from "../img/HPsemaimg/sema22.jpg";

import MainBanner from "../components/MainBanner";
import CustomerInfo from "../components/CustomerInfo";

function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.coverPage}>
        <MainBanner />
      </section>
      <section className={styles.mainPage}>
        <div className={styles.mainPageContainer}>
          <h1 className={styles.title}>세마역 현대 프리미어 캠퍼스</h1>

          <img className={styles.image} src={sema5} />
          <h3 className={styles.phrases1}>
            세교신도시를 대표하는 지식산업센터
          </h3>
          <h3 className={styles.phrases2}>성공 비즈니스의 미래가 되다!</h3>
          <img className={styles.image} src={sema1} />

          <img className={styles.image} src={sema10} />
          <img className={styles.image} src={sema21} />
          <img className={styles.image} src={sema22} />
          <CustomerInfo />
        </div>
      </section>
    </div>
  );
}

export default Home;
