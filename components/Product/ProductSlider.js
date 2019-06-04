import React from 'react';
import SliderBar from './SliderBar';
import Title from '../Title';
import Button from '../Buttons/ButtonLink';

import productQuestions from '../../mocks/productQuestions';

class ProductSlider extends React.Component {
  constructor(){
    super();
    this.state = {
      tooltipHover: false,
      profesionals: 1,
      osCheck: false,
      profesionalsCheck: false,
      auditoryCheck: false,
      adminCheck: false,
      OSDECheck: false,
    }

    this.detectProfesionals = this.detectProfesionals.bind(this);
    this.detectCheck = this.detectCheck.bind(this);
    this.renderVersionsText = this.renderVersionsText.bind(this);
    this.renderVersionsTitle = this.renderVersionsTitle.bind(this);
    this.validateVersion = this.validateVersion.bind(this);
  }

  renderVersionsText() {
    const version = this.validateVersion();
    const renderVersion = version.toLowerCase().replace(" ", "-");
    return productQuestions.versionsText[renderVersion];
  }

  renderVersionsTitle() {
    const version = this.validateVersion();
    return version;
  }

  validateVersion() {
    if(this.state.profesionals === 1 && (this.state.adminCheck || this.state.auditoryCheck || this.state.osCheck)) { return "Standard" }
    else if(this.state.profesionals > 1 && (this.state.adminCheck || this.state.auditoryCheck || this.state.profesionalsCheck)) { return "Full" }
    else if(this.state.profesionals > 1) { return "Small Premium" }
    else if(this.state.profesionals === 1) { return "Small" }
  }

  detectProfesionals(e) {
    this.setState({
      profesionals: e[0]
    })
  }

  detectCheck(e) {
    e.persist();
    this.setState({
      [e.target.value]: !this.state[e.target.value]
    });
  }

  render() {
    return(
      <section className="product-slider-container">
        <Title
          title="Hay una versión pensada especialmente para vos"
          subtitle="Bilog es perfecto para clínicas de cualquier tamaño."
          alignCenter={true}
        />
        <div className="product-slider-card">
          <div>
            <SliderBar
              sliderbarQuestion={productQuestions.slideBar.question}
              domain={productQuestions.slideBar.domain}
              onChangeHandler={this.detectProfesionals}
              functionality={productQuestions.functionality}
              checkHandler={this.detectCheck}
            />
          </div>
          <aside className="product-slider-card-aside">
            <span>Tu versión ideal es:</span>
            <p className="product-version">{this.renderVersionsTitle()}</p>
            <p>{this.renderVersionsText()}</p>
            <Button
              customClass="primary"
              buttonText="Contratar ahora"
              buttonHref="/contact"
            />
          </aside>
        </div>
        <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .product-slider-container {
              margin: 0 auto;
              padding: 120px 0;
              max-width: 60%;
              text-align: center;
            }
            .product-slider-card {
              margin-top: 60px;
              text-align: center;
              box-sizing: border-box;
              background: #fff;
              box-shadow: 0 10px 30px rgba(0,0,0,0.12);
              border-radius: 5px;
              display: grid;
              grid-template-columns: 3fr 2fr;
            }
            .product-slider-card-aside {
              background: linear-gradient(to bottom, #121212 0%, #323232 100%);
              border-radius: 0 5px 5px 0;
              padding: 30px;
              text-align: left;
              color: #fff;
            }
            .product-version {
              font-size: 24px;
              font-weight: 600;
              margin-top: 16px;
              color: #fff;
            }
          }
        `}
        </style>
      </section>
    )
  }
}

export default ProductSlider;
