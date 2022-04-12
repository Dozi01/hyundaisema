import React, { useState } from "react";
import { writeUserData } from "../service/Db";
import styles from "./CustomerInfo.module.css";

function CustomerInfo() {
  const [values, setValues] = useState({ name: "", email: "", phoneNum: "" });
  //   const [check, setCheck] = use;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    writeUserData(values.name, values.email, values.phoneNum);
    alert("제출되었습니다!");
    e.preventDefault();
    setValues({ name: "", email: "", phoneNum: "" });
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>관심 고객 등록</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p className={styles.inputBox} type="성 명:">
          <input
            value={values.name}
            name="name"
            className={styles.input}
            onChange={handleChange}
          />
        </p>
        <p className={styles.inputBox} type="E-mail:">
          <input
            value={values.email}
            name="email"
            className={styles.input}
            onChange={handleChange}
          />
        </p>
        <p className={styles.inputBox} type="연락처:">
          <input
            value={values.phoneNum}
            name="phoneNum"
            className={styles.input}
            onChange={handleChange}
          />
        </p>
        <div className={styles.consent}>
          <p>
            <span className={styles.strong}>수집하는 개인정보의 항목</span>
            <br />
            당사는 개인정보보호법, 정보통신망이용촉진및정보보호등에관한법률 등
            관련 법규상의 개인정보보호규정을 준수하고 있으며,
            <br />
            최적의 서비스 제공을 위하여 필요한 최소 범위 내에서 아래와 같이
            개인정보를 수집하고 있습니다.
            <br />
            - 수집항목 : 이름, 연락처, 주소
            <br />
            <br />
            <span className={styles.strong}>개인정보의 수집 및 이용목적</span>
            <br />
            회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
            <br />
            - 주요 문의사항 파악
            <br />
            - 고객상담 이력관리
            <br />
            - 당사 분양상품에 대한 안내 (전화, 문자, 우편)
            <br />
            <br />
            <span className={styles.strong}>개인정보의 보유 및 이용기간</span>
            <br />
            분양완료 후 30일 이내 (본 동의 철회 시 즉시 폐기)
            <br />
            <br />
            <span className={styles.strong}>개인정보 동의를 거부할 권리</span>
            <br />
            귀하께서는 개인정보 수집/이용을 거절할 수 있으며, 거절하실 경우
            분양정보 안내 등의 서비스를 제공해 드릴 수 없습니다.
            <p>
              <span className={styles.strong}>수집하는 개인정보의 항목</span>
              <br />
              당사는 개인정보보호법, 정보통신망이용촉진및정보보호등에관한법률 등
              관련 법규상의 개인정보보호규정을 준수하고 있으며,
              <br />
              최적의 서비스 제공을 위하여 필요한 최소 범위 내에서 아래와 같이
              개인정보를 수집하고 있습니다.
              <br />
              - 수집항목 : 이름, 연락처, 주소
              <br />
              <br />
              <span className={styles.strong}>개인정보수집주체</span>
              <br />
              <br />
              <span className={styles.strong}>개인정보의 수집 및 이용목적</span>
              <br />
              회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
              <br />
              - 주요 문의사항 파악
              <br />
              - 고객상담 이력관리
              <br />
              - 당사 분양상품에 대한 안내 (전화, 문자, 우편)
              <br />
              <br />
              <span className={styles.strong}>개인정보의 보유 및 이용기간</span>
              <br />
              분양완료 후 30일 이내 (본 동의 철회 시 즉시 폐기)
              <br />
              <br />
              <span className={styles.strong}>개인정보 동의를 거부할 권리</span>
              <br />
              귀하께서는 개인정보 수집/이용을 거절할 수 있으며, 거절하실 경우
              분양정보 안내 등의 서비스를 제공해 드릴 수 없습니다.
            </p>
          </p>
        </div>
        <label>
          <input type="checkbox" />
          <span
            className={styles.checkbox}
            type="개인정보 수집 및 이용에 동의하십니까? (필수)"
          >
            "개인정보 수집 및 이용에 동의하십니까? (필수)"
          </span>
        </label>
        <button className={styles.button} type="submit" href="/">
          제출
        </button>
      </form>
    </div>
  );
}

export default CustomerInfo;
