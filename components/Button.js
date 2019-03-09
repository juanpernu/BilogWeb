import Link from 'next/link'

const Button = ({children, customClass, buttonHref}) => (
  <span className="button--container">
    <Link href={buttonHref}>
      <button className={`button ${customClass}`}>
        <p>{children}</p>
      </button>
    </Link>
    <style jsx>
    {`
      :global(.cover.redish .button){
        border: 1px solid #bc4e9c;
      }
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
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
          font-weight: 100;
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
        .button--container {
          margin-right: 20px;
          display: inline-block;
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
          font-weight: 100;
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
  </span>
)

export default Button