import React from 'react'
import FooterWrapper from './FooterWrapper'
import Column from '../Column'


import { versions, support, contact } from '../../mocks/footer.js'

class Footer extends React.Component {
  constructor(){
    super(); 
  }

  render() {
    return(
      <footer className="footer light">
        <div className="footer--links">
          <Column title="Sistemas" items={versions} />
          <Column title="Soporte" items={support} />
          <Column title="Compañía" items={contact} />
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
            .footer--links {
              display: grid;
              grid-template-columns: 1fr 1fr;
            }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .footer--links {
              max-width: 1024px;
              margin: 0 auto;
              display: flex;
              align-items: flex-start;
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
        `}
        </style>
      </footer>
    )
  }
}

export default Footer
