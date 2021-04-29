import React from "react";
import FAQ from "./FAQ";

function Accordion({ data }) {
  return (
    <section className="accordion-section">
      <div className="faqs-container">
        {data.map((faq, i) => <FAQ faq={faq} index={i} />)}
      </div>
      <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
              .accordion-section {
                  width: 100%;
                  margin: 0 auto;
                  padding: 10px 0;
                  text-align: center;
              }
              .faqs-container {
                  background: #fff;
                  margin: 0 auto;
                  max-width: 646px;
              }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
              .accordion-section {
                  width: 100%;
                  margin: 0 auto;
                  padding: 10px 0;
                  text-align: center;
              }
              .faqs-container {
                  background: #fff;
                  margin: 0 auto;
                  padding: 15px 30px;
                  max-width: 646px;
              }
          }
      `}
      </style>
    </section>
  );
}

export default Accordion;
