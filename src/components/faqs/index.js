import React, { useState } from "react";
import styles from "./faqs.module.css";

const FAQS = ({ faqs }) => {
  const [openFaqs, setOpenFaqs] = useState([]);

  const toggleOpen = (id) => {
    if (openFaqs.includes(id)) {
      setOpenFaqs(openFaqs.filter((faqId) => faqId !== id));
    } else {
      setOpenFaqs([...openFaqs, id]);
    }
  };

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
            <div className="col col--12" onClick={() => toggleOpen(faq.sys.id)}>
              <h3>{faq.fields.question}</h3>
            </div>
            {openFaqs.includes(faq.sys.id) ? (
              <div className="col col--12">
                <p>{faq.fields.answer.content[0].content[0].value}</p>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQS;
