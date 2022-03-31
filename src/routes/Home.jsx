import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.coverPage}>
        <div className={styles.description}>
          <h1 className={styles.title}>현대 프리미어 캠퍼스</h1>
          <h2 className={styles.subpage}>사업 개요</h2>
        </div>
        {/* <button className={styles.btn}>관심고객등록</button> */}
      </section>
    </div>
  );
}

export default Home;
