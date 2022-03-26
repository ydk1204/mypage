import React from "react";
import styles from "./Video.module.css";

const VideoBackground = ({ videoSrc }) => {
  return (
    <div className={styles.videoBox}>
      <div className={styles.videoDiv}>
        <video className={styles.video_container} loop autoPlay muted>
          <source
            className={styles.videoSource}
            src={videoSrc}
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default VideoBackground;
