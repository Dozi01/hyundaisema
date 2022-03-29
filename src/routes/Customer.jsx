import React from "react";
import styles from "./Customer.module.css";
import mainImg from "../images/Sample.jpg";

function Customer() {
  const containerStyle = {
    backgroundImage: `url(${mainImg})`,
    width: "100vw",
  };
  return (
    <section className={styles.section} style={containerStyle}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>관심 고객 등록</h2>
        <form className={styles.form}>
          <p type="이 름:">
            <input className={styles.input} />
          </p>
          <p type="E-mail:">
            <input className={styles.input} />
          </p>
          <p type="전화번호:">
            <input className={styles.input} />
          </p>

          <button className={styles.button} type="submit" href="/">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Customer;
