import React, { useState } from 'react'

function FAQ({ faq, index, toggleFAQ }) {
    return (
        <div className="" key={index} onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
                {faq.question}
            </div>
            <div className="faq-answer">
                {faq.answer}
            </div>
            <style jsx>
                {`
                        {/* STYLES FOR MOBILE */}
                        @media only screen and (max-width: 750px) {
                            .faq-question {
                                position: relative;
                                font-size: 20px;
                                padding-right: 80px;
                            }
                            .faq-question::after {
                                content: '';
                                position: absolute;
                                top: 50%;
                                right: 0px;
                                transform: translateY(-50%);
                                width: 30px;
                                height: 30px;

                                background-image: url('../static/arrow-down.svg');
                                background-position: center;
                                background-size: contain;
                                background-repeat: no-repeat;

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
                        }
                        
                        {/* STYLES FOR DESKTOP */}
                        @media only screen and (min-width: 751px) {
                            .faq-question {
                                position: relative;
                                font-size: 20px;
                                padding-right: 80px;
                            }
                            .faq-question::after {
                                content: '';
                                position: absolute;
                                top: 50%;
                                right: 0px;
                                transform: translateY(-50%);
                                width: 30px;
                                height: 30px;

                                background-image: url('../static/arrow-down.svg');
                                background-position: center;
                                background-size: contain;
                                background-repeat: no-repeat;

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
                        }
                `}
            </style>
        </div>
    )
}

export default FAQ
