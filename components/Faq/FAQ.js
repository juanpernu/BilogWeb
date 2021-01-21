import React, { useState } from "react";

function FAQ({ faq: { question, answer }, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`} key={index} onClick={() => setOpen(!open)}>
      <div className="question-container"> 
        <div className="faq-question">{question}</div> 
        <span className="icon-arrow--down" />
      </div>
      <div className="faq-answer">{answer}</div>
      <style jsx>
        {`
          { /* STYLES FOR MOBILE */ }
          @media only screen and (max-width: 750px) {
            .faq-item {
              margin: 15px;
              padding: 32px;
              background-color: #FFF;
              border-radius: 4px;
              box-shadow: 0px 10px 30px rgba(0,0,0,0.12);
            }
            .faq-item.open {
              max-height: 1000px;
            }
            .question-container {
              display: flex;
              justify-content: space-between;
            }
            .faq-question {
              position: relative;
              font-size: 18px;
              text-align: left;
            }
            .faq-answer {
              font-size: 14px;
              width: 96%;
              text-align: left;
              opacity: 0;
              max-height: 0;
              overflow-y: hidden;
              transition: all 0.2s ease-out;
            }
            .faq-item.open > .question-container {
              box-shadow: 0px 10px 10px -15px #111;
            }
            .faq-item.open > .question-container > .faq-question {
              margin-bottom: 10px;
            }
            .faq-item.open > .faq-answer {
              max-height: 100%;
              opacity: 1;
              padding-top: 20px;
            }
            .icon-arrow--down {
              content: url('/static/bilog-arrow-down.svg');
              margin-left: 10px;
              display: inline-block;
              width: 15px;
              height: auto;
            }
            .faq-item.open > .question-container > .icon-arrow--down {
              transform: rotate(180deg);
              margin-bottom: 10px;
            }
          }

          { /* STYLES FOR DESKTOP */ }
          @media only screen and (min-width: 751px) {
            .faq-item {
              margin: 15px;
              padding: 32px;
              background-color: #FFF;
              border-radius: 4px;
              box-shadow: 0px 10px 30px rgba(0,0,0,0.12);
            }
            .faq-item.open {
              max-height: 1000px;
            }
            .question-container {
              display: flex;
              justify-content: space-between;
            }
            .faq-question {
              font-size: 18px;
              text-align: left;
            }
            .faq-answer {
              font-size: 14px;
              width: 97%;
              text-align: left;
              opacity: 0;
              max-height: 0;
              overflow-y: hidden;
              transition: all 0.4s ease-out;
            }
            .faq-item.open > .question-container {
              box-shadow: 0px 10px 10px -15px #111;
            }
            .faq-item.open > .question-container > .faq-question {
              margin-bottom: 10px;
            }
            .faq-item.open > .faq-answer {
              max-height: 100%;
              opacity: 1;
              padding-top: 20px;
            }
            .icon-arrow--down {
              content: url('/static/bilog-arrow-down.svg');
              margin-left: 10px;
              display: inline-block;
              width: 15px;
              height: auto;
            }
            .faq-item.open > .question-container > .icon-arrow--down {
              transform: rotate(180deg);
              margin-bottom: 10px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default FAQ;
