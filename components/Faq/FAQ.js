import React, { useState } from "react";

function FAQ({ faq: { question, answer }, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`} key={index} onClick={() => setOpen(!open)}>
      <div className="faq-question">{question}</div>
      <div className="faq-answer">{answer}</div>
      <span className="icon-arrow--down" />
      <style jsx>
        {`
          { /* STYLES FOR MOBILE */ }
          @media only screen and (max-width: 750px) {
            .faq-question {
              position: relative;
              font-size: 20px;
              padding-right: 80px;
            }
            .faq-question::after {
              content: "";
              position: absolute;
              top: 50%;
              right: 0px;
              transform: translateY(-50%);
              width: 30px;
              height: 30px;
              transition: all 0.1s ease;
            }
            .faq-answer {
              opacity: 0;
              max-height: 0;
              overflow-y: hidden;
              transition: all 0.4s ease-out;
            }
            .faqs .faq.open .faq-question {
              margin-bottom: 15px;
            }
            .faqs .faq.open .faq-question::after {
              transform: translateY(-50%) rotate(180deg);
            }
            .faqs .faq.open .faq-answer {
              max-height: 1000px;
              opacity: 1;
            }
            .faq-item {
              margin: 15px;
              padding: 15px;
              background-color: #FFF;
              border-radius: 2px;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            }
            .faq-item.open {
              max-height: 100px;
            }
          }

          { /* STYLES FOR DESKTOP */ }
          @media only screen and (min-width: 751px) {
            .faq-item.open {
              max-height: 100px;
            }
            .faq-item {
              margin: 15px;
              padding: 15px;
              background-color: #FFF;
              border-radius: 2px;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            }
            .faq-item.open > .faq-answer {
              max-height: 100%;
              opacity: 1;
            }
            .faq-question {
              font-size: 20px;
            }
            .faq-question::after {
              content: "";
              position: absolute;
              top: 50%;
              right: 0px;
              transform: translateY(-50%);
              width: 30px;
              transition: all 0.1s ease;
            }
            .faq-answer {
              opacity: 0;
              max-height: 0;
              overflow-y: hidden;
              transition: all 0.4s ease-out;
            }
            .faq.open .faq-question {
              margin-bottom: 15px;
            }
            .faq.open .faq-question::after {
              transform: translateY(-50%) rotate(180deg);
            }
            .faq.open .faq-answer {
              max-height: 1000px;
              opacity: 1;
            }
            .icon-arrow--down {
              content: url('/static/bilog-arrow-down.svg');
              margin-left: 10px;
              display: inline-block;
              width: 10px;
              height: auto;
              transition: all 0.4s ease-out;
            }
            .faq-item.open > .icon-arrow--down {
              transform: translateY(-50%) rotate(180deg);
            }
          }
        `}
      </style>
    </div>
  );
}

export default FAQ;
