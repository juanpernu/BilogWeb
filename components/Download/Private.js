import React from 'react';
import Title from '../Title';
import ItemDownload from '../Download/ItemDownload';
import downloadInstructions from '../../mocks/downloadInstructions';
import downloadFeatures from '../../mocks/downloadFeatures';
import downloadSQL from '../../mocks/downloadSQL';

class Private extends React.Component {
  constructor(){
    super();
    this.renderItem = this.renderItem.bind(this);
    this.renderOnlyLink = this.renderOnlyLink.bind(this);
  }

  renderItem(itemsMap){
    return itemsMap.map((item, key) => (
      <ItemDownload
        key={key.toString()}
        title={item.title}
        steps={item.steps}
        description={item.description}
        amount={item.amount}
        href={item.href}
      />
    ));
  }

  renderOnlyLink(onlyLinkItems){
    return onlyLinkItems.map((item, key) => (
      <div className="item--only-link" key={key.toString()}>
        <h4>{item.title}</h4>
        {
          item.downloads.map((download, key) => (
            <a key={key.toString()} className="link--primary" href={download.href}>{download.text}</a>
          ))
        }
      </div>
    ));
  }

  render() { 
    return(
      <section className="inside-download-section">
        <div className="inside-download-section--content">
          <Title
            title="Descargar Demo de Odontología"
            subtitle="En esta sección de descarga vas a encontrar todo lo que necesitás para bajar y usar el demo de Bilog Odontología."
          />
          <div className="inside-download--instruction">
            {this.renderItem(downloadInstructions)}
          </div>
        </div>
        <div className="inside-download-section--content">
          <Title
            title="Archivos de descarga"
            subtitle="Si estás experimentando algún problema con la descarga, probá bajarlo por partes."
          />
          <div className="inside-download--instruction">
            {this.renderItem(downloadFeatures)}
          </div>
        </div>
        <div className="inside-download-section--content">
          <Title
            title="Descargar SQL Server"
            subtitle="En caso de usar SQL Server, podes descargar los clientes acá."
          />
          <div className="inside-download--only-link">
            {this.renderOnlyLink(downloadSQL)}
          </div>
        </div>
        <style jsx>
            {`
              {/* STYLES FOR MOBILE */}
              @media only screen and (max-width: 750px) {
                .inside-download-section {
                  width: 100%;
                  margin: 0 auto;
                  padding: 30px;
                  box-sizing: border-box;
                }
                .inside-download-section--content {
                  padding-bottom: 60px;
                }
                .inside-download--instruction {
                  display: flex;
                  flex-direction: column;
                }
                :global(.item--only-link) {
                  display: flex;
                  flex-direction: column;
                }
                :global(.link--primary) {
                  margin-top: 10px;
                  color: rgb(6, 125, 247);
                  text-decoration: none;
                  display: inline-block;
                  padding: 2.5px 5px;
                  border-radius: 5px;
                }
              }
    
              {/* STYLES FOR DESKTOP */}
              @media only screen and (min-width: 751px) {
                .inside-download-section {
                  width: 100%;
                  margin: 0 auto;
                  padding-top: 100px;
                  max-width: 1024px;
                  box-sizing: border-box;
                }
                .inside-download-section--content {
                  border-bottom: 1px #e7e7e7 solid;
                  padding: 60px 0;
                }
                .inside-download-section--content:last-child {
                  border-bottom: 0;
                  padding: 60px 0 100px;
                }
                .inside-download--instruction {
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                }
                .inside-download--only-link {
                  display: grid;
                  grid-template-columns: 1fr 1fr 1fr;
                  grid-column-gap: 50px;
                }
                :global(.item--only-link) {
                  display: flex;
                  flex-direction: column;
                }
                :global(.item--only-link h4) {
                  margin-bottom: 0;
                }
                :global(.link--primary) {
                  margin-top: 20px;
                  color: rgb(6, 125, 247);
                  text-decoration: none;
                  display: inline-block;
                  padding: 2.5px 5px;
                  border-radius: 5px;
                }
                :global(.link--primary:hover) {
                  color: #0076ff;
                  padding: 2.5px 5px;
                  background: rgba(0,118,255,0.1);
                }
              }
            `}
            </style>
      </section>
    )
  }
}

export default Private;
