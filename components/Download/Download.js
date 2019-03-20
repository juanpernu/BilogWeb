import React from 'react'
import Title from '../Title'
import DownloadUtils from './DownloadUtils'
import ExternalButton from '../ExternalButton'

class Download extends React.Component {
  render() { 
    return(
      <section className="download-section">
        <Title
          title="Descargar Bilog"
          subtitle="La mejor forma de conocer Bilog, es usándolo."
          alignCenter={true}
        />
        <ExternalButton
          externalLink="http://bilog.com.ar.tapir.avnam.net/clientes/public_html/DescargarPartes/NetFramework.rar"
          text="Descargar demo"
        />
        <div className="download-image">
          <img src="/static/bilog-desktop-mac.png" alt="Descargar demo"/>
        </div>
        <p className="download-image--copy">
          En una sola ventana tenés todo el control de tus pacientes y el de tu Clínica o Consultorio
          con estadísticas para una mejor gestión, generando una gran experiencia para tus pacientes.
        </p>
        <DownloadUtils/>
        <style jsx>
            {`
              {/* STYLES FOR MOBILE */}
              @media only screen and (max-width: 750px) {
                .download-section {
                  width: 100%;
                  margin: 0 auto;
                  padding: 80px 0;
                  text-align: center;
                }
                .download-image {
                  position: relative;
                  overflow: hidden;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  height: 340px;
                  margin: 20px auto;
                }
                .download-image img {
                  height: 236px;
                  width: 340px;
                  visibility: visible;
                }
                .button--container {
                  margin-right: 20px;
                  display: inline-block;
                }
                .button {
                  appearance: none;
                  align-items: center;
                  display: flex;
                  width: 100%;
                  height: 40px;
                  margin: 0;
                  padding: 0 25px;
                  outline: none;
                  border: 1px solid #007aff;
                  font-size: 12px;
                  justify-content: center;
                  text-transform: uppercase;
                  cursor: pointer;
                  text-align: center;
                  user-select: none;
                  font-weight: 100;
                  position: relative;
                  overflow: hidden;
                  transition: all 0.15s ease;
                  border-radius: 5px;
                  white-space: nowrap;
                  line-height: 0;
                  box-shadow: 0 5px 10px rgba(0,0,0,0.12);
                }
                .button.primary {
                  background: #007aff;
                }
                .button a {
                  color: #fff;
                  text-decoration: none;
                }
                .download--container-cards {
                  padding: 40px 30px;
                  display: flex;
                  flex-direction: column;
                }
              }
    
              {/* STYLES FOR DESKTOP */}
              @media only screen and (min-width: 751px) {
                .download-section {
                  width: 100%;
                  margin: 0 auto;
                  padding-top: 180px;
                  max-width: 1024px;
                  text-align: center;
                }
                .download-image {
                  position: relative;
                  overflow: hidden;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  height: 485px;
                  margin: 40px auto 10px;
                }
                .download-image img {
                  height: 485px;
                  width: 700px;
                  visibility: visible;
                }
                .download-image--copy {
                  max-width: 500px;
                  margin: 0 auto;
                }
                :global(.download-section .feature--subtitle) {
                  margin-bottom: 10px;
                }
                .button--container {
                  margin-right: 20px;
                  display: inline-block;
                }
                .button {
                  appearance: none;
                  align-items: center;
                  display: flex;
                  width: 100%;
                  height: 40px;
                  margin: 20px 0;
                  padding: 0 25px;
                  outline: none;
                  border: 1px solid #007aff;
                  font-size: 12px;
                  justify-content: center;
                  text-transform: uppercase;
                  cursor: pointer;
                  text-align: center;
                  user-select: none;
                  font-weight: 100;
                  position: relative;
                  overflow: hidden;
                  transition: all 0.15s ease;
                  border-radius: 5px;
                  white-space: nowrap;
                  line-height: 0;
                  box-shadow: 0 5px 10px rgba(0,0,0,0.12);
                }
                .button:hover {
                  box-shadow: 0 7px 20px rgba(0,0,0,0.16);
                  transform: translateY(-1px);
                }
                .button.primary {
                  background: #007aff;
                }
                .button a {
                  color: #fff;
                  text-decoration: none;
                }
                .download--container-cards {
                  display: grid;
                  grid-template-columns: 48% 48%;
                  grid-column-gap: 4%;
                  grid-row-gap: 2%;
                }
              }
            `}
            </style>
      </section>
    )
  }
}

export default Download
