import React from 'react'
import CardDetail from '../Card/CardDetail'
import { versionsFeatures } from '../../mocks/general'

class Versions extends React.Component {
  constructor(){
    super(); 
  }

  render() { 
    const { small, standard, smallPremium, full } = versionsFeatures;
    
    return(
      <section className="versions-extended">
        <div className="versions-extended--container">
          <h2>Elegí tu versión</h2>
          <div className="versions-extended--container-cards">
            <CardDetail
              smallText={small.data.smallText}
              title={small.data.title}
              features={small.features}
            />
            <CardDetail
              smallText={smallPremium.data.smallText}
              title={smallPremium.data.title}
              features={smallPremium.features}
            />
            <CardDetail
              smallText={standard.data.smallText}
              title={standard.data.title}
              features={standard.features}
            />
            <CardDetail
              smallText={full.data.smallText}
              title={full.data.title}
              features={full.features}
            />
          </div>
        </div>
        <style jsx>
          {`
            {/* STYLES FOR MOBILE */}
            @media only screen and (max-width: 750px) {
              .versions-extended {
                text-align: center;
                border-top: 1px solid #eee;
                border-bottom: 1px solid #eee;
              }
              .versions-extended--container {
                padding: 40px 30px;
                display: flex;
                flex-direction: column;
              }
            }
  
            {/* STYLES FOR DESKTOP */}
            @media only screen and (min-width: 751px) {
              .versions-extended {
                text-align: center;
                border-top: 1px solid #eee;
                border-bottom: 1px solid #eee;
              }
              .versions-extended--container {
                width: 100%;
                margin: 0 auto;
                padding: 80px 0;
                max-width: 1024px;
                text-align: center;
              }
              .versions-extended--container h2 {
                margin: 60px 0;
              }
              .versions-extended--container-cards {
                display: grid;
                grid-template-columns: 25% 25% 25% 25%;
                grid-column-gap: 2%;
              }
            }
          `}
          </style>
      </section>
    )
  }
}

export default Versions
