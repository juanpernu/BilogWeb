import React from 'react'
import Link from 'next/link'
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
      <section className="feature-section">
        {/* VER DE SACAR ESTA LOGICA A METODOS POR FUERA DEL COMPONENTE */}
        {features.map((feature) => {
          return(
            <div className={`feature ${feature.hasColorBackground ? "color-background" : ""}`}>
              <h2 className="feature--title">{feature.title}</h2>
              <p className="feature--subtitle">{feature.description}</p>
              {this.renderSuccessCase(feature.successCase)}
              {feature.featureItems.map((item) => {
                return <FeatureItem title={item.title} description={item.description}/>
              })}
            </div>
          )})}
        <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .feature-section .feature {
              padding: 30px;
            }
            .feature--title {
              font-size: 28px;
              text-align: left;
              font-weight: 600;
              margin-top: 0px;
              margin-bottom: 24px;
            }
            .feature--subtitle {
              font-size: 16px;
              line-height: 26px;
              margin-bottom: 24px;
            }
            .feature.color-background {
              background: linear-gradient(to right, #8f94fb, #4e54c8);
            }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            
          }
        `}
        </style>
      </section>
    )
  }
}

export default Feature
