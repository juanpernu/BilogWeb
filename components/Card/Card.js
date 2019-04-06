import ButtonLink from '../Buttons/ButtonLink'
import ExternalButton from '../ExternalButton'

const Card = ({smallText, title, subtitle, hasCta, external, buttonText, buttonHref}) => {

  const renderCtaButton = () => {
    return (
      <div className="feature-image--cta">
        <ButtonLink
          customClass="primary"
          buttonHref={buttonHref}
          buttonText={buttonText}
        />
      </div>
    )
  }

  const renderExternalLink = () => {
    return (
      <ExternalButton
        externalLink={buttonHref}
        text={buttonText}
      />
    )
  }

  return(
    <div className="card">
      <small className="card--small">{smallText}</small>
      <h2 className="card--title">{title}</h2>
      <p className="card--subtitle">{subtitle}</p>
      {hasCta ? renderCtaButton() : null}
      {external ? renderExternalLink() : null}
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
        }
      `}
      </style>
    </div>
  )
}

export default Card