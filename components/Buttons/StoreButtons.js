import React from 'react';

const StoreButton = () => (
  <React.Fragment>
    <a href="apps.apple.com/ar/app/bilog-gestion-odontologica/id1014624099?l=es" className="button">
      <p>Ver en Apple Store</p>
    </a>
    <a href="play.google.com/store/apps/details?id=com.app.bilog" className="button">
      <p>Ver en Google Play</p>
    </a>
    <style jsx>
      {`
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
        a {
          text-decoration: none;
        }
        .button {
          appearance: none;
          align-items: center;
          display: flex;
          width: 100%;
          height: 40px;
          margin: 20px auto;
          padding: 0 25px;
          outline: none;
          border: 1px solid #007aff;  
          font-size: 12px;
          justify-content: center;
          text-transform: uppercase;
          cursor: pointer;
          text-align: center;
          user-select: none;
          font-weight: 400;
          position: relative;
          overflow: hidden;
          transition: all 0.15s ease;
          border-radius: 5px;
          white-space: nowrap;
          line-height: 0;
          box-shadow: 0 5px 10px rgba(0,0,0,0.12);
        }
        .button.primary {
          color: #fff;
          background: #007aff;
        }
        .button.secondary {
          border: 1px solid #fff;
          background: #fff;
          box-shadow: 0 3px 10px rgba(0,0,0,0.12);
        }
        .button.terciary {
          color: #4b87ef;
          background: #fff;
          border: 1px solid #007aff;
        }
        .button.success {
          color: #fff;
          background: #38b775;
        }
      }

      {/* STYLES FOR DESKTOP */}
      @media only screen and (min-width: 751px) {
        a {
          text-decoration: none;
        }
        .button {
          appearance: none;
          align-items: center;
          display: flex;
          width: 100%;
          height: 40px;
          margin: 20px 0;
          padding: 0 25px;
          outline: none;
          border: 1px solid #007aff;
          font-size: 12px;
          justify-content: center;
          text-transform: uppercase;
          cursor: pointer;
          text-align: center;
          user-select: none;
          font-weight: 400;
          position: relative;
          overflow: hidden;
          transition: all 0.15s ease;
          border-radius: 5px;
          white-space: nowrap;
          line-height: 0;
          box-shadow: 0 5px 10px rgba(0,0,0,0.12);
        }
        .button:hover {
          box-shadow: 0 7px 20px rgba(0,0,0,0.16);
          transform: translateY(-1px);
        }
        .button.primary {
          color: #fff;
          background: #007aff;
        }
        .button.secondary {
          border: 1px solid #fff;
          background: #fff;
          box-shadow: 0 3px 10px rgba(0,0,0,0.12);
        }
        .button.secondary:hover {
          box-shadow: 0 7px 20px rgba(0,0,0,0.12);
        }
        .button.terciary {
          color: #4b87ef;
          background: #fff;
          border: 1px solid #007aff;
        }
        .button.terciary:hover {
          background: #007aff;
          color: #fff;
          transform: translateY(-1px);
        }
        .button.success {
          color: #fff;
          background: #38b775;
        }
      }
    `}
    </style>
  </React.Fragment>
)

export default StoreButton;