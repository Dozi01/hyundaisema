import React, { useState } from "react";
import styles from "./Customer.module.css";
import mainImg from "../images/Sample.jpg";
import { app } from "../firebaseConfig";
import { getDatabase, ref, set } from "firebase/database";

function writeUserData(userId, name, email, phoneNum) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    phoneNum: phoneNum,
  });
}
// const db = getDatabase();
// console.log(db);
const newID = () => {
  return Math.random().toString(36).substr(2, 16);
};

function Customer() {
  const [values, setValues] = useState({ name: "", email: "", phoneNum: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    writeUserData(newID(), values.name, values.email, values.phoneNum);
    alert("제출되었습니다!");
    e.preventDefault();
    setValues({ name: "", email: "", phoneNum: "" });
  };

  const containerStyle = {
    backgroundImage: `url(${mainImg})`,
    width: "100vw",
  };
  return (
    <section className={styles.section} style={containerStyle}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>관심 고객 등록</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <p type="이 름:">
            <input
              value={values.name}
              name="name"
              className={styles.input}
              onChange={handleChange}
            />
          </p>
          <p type="E-mail:">
            <input
              value={values.email}
              name="email"
              className={styles.input}
              onChange={handleChange}
            />
          </p>
          <p type="전화번호:">
            <input
              value={values.phoneNum}
              name="phoneNum"
              className={styles.input}
              onChange={handleChange}
            />
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
