import React from 'react'
import Container from './Container'
import PropTypes from 'prop-types'

class Cover extends React.Component {
  constructor(){
    super();
  }

  render() {
    const { gradientBg, position, text, paragraph, hasButtons } = this.props;
    
    return(
      <section className={`cover ${gradientBg}`}>
        <Container
          text={text}
          paragraph={paragraph}
          position={position}
          hasButtons={hasButtons}
        />
        <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .cover {
              height: 100%;
              background: linear-gradient(to right, #0794f8, #174fce);
            }
            .cover.default {
              background: linear-gradient(to right, #0794f8, #174fce);
            }
            .cover.redish {
              background: linear-gradient(to right, #f80759, #bc4e9c);
            }
            .cover.sea {
              background: radial-gradient(ellipse farthest-side at 100% 100%,#dbf6c8 5%,#1cafc6 50%,#012690 110%);
            }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .cover {
              background: linear-gradient(to right, #0794f8, #174fce);
            }
            .cover.default {
              background: linear-gradient(to right, #0794f8, #174fce);
            }
            .cover.redish {
              background: linear-gradient(to right, #f80759, #bc4e9c);
            }
            .cover.sea {
              background: radial-gradient(ellipse farthest-side at 100% 100%,#dbf6c8 5%,#1cafc6 50%,#012690 110%);
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
