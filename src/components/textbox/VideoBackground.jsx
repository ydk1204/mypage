import React from "react";
import styles from "./Video.module.css";

const VideoBackground = () => {
  return (
    <div className={styles.videoBox}>
      <div className={styles.videoDiv}>
        <video className={styles.video_container} loop autoPlay muted>
          <source
            className={styles.videoSource}
            src="video/library.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default VideoBackground;
