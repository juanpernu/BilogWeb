import React from 'react'
import Container from './Container'
import PropTypes from 'prop-types'

class Cover extends React.Component {
  constructor(){
    super();
  }

  render() {
    const { gradientBg, position, text, paragraph, hasButtons, product, buttonText, buttonHref, coverImage } = this.props;

    return(
      <section className={`cover ${product && 'no-padding'} ${gradientBg}`}>
        <div className={`cover-wrapper ${!coverImage && 'no-image'}`}>
          <Container
            text={text}
            paragraph={paragraph}
            position={position}
            hasButtons={hasButtons}
            buttonText={buttonText}
            buttonHref={buttonHref}
          />
          {coverImage && <img className="cover-img" src={`/static/illus-${coverImage}.svg`} />}
        </div>
        <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .cover {
              height: 100%;
              background: linear-gradient(to right,#4C7ABD,#2F3F94);
            }
            .cover-wrapper {
              display: flex;
              flex-direction: column;
            }
            .cover-img {
              width: 80%;
              margin: 0 auto;
              padding-bottom: 30px;
            }
            .cover.default {
              background: linear-gradient(to right,#4C7ABD,#2F3F94);
            }
            .cover.redish {
              background: linear-gradient(to right, #f80759, #bc4e9c);
            }
            .cover.sea {
              background: radial-gradient(ellipse farthest-side at 100% 100%,#dbf6c8 5%,#1cafc6 50%,#012690 110%);
            }
            .cover.violet {
              background: linear-gradient(to right, #8f94fb, #4e54c8);
            }
            .cover.green {
              background: linear-gradient(to right bottom,#58c1d2,#2288a2);
            }
            .cover.blue {
              background: linear-gradient(to right,#07c0f8,#005aff);
            }
          }

          {/* STYLES FOR DESKTOP 1200px */}
          @media only screen and (min-width: 751px) and (max-width: 1200px) {
            .cover {
              background: linear-gradient(to right,#4C7ABD,#2F3F94);
              padding-top: 60px;
            }
            .cover-wrapper {
              max-width: 1200px;
              padding: 0 40px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: 45% 45%;
              grid-column-gap: 10%;
            }
            .cover-wrapper.no-image {
              max-width: 800px;
              display: flex;
              flex-direction: row;
            }
            .cover-img {
              width: 100%;
              vertical-align: middle;
              display: inline-block;
              height: 100%;
            }
            .cover.no-padding {
              padding-top: 0;
            }
            .cover.default {
              background: linear-gradient(to right,#4C7ABD,#2F3F94);
            }
            .cover.redish {
              background: linear-gradient(to right, #f80759, #bc4e9c);
            }
            .cover.sea {
              background: radial-gradient(ellipse farthest-side at 100% 100%,#dbf6c8 5%,#1cafc6 50%,#012690 110%);
            }
            .cover.violet {
              background: linear-gradient(to right, #8f94fb, #4e54c8);
            }
            .cover.green {
              background: linear-gradient(to right bottom,#58c1d2,#2288a2);
            }
            .cover.blue {
              background: linear-gradient(to right,#07c0f8,#005aff);
            }
          }

          {/* STYLES FOR DESKTOP +1200px */}
          @media only screen and (min-width: 1201px) {
            .cover {
              background: linear-gradient(to right, #4C7ABD, #2E4194);
              padding-top: 100px;
            }
            .cover-wrapper {
              max-width: 1024px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: 55% 50%;
              grid-column-gap: 10%;
            }
            .cover-wrapper.no-image {
              max-width: 800px;
              display: flex;
              flex-direction: row;
            }
            .cover-img {
              width: 100%;
              vertical-align: middle;
              display: inline-block;
              height: 100%;
            }
            .cover.no-padding {
              padding-top: 0;
            }
            .cover.default {
              background: linear-gradient(to right, #4C7ABD, #2E4194);
            }
            .cover.redish {
              background: linear-gradient(to right, #f80759, #bc4e9c);
            }
            .cover.sea {
              background: radial-gradient(ellipse farthest-side at 100% 100%,#dbf6c8 5%,#1cafc6 50%,#012690 110%);
            }
            .cover.violet {
              background: linear-gradient(to right, #8f94fb, #4e54c8);
            }
            .cover.green {
              background: linear-gradient(to right bottom,#58c1d2,#2288a2);
            }
            .cover.blue {
              background: linear-gradient(to right,#07c0f8,#005aff);
            }
          }
        `}
        </style>
      </section>
    )
  }
}

Cover.propTypes = {
  gradientBg: PropTypes.string,
}

Cover.defaultProps = {
  gradientBg: "default",
}

export default Cover
