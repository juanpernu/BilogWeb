import React from 'react';

const StoreButton = () => (
  <div className="store-buttons">
    <a href="https://apps.apple.com/ar/app/bilog-gestion-odontologica/id1014624099?l=es" className="button">
      <p>Ver en Apple Store</p>
    </a>
    <a href="https://play.google.com/store/apps/details?id=com.app.bilog" className="button">
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
          height: 40px;
          margin: 20px auto;
          background-color: #222;
          color: white;
          outline: none;
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
      }

      {/* STYLES FOR DESKTOP */}
      @media only screen and (min-width: 751px) {
        .store-buttons {
          display: grid;
          grid-template-columns: auto auto;
        }
        a {
          text-decoration: none;
        }
        .button {
          box-sizing: border-box;
          appearance: none;
          align-items: center;
          display: flex;
          padding: 10px 0;
          margin: 0 10px;
          outline: none;
          background-color: #222;
          color: white;
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
      }
    `}
    </style>
  </div>
)

export default StoreButton;