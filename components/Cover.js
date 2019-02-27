import React from 'react'
import Button from './Button.js'

class Cover extends React.Component {
  constructor(){
    super();
  }

  render() {
    return(
      <section className="cover">
        <div className="cover--container">
          <h1 className="title">Más tiempo libre, mayor control y mejor gestión de tu consultorio o clínica.</h1>
          <p>Tecnología de vanguardia para la odontología.</p>
          <div className="cover--container-cta">
          <Button customClass="primary">Contratar ahora</Button>
          <Button customClass="secondary">Ver casos de éxito</Button>
          </div>
        </div>
        <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .cover {
              height: 100%;
              background: linear-gradient(to right, #0794f8, #174fce);
            }
            .cover--container {
              padding: 60px 30px;
              text-align: left;
              color: #fff;
            }
            .cover--container-cta {
              padding: 10px 0;
            }
            .title {
              padding: 0;
              margin: 0;
              font-size: 26px;
              font-weight: 600;
            }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .cover {
              background: linear-gradient(to right, #0794f8, #174fce);
            }
            .cover--container {
              width: 50%;
              margin: 0 auto;
              padding: 240px 30px;
              text-align: center;
              color: #fff;
            }
            .cover--container-cta {
              width: 400px;
              margin: 0 auto;
              display: flex;
              flex-direction: row;
            }
            .title {
              padding: 0;
              margin: 0;
              font-size: 42px;
              font-weight: 600;
            }
            .cover--container p {
              font-size: 22px;
            }
          }
        `}
        </style>
      </section>
    )
  }
}

export default Cover