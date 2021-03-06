import { Fragment } from 'react';
import List from './List'

const Content = ({ title, subcontent}) => (
  <Fragment>
    {title && <h2 className="content-title">{title}</h2>}
    {subcontent.map((el, i) => {
      const {subtitle, text, image, list = null} = el;
      return (
        <div className="subcontent-wrapper">
          <h3 className="subcontent-title">{subtitle}</h3>
          <p className="subcontent-text">{text}</p>
          {image && <img alt="Subcontent Image" className="subcontent-image" src={image} />}
          {list && list.map((el)=>{
              const {title, content} = el
              return(
              <List title={title} content={content}/>
              )
            })
          }
        </div>
      )
    })}
    <style jsx>
      {`
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
        .content-title{
          padding:15px;
          font-size:1.9rem;
          font-weight: 400;
        }

        .subcontent-image {
          width: 90%;
          margin: 15px 1.2rem 25px;
          display: block;
          box-shadow: 0 12px 20px rgba(0,0,0, 0.1);
          object-fit: contain;
        }

        .subcontent-text{
          margin:0;
          padding: 18px;
          text-align:start;
          font-size:1.2rem;
          font-weight: 400;
          line-height: 1.3;
          width:90%;
        }

        .subcontent-title {
          margin:0;
          padding:0 18px;
          font-size: 1.5rem;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
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
        .content-title {
          font-size: 24px;
          font-weight: 300;
          margin: 70px 0 30px;
        }
        .subcontent-wrapper {
          margin-bottom: 60px;
        }
        .subcontent-title {
          font-weight: 600;
        }
        .subcontent-title:first-of-type {
          margin: 0;
        }
        .subcontent-text {
        }
        .subcontent-image {
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

export default Content;
