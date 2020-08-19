import React from 'react'
import Title from '../Title'
import Card from '../Card/Card'

class DownloadUtils extends React.Component {
  render() { 
    return(
      <section className="download-utils-section">
        <Title
          title="Descargas útiles"
          subtitle="Nuestro objetivo es facilitarte el trabajo, por eso acá vas a poder encontrar algunas herramientas útiles"
          alignCenter={true}
        />
        <div className="download-utils--container-cards">
          <Card
            smallText="Control remoto"
            title="Team Viewer"
            subtitle="Team Viewer te permite compartir tu computadora con nosotros de forma segura para que podamos darte soporte instantáneo."
            buttonText="Ir a Team Viewer"
            buttonHref="https://get.teamviewer.com/BilogQS"
            external={true}
          />
          <Card
            smallText="Video conferencia"
            title="Google Hangouts"
            subtitle="Hangouts es la forma más fácil y segura de realizar video conferencias instantáneas."
            buttonText="Ir a hangouts"
            buttonHref="https://hangouts.google.com"
            external={true}
          />
        </div>
        <style jsx>
            {`
              {/* STYLES FOR MOBILE */}
              @media only screen and (max-width: 750px) {
                .download-utils-section {
                  width: 100%;
                  margin: 0 auto;
                  padding: 80px 0;
                  text-align: center;
                }
                .download-utils--container-cards {
                  padding: 40px 30px;
                  display: flex;
                  flex-direction: column;
                }
              }
    
              {/* STYLES FOR DESKTOP */}
              @media only screen and (min-width: 751px) {
                .download-utils-section {
                  width: 100%;
                  margin: 0 auto;
                  padding: 180px 0 140px;
                  max-width: 1024px;
                  text-align: center;
                }
                .download-utils--container-cards {
                  margin-top: 60px;
                  display: grid;
                  grid-template-columns: 48% 48%;
                  grid-column-gap: 4%;
                  grid-row-gap: 2%;
                }
                :global(.download-utils--container-cards .button--container) {
                  margin: 0;
                }
              }
            `}
            </style>
      </section>
    )
  }
}

export default DownloadUtils
