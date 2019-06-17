import React from 'react'
import Title from '../Title'
import Card from '../Card/Card'
import ButtonLink from '../Buttons/ButtonLink'
import versionsFeatures from '../../mocks/versionsFeatures'

class Versions extends React.Component {
  constructor(){
    super();
  }

  render() {
    const { small, standard, smallPremium, full } = versionsFeatures;

    return(
      <section className="versions">
        <div className="versions--container">
          <Title
            title="Hay una versión pensada especialmente para vos"
            subtitle="Bilog es perfecto para clínicas de cualquier tamaño."
            alignCenter
          />
          <div className="versions--container-cards">
            <Card
              smallText={small.data.smallText}
              title={small.data.title}
              subtitle={small.data.subtitle}
              buttonText="Ver más"
            />
            <Card
              smallText={standard.data.smallText}
              title={standard.data.title}
              subtitle={standard.data.subtitle}
              buttonText="Ver más"
            />
            <Card
              smallText={smallPremium.data.smallText}
              title={smallPremium.data.title}
              subtitle={smallPremium.data.subtitle}
              buttonText="Ver más"
            />
            <Card
              smallText={full.data.smallText}
              title={full.data.title}
              subtitle={full.data.subtitle}
              buttonText="Ver más"
            />
          </div>
          <div className="versions--more-info">
            <p>¿Todavía no te decidiste?</p>
            <ButtonLink
              buttonHref="/versions-detail"
              customClass="secondary"
              buttonText='Ver más info'
            />
          </div>
        </div>
        <style jsx>
          {`
            {/* STYLES FOR MOBILE */}
            @media only screen and (max-width: 750px) {
              .versions {
                text-align: center;
                border-top: 1px solid #eee;
                border-bottom: 1px solid #eee;
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
                border-bottom: 1px solid #eee;
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
              :global(.versions--container-cards .button--container) {
                  margin: 0;
                }
            }
          `}
          </style>
      </section>
    )
  }
}

export default Versions
