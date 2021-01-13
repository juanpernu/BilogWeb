import React, { useState } from 'react'
import FAQ from './FAQ'
import { faqs } from '../mocks/faqs'

function Accordion() {
    const [allFaqs, setfaqs] = useState(faqs);

    const toggleFAQ = index => {
        setfaqs(allFaqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }

            return faq;
        }))
    }
    return (
        <section className="accordion-section">
            <div className="faqs-container">
                <div className="all-faqs">
                    {allFaqs.map((faq, i) => (
                        <div className="faq">
                            <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
                        </div>
                    ))}
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
                            .faq {
                                margin: 15px;
                                padding: 15px;
                                background-color: #FFF;
                                border-radius: 2px;
                                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
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
                            .faq {
                                margin: 15px;
                                padding: 15px;
                                background-color: #FFF;
                                border-radius: 2px;
                                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
                            }  
                        }
                    `}
            </style>
        </section>
    )
}

export default Accordion
