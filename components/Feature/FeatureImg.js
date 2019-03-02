import React from 'react'
import Link from 'next/link'
import FeatureItem from '../Feature/FeatureItem'
import Image from '../Image'

class Feature extends React.Component {
  constructor(){
    super();
  }

  render() {
    const { imgSrc, imgHref, imgAlt, copy} = this.props;
    return(
      <section className="feature-image">
        <Link href={imgHref}>
          <Image src={imgSrc} alt={imgAlt} />
        </Link>
        <div className="feature-image-content">
          <p className="feature-image-content--copy">{copy}</p>
          <FeatureItem title="Un atrctivo software de gestión" description="Crea una conexión liberada que le permite a los usuarios conectarse a Wi-Fi sin tener que consultarle la contraseña al encargado." />
        </div>
        <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .feature-image {
              padding: 40px 30px;
            }
            .feature-image-content--copy {
              font-size: 12px;
              font-weight: 400;
              line-height: 0.3;
              color: #96a1a3;
            }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .feature-image {
              display: flex;
              flex-direction: row;
              width: 100%;
              margin: 0 auto;
              padding: 180px 0;
              max-width: 1024px;
              text-align: center;
            }
            .feature-image-content {
              display: flex;
              flex-direction: column;
              text-align: left;
              max-width: 400px;
              align-self: center;
            }
            .feature-image-content--copy {
              margin: 0 30px;
            }
          }
        `}
        </style>
      </section>
    )
  }
}

export default Feature
