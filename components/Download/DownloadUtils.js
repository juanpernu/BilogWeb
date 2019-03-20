import React from 'react'
import Title from '../Title'
import Card from '../Card/Card'

class DownloadUtils extends React.Component {
  render() { 
    return(
      <section className="download-utils-section">
        <Title
          title="Descargas útiles"
          subtitle="La mejor forma de conocer Bilog, es usándolo."
          alignCenter={true}
        />
        <div className="download-utils--container-cards">
          {/* LINK NO SOPORTA LINKS A EXTERNOS, TENGO QUE HACER UN COMPONENTE
          BUTTON QUE SEA PURAMENTE UN ANCHOR, COMO EN DOWNLOADS */}
          <Card
            smallText="Control remoto"
            title="Team Viewer"
            subtitle="La solución “todo en uno” líder en el mercado. Compre o actualice hoy mismo o descárguelo gratis para uso personal."
            buttonText="Ir al enlace"
            buttonHref="https://get.teamviewer.com/BilogQS"
            external={true}
          />
          <Card
            smallText="Video conferencia"
            title="Quick View"
            subtitle="La solución “todo en uno” líder en el mercado. Compre o actualice hoy mismo o descárguelo gratis para uso personal."
            buttonText="Ir al enlace"
            buttonHref="https://go.teamviewer.com/bilogreunion"
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
                  padding-top: 180px;
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
