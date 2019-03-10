const CardDetail = ({smallText, title, subtitle, features, price}) => {
  console.log(price);
  
  return(
    <div className="card">
      <small className="card--small">{smallText}</small>
      <h2 className="card--title">{title}</h2>
      <p className="card--subtitle">{subtitle}</p>
      {
        features.map((feature) => {
          return (
            <div className="card--feature-container" >
              <p className="card--feature">{feature.text}</p>
              {feature.check ? <i className="card--icon" /> : null}
            </div>
          )
        })
      }
      <div className="card--price">
        <span>{price}</span>
        <small>mensual.</small>
      </div>
      <style jsx>
      {`
        {/* STYLES FOR MOBILE */}
        @media only screen and (max-width: 750px) {
          .card {
            text-align: center;
            margin-bottom: 30px;
            padding: 20px 30px;
            box-sizing: border-box;
            background: #fff;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .card--small {
            color: #0076ff;
            text-transform: uppercase;
            font-size: 11px;
            margin-top: 15px;
          }
          .card--title {
            margin: 10px 0 20px;
            font-weight: 600;
            font-size: 24px;
            line-height: 24px;
          }
          .card--subtitle {
            font-weight: 500;
            font-size: 14px;
            margin: 10px 0;
          }
          .card--feature-container {
           display: flex;
           flex-direction: row;
           align-items: center;
           justify-content: space-between;
           width: 80%;
           padding: 5px 30px;
           border-bottom: 1px solid #eaeaea;
          }
          .card--feature-container:last-child {
            border-bottom: none;
          }
          .card--feature {
            margin-right: 20px;
            font-size: 12px;
            text-align: left;
            width: 75%;
          }
          .card--icon {
            background: #50e38b;
            border-radius: 50%;
            display: block;
            height: 25px;
            width: 25px;
          }
          .card--price {
            display: flex;
            align-items: center;
            text-align: center;
            margin-top: 20px;
          }
          .card--price span {
            font-size: 28px;
            font-weight: 700;
            margin-right: 15px;
          }
        }

        {/* STYLES FOR DESKTOP */}
        @media only screen and (min-width: 751px) {
          .card {
            text-align: center;
            margin-bottom: 30px;
            padding: 20px 30px;
            box-sizing: border-box;
            background: #fff;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .card--small {
            color: #0076ff;
            text-transform: uppercase;
            font-size: 11px;
            margin-top: 15px;
          }
          .card--title {
            margin: 10px 0 20px;
            font-weight: 600;
            font-size: 24px;
            line-height: 24px;
          }
          .card--subtitle {
            font-weight: 500;
            font-size: 14px;
            margin: 10px 0;
          }
          .card--feature-container {
           display: flex;
           flex-direction: row;
           align-items: center;
           justify-content: space-between;
           width: 80%;
           padding: 5px 30px;
           border-bottom: 1px solid #eaeaea;
          }
          .card--feature-container:last-child {
            border-bottom: none;
          }
          .card--feature {
            margin-right: 20px;
            font-size: 12px;
            text-align: left;
            width: 75%;
          }
          .card--icon {
            background: #50e38b;
            border-radius: 50%;
            display: block;
            height: 25px;
            width: 25px;
          }
          .card--price {
            display: flex;
            align-items: center;
            text-align: center;
            margin-top: 20px;
          }
          .card--price span {
            font-size: 28px;
            font-weight: 700;
            margin-right: 15px;
          }
        }
      `}
      </style>
    </div>
  )
}

export default CardDetail