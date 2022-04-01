import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { Group_obj, Group_key_arr } from "../atom/NavList";

function Footer() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <p className={styles.p}>
          <span className={styles.span}>
            확실한 투자가치. 새로운 라이프스타일이 펼쳐지는곳.
          </span>
          <span className={styles.span}>세마역현대프리미어캠퍼스</span>
          <span className={styles.span}>대표번호 : 1666-9338</span>
          <span className={styles.span}>주소 : 강동구 천호대로 1032</span>
          <span className={styles.span}>
            업체명 : HS홀딩스코리아 (사업자번호 : 869-86-00266)
          </span>
          <span className={styles.span}>
            COPYRIGHT@2022. ALL RIGHTS RESERVED.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
