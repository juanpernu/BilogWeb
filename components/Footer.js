import React from 'react'
import Link from 'next/link'

class Footer extends React.Component {
  constructor(){
    super();
  }

  render() {
    return(
      <footer className="footer light">
        <div className="links">
          <p>Link</p>
          <p>Link</p>
          <p>Link</p>
          <p>Link</p>
          <p>Link</p>
          <p>Link</p>
        </div>
        <div className="wrapper">
          <p>Este es el wrapper del footer re piola</p>
        </div>
        <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
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
            .links {
              display: flex;
              justify-content: left;
              padding: 50px 30px 0;
              width: 1060px;
              max-width: 100%;
              margin: auto;
            }
            .wrapper {
              display: flex;
              vertical-align: top;
              justify-content: center;
              padding: 50px 30px;
              width: 1060px;
              max-width: 100%;
              margin: auto;
            }
        `}
        </style>
      </footer>
    )
  }
}

export default Footer
