import React from 'react';
import Image from 'next/image';
import Container from './Container';
import PropTypes from 'prop-types';

class Cover extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {
      gradientBg,
      position,
      text,
      paragraph,
      hasButtons,
      buttonText,
      buttonHref,
      coverImage,
      coverVideo,
      appButtons,
      hasArrow,
    } = this.props;

    const image = coverImage ? 'image': " " ;
    const video = coverVideo ? 'video': " " ;

    return(
      <section className={`cover ${gradientBg}`}>
        <div className={`cover-wrapper ${image} ${video}`}>
          <Container
            text={text}
            paragraph={paragraph}
            position={position}
            hasButtons={hasButtons}
            buttonText={buttonText}
            buttonHref={buttonHref}
            withImage={!!coverImage}
            withVideo={!!coverVideo}
            appButtons={appButtons}
          />
          {coverImage && <img className="cover-img" alt="Cover Image" src={coverImage} />}
          {coverVideo && 
            <div className="container-video">
              <iframe
                className="video"
                width="90%"
                src={coverVideo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          }
        </div>
        {hasArrow &&
          <div className="arrow-container">
            <i className="icon-arrow--scroll-down animated bounce" />
          </div>
        }
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
              .arrow-container {
                height: 100%;
                width: 100%;
                text-align: center;
              }
              .arrow-container > i {
                width: 40px;
                bottom: 30px;
                position: relative;
              }
              .icon-arrow--scroll-down {
                content: url('/static/arrow-scroll-down.svg');
                height: 50px;
                width: auto;
              }
              .bounce {
                animation-iteration-count: infinite;
                animation-duration: 1.5s;
                animation: bounce 3.6s ease infinite;
                transform-origin: 50% 50%;
              }
              @keyframes bounce {
                0% {
                  transform: translateY(0);
                }
                5.55556% {
                  transform: translateY(0);
                }
                11.11111% {
                  transform: translateY(0);
                }
                22.22222% {
                  transform: translateY(-15px);
                }
                27.77778% {
                  transform: translateY(0);
                }
                33.33333% {
                  transform: translateY(-15px);
                }
                44.44444% {
                  transform: translateY(0);
                }
                100% {
                  transform: translateY(0);
                }
              }
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
            .container-video{
              height:350px;
            }
            .cover-video{
              width:85%;
              position:relative;
              margin-left:auto;
              margin-right:auto;
            }
            .cover-video::after{
              content:'';
              display:block;
              width:100%;
              padding-bottom: 10%; 
            }
            .video{
              display:block;
              margin: 0px auto;
              height:90%;
            }
          }
          {/* STYLES FOR DESKTOP 1200px */}
          @media only screen and (min-width: 751px) and (max-width: 1200px) {
            .cover {
              background: linear-gradient(to right,#4C7ABD,#2F3F94);
              padding-top: 60px;
              height:700px;
            }
            .cover-wrapper {
              max-width: 800px;
              display: flex;
              flex-direction: row;
              margin:0 auto;
            }
            .cover-wrapper.image{
              max-width: 1200px;
              padding: 0 40px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: 45% 45%;
              grid-column-gap: 10%;
            }
            .cover-wrapper .video{
              padding: 5px;
              margin: 0 auto;
              display: flex;
              flex-directiom: column;
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
              background: url('/static/illus-home-bg.png'), linear-gradient(to right, #4C7ABD, #2E4194);
              background-size: cover;
            }
            .cover.redish {
              background: url('/static/illus-aud-bg.png'), linear-gradient(to right, #f80759, #bc4e9c);
              background-size: cover;
            }
            .cover.sea {
              background: radial-gradient(ellipse farthest-side at 100% 100%,#dbf6c8 5%,#1cafc6 50%,#012690 110%);
            }
            .cover.violet {
              background: url('/static/illus-labo-bg.png'), linear-gradient(to right, #8f94fb, #4e54c8);
              background-size: cover;
            }
            .cover.green {
              background: linear-gradient(to right bottom,#58c1d2,#2288a2);
            }
            .cover.blue {
              background: linear-gradient(to right,#07c0f8,#005aff);
            }
            .container-video {
              height:490px;
              padding-bottom: 50px;
            }
            .video{
              width:100%;
              height:100%;
              display:block;
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
            .cover-wrapper.image{
              max-width: 1200px;
              padding: 0 40px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: 45% 45%;
              grid-column-gap: 10%;
            }
            .cover-wrapper .video{
              max-width: 1240px;
              padding: 15px 5px;
              margin: 0 auto;
              display: flex;
              flex-directiom: column;
            }
            .cover-wrapper {
              max-width: 800px;
              display: flex;
              flex-direction: row;
              margin:0 auto;
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
              background: url('/static/illus-home-bg.png'), linear-gradient(to right, #4C7ABD, #2E4194);
              background-size: cover;
            }
            .cover.redish {
              background: url('/static/illus-aud-bg.png'), linear-gradient(to right, #f80759, #bc4e9c);
              background-size: cover;
            }
            .cover.sea {
              background: radial-gradient(ellipse farthest-side at 100% 100%,#dbf6c8 5%,#1cafc6 50%,#012690 110%);
            }
            .cover.violet {
              background: url('/static/illus-labo-bg.png'), linear-gradient(to right, #8f94fb, #4e54c8);
              background-size: cover;
            }
            .cover.green {
              background: linear-gradient(to right bottom,#58c1d2,#2288a2);
            }
            .cover.blue {
              background: linear-gradient(to right,#07c0f8,#005aff);
            }
            .container-video {
              height:490px;
              padding-bottom: 50px;
            }
            .video{
              width:100%;
              height:100%;
              display:block;
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
