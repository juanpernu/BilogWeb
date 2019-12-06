import { Fragment } from 'react';

const Content = ({ title, subcontent}) => (
  <Fragment>
    <h2>
      {title}
    </h2>
    {subcontent.map(el => {
      const {subtitle, text, image} = el;
      return (
        <div>
          <h3>{subtitle}</h3>
          <p>{text}</p>
          { image && <img src={image} />}
        </div>
      )
    })}
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

export default Content;
