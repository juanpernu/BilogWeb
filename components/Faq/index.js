import React from "react";
import FAQ from "./FAQ";

function Accordion({ data }) {
  return (
    <section className="accordion-section">
      <div className="faqs-container">
        <div className="all-faqs">
          {data.map((faq, i) => <FAQ faq={faq} index={i} />)}
        </div>
      </div>
      <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
              .accordion-section {
                  width: 100%;
                  margin: 0 auto;
                  padding: 80px 0;
                  text-align: center;
              }
              .faqs-container {
                  padding: 50px 0;
                  background: #fff;
                  border-bottom: 1px solid #eaeaea;
              }
              .all-faqs {
                  width: 100%;
                  margin: 0 auto;
                  padding 15px;
              }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
              .accordion-section {
                  width: 100%;
                  margin: 0 auto;
                  padding: 80px 0;
                  text-align: center;
              }
              .faqs-container {
                  padding: 90px 0 50px;
                  background: #fff;
                  border-bottom: 1px solid #eaeaea;
              }
              .all-faqs {
                  width: 100%;
                  margin: 0 auto;
                  padding 15px;
              }
          }
      `}
      </style>
    </section>
  );
}

export default Accordion;
