import React from "react";
import styles from "./Customer.module.css";
import CustomerInfo from "../components/CustomerInfo";
import mainImg from "../img/HPsemaimg/SemaImg.jpg";
import MenuCoverImg from "../components/MenucoverImg";

function Customer() {
  return (
    <section className={styles.section}>
      <MenuCoverImg />

      <div className={styles.customerInfo}>
        <CustomerInfo />
      </div>
    </section>
  );
}

export default Customer;
