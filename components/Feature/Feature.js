import React from 'react'
import Link from 'next/link'
import Title from '../Title'
import FeatureItem from './FeatureItem'

const Feature = ({ features }) => {
  return (
    <>
      {
        features.map((feature, index) => {
          const { title, description, hasColorBackground, successCase, featureItems, image, layout } = feature;
          return (
            <section key={index} className={`feature-section ${hasColorBackground ? "color-background" : ""}`}>
              <div className="feature">
                <Title
                  title={title}
                  subtitle={description}
                />
                {successCase &&
                  <Link className="link--display" href={`${successCase.href}`}>
                    <a className="link--primary">{successCase.text}</a>
                  </Link>
                }
                <div className={`${layout == 'portrait' ? "portrait-layout" : ""}`}>
                  {image &&
                    <div className="feature-img--container">
                      <img className="feature-img" src={image}></img>
                    </div>
                  }
                  <div className="feature-item--container">
                    {featureItems.map((item, index) => <FeatureItem
                      key={index}
                      icons={item.icon}
                      title={item.title}
                      description={item.description}
                      button={item.button}
                    />)}
                  </div>
                </div>
              </div>
              <style jsx>
                {`
                          {/* STYLES FOR MOBILE */}
                          @media only screen and (max-width: 750px) {
                            .feature-section {
                              padding: 30px;
                            }
                            .feature-section.color-background {
                              background: #f0f9fe;
                            }
                            .feature-section .feature {
                              width: 100%;
                              margin: 0 auto;
                              padding: 50px 0;
                              max-width: 1024px;
                              text-align: left;
                            }
                            .feature-item--container {
                              padding-top: 26px;
                              display: grid;
                              grid-template-columns: auto auto auto;
                            }
                            :global(a.link--primary) {
                              margin: 30px 0;
                              color: rgb(6, 125, 247);
                              text-decoration: none;
                              display: inline-block;
                              padding: 2.5px 5px;
                              border-radius: 5px;
                            }
                            .feature-item--container {
                              display: inline-table;
                            }
                            .feature-img--container .feature-img {
                              width: 100%;
                            }
                            .feature-img--container .feature-img {
                              width: 100%;
                              height: 95%;
                            }
                          }

                          {/* STYLES FOR DESKTOP */}
                          @media only screen and (min-width: 751px) {
                            .feature-section {
                              border-bottom: 1px solid #dadedf;
                            }
                            .feature-section.color-background {
                              background: #f0f9fe;
                            }
                            .feature-section .feature {
                              width: 100%;
                              margin: 0 auto;
                              padding: 180px 0;
                              max-width: 1024px;
                              text-align: center;
                            }
                            .feature-item--container {
                              padding-top: 26px;
                              display: grid;
                              grid-template-columns: auto auto auto;
                            }
                            :global(a.link--primary) {
                              margin: 30px 0;
                              color: rgb(6, 125, 247);
                              text-decoration: none;
                              display: inline-block;
                              padding: 2.5px 5px;
                              border-radius: 5px;
                            }
                            :global(a.link--primary):hover {
                              color: #0076ff;
                              padding: 2.5px 5px;
                              background: rgba(0,118,255,0.1);
                            }
                            .feature-section.color-background :global(a.link--primary) {
                              color: #fff;
                            }
                            .feature-section.color-background :global(a.link--primary):hover {
                              background: rgba(255,255,255,0.1);
                            }
                            .feature-img--container .feature-img {
                              width: 100%;
                            }
                            .portrait-layout {
                              display: flex;
                              flex-direction: row-reverse;
                            }
                            .portrait-layout .feature-img--container {
                              flex: 1;
                            }
                            .portrait-layout .feature-item--container {
                              flex: 1;
                              display: inline-table;
                            }
                            .portrait-layout .feature-img--container .feature-img {
                              width: 100%;
                              height: 100%;
                            }
                          }
                        `}
              </style>
            </section>)
        })
      }
    </>
  );
};

export default Feature;