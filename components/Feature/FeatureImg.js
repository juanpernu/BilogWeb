import React from 'react'
import PropTypes from 'prop-types'
import FeatureItem from '../Feature/FeatureItem'
import ButtonLink from '../Buttons/ButtonLink'
import Image from '../Image'

class FeatureImage extends React.Component {
  constructor(){
    super();
  }

  render() {
    const { imgSrc, imgAlt, copy, hasCta, imageAlign, bgGrey, title, description, buttonText, buttonHref } = this.props;
    return(
      <section className={`feature-image--container ${bgGrey && 'bg-grey'}`}>
        <div className={`feature-image ${imageAlign}`}>
          <Image src={imgSrc} alt={imgAlt} />
          <div className="feature-image-content">
            <p className="feature-image-content--copy">{copy}</p>
            <FeatureItem
              title={title}
              description={description}
            />
            {
              hasCta ?
              <div className="feature-image--cta">
                <ButtonLink
                  customClass="terciary"
                  buttonHref={buttonHref}
                  buttonText={buttonText}
                />
              </div> :
              null
            }
          </div>
        </div>
        <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .feature-image--container {
              border-bottom: 1px solid #eaeaea;
            }
            .feature-image--container.bg-grey {
              background-color: rgb(250, 251, 252);
            }
            .feature-image {
              padding: 40px 30px;
            }
            .feature-image-content--copy {
              font-size: 12px;
              font-weight: 400;
              line-height: 0.3;
              color: #96a1a3;
            }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .feature-image--container {
              width: 100%;
              border-top: 1px solid #eaeaea;
              border-bottom: 1px solid #eaeaea;
            }
            .feature-image--container.bg-grey {
              background-color: rgb(250, 251, 252);
            }
            .feature-image {
              display: flex;
              width: 100%;
              margin: 0 auto;
              padding: 60px 0;
              max-width: 1024px;
              text-align: center;
            }
            .feature-image.left {
              flex-direction: row;
            }
            .feature-image.right {
              flex-direction: row-reverse;
              justify-content: flex-end;
            }
            .feature-image-content {
              display: flex;
              flex-direction: column;
              text-align: left;
              align-self: center;
            }
            .feature-image-content--copy {
              margin: 0 20px;
              font-weight: 400;
              line-height: 0.3;
              color: #96a1a3;
            }
            .feature-image--cta {
              margin: 0 20px;
              max-width: 230px;
            }
          }
        `}
        </style>
      </section>
    )
  }
}

FeatureImage.propTypes = {
  imageAlign: PropTypes.string,
  bgGrey: PropTypes.bool,
}

FeatureImage.defaultProps = {
  imageAlign: 'left',
  bgGrey: false,
}

export default FeatureImage
