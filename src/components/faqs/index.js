import React from "react";
import faqs from "./faqs";
import styles from "./styles.module.css";

const FAQS = () => {
  return (
    <section className={styles.faqs}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h1>FAQS</h1>
          </div>
        </div>
        {faqs.map((faq, index) => (
          <div key={index} className="row">
            <div className="col col--12">
              <h3>{faq.title}</h3>
            </div>
            <div className="col col--12">
              <p>{faq.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQS;
