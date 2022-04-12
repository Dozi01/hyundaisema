import React, { useRef, useState } from "react";
import styles from "./MainBanner.module.css";

import mainImg from "../img/HPsemaimg/SemaImg.jpg";
import mainImg2 from "../img/HPsemaimg/SemaImg2.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function MainBanner() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showVideo, setShowVideo] = useState(true);
  const images = [mainImg, mainImg2];
  const imageRef = useRef(0);

  const switchImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage((imageRef.current += 1));
    } else {
      setCurrentImage(1);
    }
  };

  const onClick = () => {
    setShowVideo(false);
  };

  return (
    <div className={styles.mainBannerContainer}>
      <div
        className={styles.coverVideoContainer}
        style={showVideo ? { display: "block" } : { display: "none" }}
      >
        <iframe
          className={styles.coverVideo}
          src={
            "https://player.vimeo.com/video/684135326?h=8c696e8721&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;transparent=0&amp;background=1&amp;app_id=122963"
          }
        ></iframe>
        <button className={styles.videoButton} onClick={onClick}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <img
        className={styles.coverImg}
        src={images[currentImage]}
        alt="mainpage image"
      />
    </div>
  );
}

export default MainBanner;
