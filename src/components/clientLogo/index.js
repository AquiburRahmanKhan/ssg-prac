import React from "react";
import styles from "./clientLogo.module.css";

const ClientLogo = ({ clientLogoData }) => {
  return (
    <div className={styles.clientLogoContainer}>
      <section className={styles.clientLogoHeader}>
        <h2>{clientLogoData[0].fields.headline}</h2>
      </section>
      <ul className={styles.listLogo}>
        {clientLogoData[0].fields.logo.map((logo) => (
          <li key={logo.sys.id}>
            <img alt={logo.fields.description} src={logo.fields.file.url} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientLogo;
