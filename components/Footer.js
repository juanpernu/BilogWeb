import React from 'react'
import Link from 'next/link'
import FooterWrapper from './FooterWrapper'

import { versions, support, contact } from '../mocks/footer.js'

class Footer extends React.Component {
  constructor(){
    super(); 
  }

  render() {
    return(
      <footer className="footer light">
        {/* Componentizar este componente column */}
        <div className="footer--links">
          <div className="column">
            <h4 className="title">Versiones</h4>
            {
              versions.map((FooterItem, index) => {
                return(
                  <Link key={index} href={`${FooterItem.href}`}>
                    <a className="link">{FooterItem.text}</a>
                  </Link>
                )
              })
            }
          </div>
          <div className="column">
            <h4 className="title">Soporte</h4>
            {
              support.map((FooterItem, index) => {
                return(
                  <Link key={index} href={`${FooterItem.href}`}>
                    <a className="link">{FooterItem.text}</a>
                  </Link>
                )
              })
            }
          </div>
          <div className="column">
            <h4 className="title">Contacto</h4>
            {
              contact.map((FooterItem, index) => {
                return(
                  <Link key={index} href={`${FooterItem.href}`}>
                    <a className="link">{FooterItem.text}</a>
                  </Link>
                )
              })
            }
          </div>
        </div>
        <FooterWrapper />
        <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .footer.light {
              background: #fafafa;
              border-top: 1px solid #eaeaea;
            }
            .column {
              display: inline-block;
              justify-content: left;
              padding: 20px 30px 0;
            }
            .link {
              font-size: 14px;
              padding: 0.3em;
              color: #999;
              text-decoration: none;
              transition: 0.3s ease;
              margin-top: 0;
              margin-bottom: 0.25rem;
              display: block;
            }
            .link:hover {
              color: #0090ff;
            }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .footer--links {
              max-width: 1024px;
              margin: 0 auto;
            }
            .footer {
              background: #000;
              left: 0;
              right: 0;
              position: absolute;
              border-top: 1px solid #333;
            }
            .footer.light {
              background: #fafafa;
              border-top: 1px solid #eaeaea;
            }
            .column {
              display: inline-block;
              justify-content: left;
              padding: 50px 50px 0;
            }
            .link {
              font-size: 14px;
              padding: 0.3em;
              color: #999;
              text-decoration: none;
              transition: 0.3s ease;
              margin-top: 0;
              margin-bottom: 0.25rem;
              display: block;
            }
            .link:hover {
              color: #0090ff;
            }
        `}
        </style>
      </footer>
    )
  }
}

export default Footer
