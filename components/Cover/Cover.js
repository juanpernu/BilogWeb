import React from 'react'
import Container from './Container'
import PropTypes from 'prop-types'

class Cover extends React.Component {
  constructor(){
    super();
  }

  render() {
    const { gradientBg, position, text, paragraph, hasButtons, bgImg } = this.props;
    
    return(
      <section className={`cover ${gradientBg} ${bgImg && `bgImg-${bgImg}`}`}>
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
            .cover.bgImg-01 {
              background: url('http://www.wifers.com/images/bg-04.jpg') no-repeat center center;
              background-size: cover;
            }
            .cover.bgImg-02 {
              background: url('http://www.wifers.com/images/bg-09.jpg') no-repeat center center;
              background-size: cover;
            }
            .cover.bgImg-03 {
              background: url('http://www.wifers.com/images/bg-08.jpg') no-repeat center center;
              background-size: cover;
            }
          }

          {/* STYLES FOR DESKTOP 1200px */}
          @media only screen and (min-width: 751px) and (max-width: 1200px) {
            .cover {
              background: linear-gradient(to right, #0794f8, #174fce);
              padding-top: 60px;
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
            .cover.bgImg-01 {
              background: url('http://www.wifers.com/images/bg-04.jpg') no-repeat center center;
              background-size: cover;
            }
            .cover.bgImg-02 {
              background: url('http://www.wifers.com/images/bg-09.jpg') no-repeat center center;
              background-size: cover;
            }
            .cover.bgImg-03 {
              background: url('http://www.wifers.com/images/bg-08.jpg') no-repeat center center;
              background-size: cover;
            }
          }

          {/* STYLES FOR DESKTOP +1200px */}
          @media only screen and (min-width: 1201px) {
            .cover {
              background: linear-gradient(to right, #0794f8, #174fce);
              padding-top: 100px;
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
            .cover.bgImg-01 {
              background: url('http://www.wifers.com/images/bg-04.jpg') no-repeat center center;
              background-size: cover;
            }
            .cover.bgImg-02 {
              background: url('http://www.wifers.com/images/bg-09.jpg') no-repeat center center;
              background-size: cover;
            }
            .cover.bgImg-03 {
              background: url('http://www.wifers.com/images/bg-08.jpg') no-repeat center center;
              background-size: cover;
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
