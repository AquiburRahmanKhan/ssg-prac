import React from "react";
import styles from "./faqs.module.css";

const FAQS = ({ faqs }) => {
  console.log(faqs);
  return (
    <section className={styles.faqs}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h1>FAQS</h1>
          </div>
        </div>
        {faqs.map((faq) => (
          <div key={faq.sys.id} className="row">
            <div className="col col--12">
              <h3>{faq.fields.question}</h3>
            </div>
            <div className="col col--12">
              <p>{faq.fields.answer.content[0].content[0].value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQS;
