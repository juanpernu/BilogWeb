const ItemDownload = ({title, steps, description, amount, href}) => (
  <div className={`inside-download--item ${amount}`}>
    <h3>{title}</h3>
    {
      steps && <ol>
      {
        steps.map((step, key) => (<li key={key.toString()}  className="step">{step}</li>))
      }
      </ol>
    }
    {description && <p className="inside-download--copy">
      {description}
    </p>}
    {href && <a className="link--primary" href={href}>Descargar</a>}
    <style jsx>
    {`
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
        .inside-download--item.two {
          max-width: 100%;
        }
        .inside-download--item.three {
          max-width: 100%;
          margin-bottom: 30px;
        }
        .inside-download--item:last-child {
          margin-right: 0;
        }
        .link--primary {
          margin-top: 10px;
          color: rgb(6, 125, 247);
          text-decoration: none;
          display: inline-block;
          padding: 2.5px 5px;
          border-radius: 5px;
        }
      }

      {/* STYLES FOR DESKTOP */}
      @media only screen and (min-width: 751px) {
        .inside-download--item.two {
          max-width: 45%;
          margin-right: 10%;
        }
        .inside-download--item.three {
          max-width: 32%;
          margin-right: 2%;
        }
        .inside-download--item:last-child {
          margin-right: 0;
        }
        .link--primary {
          margin-top: 20px;
          color: rgb(6, 125, 247);
          text-decoration: none;
          display: inline-block;
          padding: 2.5px 5px;
          border-radius: 5px;
        }
        .link--primary:hover {
          color: #0076ff;
          padding: 2.5px 5px;
          background: rgba(0,118,255,0.1);
        }
        ol {
          padding-left: 17px;
        }
        .step {
          margin-bottom: 8px;
        }
      }
    `}
    </style>
  </div>
)

export default ItemDownload;
