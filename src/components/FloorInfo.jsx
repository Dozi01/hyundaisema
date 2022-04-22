import styles from "./FloorInfo.module.css";
import { useState } from "react";

import { Pagination } from "react-bootstrap";

import sema22 from "../img/HPsemaimg/sema22.jpg";
import sema23 from "../img/HPsemaimg/sema23.jpg";
import sema24 from "../img/HPsemaimg/sema24.jpg";
import sema25 from "../img/HPsemaimg/sema25.jpg";
import sema26 from "../img/HPsemaimg/sema26.jpg";
import sema27 from "../img/HPsemaimg/sema27.jpg";
import sema33 from "../img/HPsemaimg/sema33.jpg";
import sema34 from "../img/HPsemaimg/sema34.jpg";
import sema35 from "../img/HPsemaimg/sema35.jpg";
import sema36 from "../img/HPsemaimg/sema36.jpg";
import sema37 from "../img/HPsemaimg/sema37.jpg";
import sema38 from "../img/HPsemaimg/sema38.jpg";
import sema39 from "../img/HPsemaimg/sema39.jpg";
import sema40 from "../img/HPsemaimg/sema40.jpg";
import sema41 from "../img/HPsemaimg/sema41.jpg";
import sema42 from "../img/HPsemaimg/sema42.jpg";
import sema43 from "../img/HPsemaimg/sema43.jpg";
import sema44 from "../img/HPsemaimg/sema44.jpg";
import sema45 from "../img/HPsemaimg/sema45.jpg";
import sema46 from "../img/HPsemaimg/sema46.jpg";
import sema47 from "../img/HPsemaimg/sema47.jpg";
import sema48 from "../img/HPsemaimg/sema48.jpg";
import sema49 from "../img/HPsemaimg/sema49.jpg";
import sema50 from "../img/HPsemaimg/sema50.jpg";
import sema51 from "../img/HPsemaimg/sema51.jpg";
import sema52 from "../img/HPsemaimg/sema52.jpg";
import sema53 from "../img/HPsemaimg/sema53.jpg";
import sema54 from "../img/HPsemaimg/sema54.jpg";
import sema55 from "../img/HPsemaimg/sema55.jpg";
import sema56 from "../img/HPsemaimg/sema56.jpg";
import sema57 from "../img/HPsemaimg/sema57.jpg";
import sema58 from "../img/HPsemaimg/sema58.jpg";
import sema59 from "../img/HPsemaimg/sema59.jpg";
import sema60 from "../img/HPsemaimg/sema60.jpg";
import sema61 from "../img/HPsemaimg/sema61.jpg";
import sema62 from "../img/HPsemaimg/sema62.jpg";
import sema63 from "../img/HPsemaimg/sema63.jpg";

function FloorInfo() {
  const [active, setActive] = useState(0);
  const floors = ["B2", "B1", "1F", "2~10F", "11~15F"];
  const images = [
    [sema22, sema33, sema34],
    [sema23, sema35, sema36],
    [sema24, sema37, sema38],
    [
      sema25,
      sema39,
      sema40,
      sema41,
      sema42,
      sema43,
      sema44,
      sema45,
      sema46,
      sema47,
      sema48,
      sema49,
      sema50,
      sema51,
      sema52,
      sema53,
      sema54,
      sema55,
      sema56,
    ],
    [sema26, sema27, sema57, sema58, sema59, sema60, sema61, sema62, sema63],
  ];
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
      {images[active].map((img) => (
        <li key={img}>
          <img className={styles.image} src={img} key={img}></img>
        </li>
      ))}
    </div>
  );
}

export default FloorInfo;
