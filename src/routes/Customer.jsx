import React from "react";
import styles from "./Customer.module.css";
// import mainImg from "./img/HP세마상담북/HP세마역_상담북_ver.11-01.jpg";

import CustomerInfo from "../components/CustomerInfo";

function Customer() {
  const containerStyle = {
    backgroundImage: `url("../img/HP세마상담북/HP세마역_상담북_ver.11-01.jpg")`,
    width: "100vw",
  };
  return (
    <section className={styles.section} style={containerStyle}>
      <CustomerInfo />
    </section>
  );
}

export default Customer;
