import { Fragment } from 'react';

const Item = ({text, video}) => (
  <Fragment>
    <p>
      {text}
    </p>
    <iframe
      className="docs-video"
      width="560"
      height="315"
      src={video}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <style jsx>
    {`
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
      }

      {/* STYLES FOR DESKTOP */}
      @media only screen and (min-width: 751px) {
        p {
          margin-top: 0;
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
          margin: 20px 0;
        } 
        .docs-video {
          display: block;
          width: 100%;
        }
      }
    `}
    </style>
  </Fragment>
)

export default Item;
