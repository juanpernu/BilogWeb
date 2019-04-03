import React from 'react'
import Link from 'next/link'
import Title from '../Title'
import FeatureItem from './FeatureItem'

class Feature extends React.Component {
  constructor(){
    super();
    this.renderSuccessCase = this.renderSuccessCase.bind(this);
  }

  renderSuccessCase(successCase){
    if(successCase){
      return(
        <Link href={`${successCase.href}`}>
          <a className="link--primary">{successCase.text}</a>
        </Link>
      )
    }
    return null
  }

  render() { 
    const { features } = this.props;
    return(
      features.map((feature, index) => {
        return(
          <section key={index} className={`feature-section ${feature.hasColorBackground ? "color-background" : ""}`}>
            <div className="feature">
              <Title
                title={feature.title}
                subtitle={feature.description}
              />
              {this.renderSuccessCase(feature.successCase)}
              <div className="feature-item--container">
                {feature.featureItems.map((item, index) => {
                  return <FeatureItem key={index} icons={item.icon} title={item.title} description={item.description}/>
                })}
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
                :global(a.link--primary) {
                  color: rgb(6, 125, 247);
                  text-decoration: none;
                  margin-bottom: 24px;
                  display: inline-block;
                }
                .feature :global(a.link--primary) {
                  margin-bottom: 46px;
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
                  display: flex;
                  flex-direction: row;
                  justify-content: space-around;
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
              }
            `}
            </style>
          </section>
        )})
    )
  }
}

export default Feature
