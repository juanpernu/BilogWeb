import { Fragment } from 'react';
import Content from './content';

const Item = ({ text, sectionVideo, sectionImage, content }) => (
  <Fragment>
    <p className="item-text">{text}</p>
    {sectionVideo &&
      <iframe
        className="docs-video"
        width="560"
        height="405"
        src={sectionVideo}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    }
    {sectionImage &&
      <img alt="Section Image" className="section-image" src={sectionImage} />
    }
    {content.map(itemContent => (
      <Content {...itemContent} />
    ))}
    <style jsx>
      {`
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
        .item-text {
          margin:0;
          padding: 18px;
          text-align:start;
          font-size: 1.15rem;
          font-weight: 400;
          line-height: 1.3;
          width:90%;
        }

        .docs-video{
          display: block;
          margin:0;
          padding-left:17px;
          width: 91%;
        }
        .section-image {
          width: 90%;
          margin: 15px 1.2rem 25px;
          display: block;
          box-shadow: 0 12px 20px rgba(0,0,0, 0.1);
          object-fit: contain;
        }
      }

      {/* STYLES FOR DESKTOP */}
      @media only screen and (min-width: 751px) {
        .docs-video {
          display: block;
          width: 100%;
        }
        .item-text {
          margin-top: 0;
          font-weight: 400;
          font-size: 14px;
          line-height: 1.6;
          margin: 20px 0;
        }
        .section-image {
          max-width: 600px;
          margin: 50px auto 0;
          display: block;
          box-shadow: 0 12px 20px rgba(0,0,0, 0.1);
        }
      }
    `}
    </style>
  </Fragment>
)

export default Item;
