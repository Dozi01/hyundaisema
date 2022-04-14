import styles from "./FloorInfo.module.css";
import { useState } from "react";

import { Pagination } from "react-bootstrap";

import sema22 from "../img/HPsemaimg/sema22.jpg";
import sema23 from "../img/HPsemaimg/sema23.jpg";
import sema24 from "../img/HPsemaimg/sema24.jpg";
import sema25 from "../img/HPsemaimg/sema25.jpg";
import sema26 from "../img/HPsemaimg/sema26.jpg";
import sema27 from "../img/HPsemaimg/sema27.jpg";

function FloorInfo() {
  const [active, setActive] = useState(0);
  const floors = ["B2", "B1", "1F", "2~10F", "11~15F"];
  const images = [sema22, sema23, sema24, sema25, sema26, sema27];
  const items = [];
  for (let i = 0; i < floors.length; i++) {
    items.push(
      <Pagination.Item
        key={i}
        active={i === active}
        onClick={() => setActive(i)}
      >
        {floors[i]}
      </Pagination.Item>
    );
  }
  return (
    <div className={styles.container}>
      <Pagination className={styles.pagination}>{items}</Pagination>
      <img className={styles.image} src={images[active]} />
    </div>
  );
}

export default FloorInfo;
