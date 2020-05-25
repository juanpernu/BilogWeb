import React from 'react';  
import Form from './Form';
import SocialMedia from './SocialMedia';
import ContactItem from './ContactItem';

class FormContainer extends React.Component {  
  constructor(props) {
    super(props);

    this.state = {
      socialMedia: ['Facebook', 'Instagram'],
      socialMediaUrl: {
        facebook: 'www.facebook.com/Bilog.Soluciones',
        instagram: 'www.instagram.com/bilogsoftware',
      }
    }

    this.renderSocialMedia = this.renderSocialMedia.bind(this);
    this.makeCustomMessage = this.makeCustomMessage.bind(this);
    this.translateAddons = this.translateAddons.bind(this);
  }

  renderSocialMedia() {
    return (
      this.state.socialMedia.map((socialMedia, key) => {
        return <SocialMedia
          key={key}
          type={socialMedia}
          href={this.state.socialMediaUrl[socialMedia.toLowerCase()]}
        />
      })
    )
  }

  translateAddons(addOnsArr) {
    const addonsText = {
      osCheck: "Liquidación a obras sociales",
      profesionalsCheck: "Liquidación a profesionales",
      auditoryCheck: "Módulo de auditoria",
      adminCheck: "Módulo de administracion",
      OSDECheck: "Módulo OSDE",
    };
    const translated = addOnsArr.map(addOn => {
      return addonsText[addOn];
    })
    return translated;
  };

  makeCustomMessage() {
    const { version, addOns } = this.props.prefetchedData;
    if (addOns && version) {
      const addOnsArray = addOns.split(',');
      const customMessage = `Hola, me gustaría recibir información sobre la versión ${version} con los módulos de ${this.translateAddons(addOnsArray)} incluidos. Muchas grácias!`;
      return customMessage;
    }
  }

  render() {
    return (
      <section className="form-container">
        <Form customMessage={this.makeCustomMessage()} />
        <div className="form-aside">
          <p className="form-aside--title">Encontranos en</p>
          <ContactItem
            text="José Hernandes 2276, CABA, Buenos Aires, Argentina"
            icon="address"
          />
          <p className="form-aside--title">Seguinos en</p>
          {this.renderSocialMedia()}
        </div>
        <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .form-container {
              display: flex;
              flex-direction: column;
              margin: 0;
              padding: 60px 30px;
            }
            .form-aside--title {
              font-weight: 600;
              font-size: 24px;
              line-height: 24px;
            }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .form-container {
              display: grid;
              grid-template-columns: 2fr 1fr;
              margin: 100px auto;
              max-width: 1200px;
            }
            .form-aside {
              margin-left: 60px;
              display: flex;
              flex-direction: column;
            }
            .form-aside--title {
              font-weight: 600;
              font-size: 24px;
              line-height: 24px;
            }
          }
        `}
        </style>
      </section>
    );
  }
}

export default FormContainer;
