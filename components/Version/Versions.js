import React from 'react'
import Title from '../Title'
import Card from '../Card'
import Button from '../Button'

class Feature extends React.Component {
  constructor(){
    super();
  }

  render() { 
    return(
      <section className="versions">
        <div className="versions--container">
          <Title
            title="Hay un plan pensado especialmente para vos"
            subtitle="Bilog es perfecto para clínicas de cualquier tamaño."
            alignCenter={true}
          />
          <div className="versions--container-cards">
            {/* TODO: Pasar toda esta info a un mock */}
            <Card
              smallText="Para un solo profesional"
              title="Versión Small"
              subtitle="Si sos un profesional independiente que trabaja en uno o más consultorios, éste es tu plan ideal."
              hasCta={true}
            />
            <Card
              smallText="Para un solo profesional"
              title="Versión Standard"
              subtitle="Si tenés un centro de una o más especialidades, con varios consultorios, éste es tu plan ideal."
              hasCta={true}
            />
            <Card
              smallText="Para varios profesionales"
              title="Versión Small Premium"
              subtitle="Si tenés un centro de una o más especialidades, con varios consultorios, éste es tu plan ideal."
              hasCta={true}
            />
            <Card
              smallText="Para varios profesionales"
              title="Versión Full"
              subtitle="Si tenés un centro de una o más especialidades, con varios consultorios, éste es tu plan ideal."
              hasCta={true}
            />
          </div>
          <div className="versions--more-info">
            <p>¿Todavía no te decidiste?</p>
            <Button
              buttonHref="/versions-detail"
              customClass="secondary">
              Ver más info
            </Button>
          </div>
        </div>
        <style jsx>
          {`
            {/* STYLES FOR MOBILE */}
            @media only screen and (max-width: 750px) {
              .versions {
                text-align: center;
                border-top: 1px solid #eee;
              }
              .versions--container {
                padding: 40px 30px;
                display: flex;
                flex-direction: column;
              }
            }
  
            {/* STYLES FOR DESKTOP */}
            @media only screen and (min-width: 751px) {
              .versions {
                text-align: center;
                border-top: 1px solid #eee;
              }
              .versions--container {
                width: 100%;
                margin: 0 auto;
                padding: 160px 0;
                max-width: 1024px;
                text-align: center;
              }
              .versions--container-cards {
                display: grid;
                grid-template-columns: 48% 48%;
                grid-column-gap: 4%;
                grid-row-gap: 2%;
              }
              .versions--more-info {
                font-size: 14px;
                max-width: 400px;
                margin: 40px auto 0;
                display: flex;
                align-items: center;
                justify-content: space-around;
              }
              .versions--more-info p {
                margin: 0;
                font-size: 14px;
              }
            }
          `}
          </style>
      </section>
    )
  }
}

export default Feature
