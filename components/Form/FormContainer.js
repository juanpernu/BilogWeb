import React from 'react';  
import Form from './Form';
import SocialMedia from './SocialMedia';
import Address from './Address';

class FormContainer extends React.Component {  
  constructor(props) {
    super(props);

    this.state = {
      socialMedia: ['Twitter', 'Facebook', 'Instagram'],
      socialMediaUrl: {
        twitter: 'https://www.twitter.com',
        facebook: 'https://www.facebook.com',
        instagram: 'https://www.instagram.com',
      }
    }
    this.renderSocialMedia = this.renderSocialMedia.bind(this);
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

  render() {
    return (
      <section className="form-container">
        <Form />
        <div className="form-aside">
          <p className="form-aside--title">Encontranos en</p>
          {this.renderSocialMedia()}
          <p className="form-aside--title">O vení a visitarnos</p>
          <Address/>
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
