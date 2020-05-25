const FooterWrapper = () => (
  <div className="wrapper">
    <div className="wrapper--text">
      <img className="logo" src="/static/logo-bilog.svg" alt="Bilog" />
    </div>
    <div className="wrapper--text">
      <p className="copyright">
        Copyright © 2019 Bilog, Inc. All rights reserved.
      </p>
    </div>
    <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .wrapper {
              padding: 60px 0;
              display: flex;
              flex-direction: column;
            }
            .wrapper--text {
              margin: 0 30px;
            }
            .copyright {
              color: #999999;
              font-size: 12px;
            }
            .logo {
              height: 25px;
              width: auto;
            }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .wrapper {
              max-width: 1024px;
              margin: 0 auto;
              padding: 60px 0;
              display: flex;
              justify-content: space-between;
            }
            .wrapper--text {
              margin: 0 50px;
            }
            .copyright {
              text-align: right;
              color: #999999;
              font-size: 12px;
            }
            .logo {
              height: 25px;
              width: auto;
            }
        `}
        </style>
  </div>
)

export default FooterWrapper
