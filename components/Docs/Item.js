import { Fragment } from 'react';
import Content from './content';

const Item = ({ text, video, content}) => (
  <Fragment>
    <p className="item-text">{text}</p>
    {video && <iframe
      className="docs-video"
      width="560"
      height="405"
      src={video}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />}
    {content.map(itemContent => (
      <Content {...itemContent} />
    ))}
    <style jsx>
    {`
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
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
      }
    `}
    </style>
  </Fragment>
)

export default Item;
