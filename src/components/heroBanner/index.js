import React from "react";
import styles from "./heroBanner.module.css";

const HeroBanner = ({ heroBannerData }) => {
  console.log(heroBannerData);
  return (
    <section>
      <div className={`${styles.heroBlock} ${styles.cf}`}>
        <div className={styles.imgWrapper}>
          <img src={heroBannerData[0].fields.image.fields.file.url} alt="" />
        </div>
        <div className={styles.infoBlock}>
          <h2>{heroBannerData[0].fields.headline}</h2>
          <p>{heroBannerData[0].fields.bodyText.content[0].content[0].value}</p>
          {heroBannerData[0].fields.ctaText ? (
            <a href="#">{heroBannerData[0].fields.ctaText}</a>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
