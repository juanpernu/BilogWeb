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
        <p>{copy}</p>
        <FeatureItem title="Un atrctivo software de gestión" description="Crea una conexión liberada que le permite a los usuarios conectarse a Wi-Fi sin tener que consultarle la contraseña al encargado." />
        <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .feature-image {
              padding: 30px;
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
