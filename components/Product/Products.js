import React from 'react'
import Title from '../Title'
import Card from '../Card/Card'

class Product extends React.Component {
  constructor(){
    super();
  }

  render() {
    return(
      <section className="product">
        <div className="product--container">
          <Title
            title="Nos adaptamos a todas tus necesidades"
            subtitle="Podés elegir entre los diferentes softwares que mejor se adapten a lo que necesitás."
            alignCenter={true}
          />
          <div className="product--container-cards">
            <Card
              smallText="Para la odontología"
              title="Gestión Odontológica"
              subtitle="Ideal para llevar la gestión completa e integral de tu consultorio o clínica."
              buttonText="Ver más"
              hasCta={true}
              buttonHref="/odontologica"
            />
            <Card
              smallText="La auditoría, al máximo"
              title="Auditoría Odontológica"
              subtitle="Perfecto para círculos, gerenciadoras y prepagas. Recibe, audita y paga liquidaciones de prestadores."
              buttonText="Ver más"
              hasCta={true}
              buttonHref="/auditoria"
            />
            <Card
              smallText="Lo mejor para tu laboratorio"
              title="Laboratórios Dentales"
              subtitle="Es un software simple y fácil de utilizar, que te ayudará a manejar los pedidos de tus clientes."
              buttonText="Ver más"
              hasCta={true}
              buttonHref="/auditoria"
            />
          </div>
        </div>
        <style jsx>
          {`
            {/* STYLES FOR MOBILE */}
            @media only screen and (max-width: 750px) {
              .product {
                text-align: center;
                border-top: 1px solid #eee;
                border-bottom: 1px solid #eee;
              }
              .product--container {
                padding: 40px 30px;
                display: flex;
                flex-direction: column;
              }
            }
  
            {/* STYLES FOR DESKTOP */}
            @media only screen and (min-width: 751px) {
              .product {
                text-align: center;
                border-bottom: 1px solid #eee;
              }
              .product--container {
                width: 100%;
                margin: 0 auto;
                padding: 160px 0;
                max-width: 1024px;
                text-align: center;
              }
              .product--container-cards {
                display: grid;
                grid-template-columns: 33% 33% 33%;
                grid-column-gap: 2%;
                padding-top: 30px;
              }
              .product--more-info {
                font-size: 14px;
                max-width: 400px;
                margin: 40px auto 0;
                display: flex;
                align-items: center;
                justify-content: space-around;
              }
              .product--more-info p {
                margin: 0;
                font-size: 14px;
              }
              :global(.product--container-cards .button--container) {
                margin: 0;
              }
              :global(.product--container-cards .card--subtitle) {
                font-size: 16px;
                height: 70px;
              }
            }
          `}
          </style>
      </section>
    )
  }
}

export default Product
