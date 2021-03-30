import ExternalButton from '../ExternalButton'

const CardFirstSteps = ({title, paragraph, imageSrc, imageAlt, buttonHref, buttonText, external}) => {
  
  const renderExternalLink = () => {
    return (
      <ExternalButton
        externalLink={buttonHref}
        text={buttonText}
      />
    )
  }

  return (
      <> 
        <div className="card">
          <h4 className="card-title">{title}</h4>
          <p className="card-paragraph">{paragraph}</p>
          <img className="card-image" src={imageSrc} alt={imageAlt}></img>
          {external && renderExternalLink()}    
        </div>
        <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .card{
              width: 17em;
              height: auto;
              margin: 15px 0;
              padding-bottom: 20px;
              text-align: center;
              background: #fff;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
              border-radius: 15px;
              border: 1px solid #B2B7BA;
            }
            .card-title{
              padding: 0;
              margin: 15px 0;
              box-sizing: border-box;
              font-size: 22px;
              font-weight: 600;  
            }
            .card-paragraph{
              margin: 5px 0;
              padding: 0;
              box-sizing: border-box;
              font-weight: 500;
            }
          }
  
          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .card{
              height: 21em;
              width: 15.5em;
              margin: 10px 15px;
              text-align: center;
              background: #fff;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
              border-radius: 15px;
              border: 1px solid #B2B7BA;
            }
            .card-title{
              padding: 0;
              margin: 20px 0;
              box-sizing: border-box;
              font-size: 22px;
              font-weight: 600;
            }
            .card-paragraph{
              margin: 10px 0;
              padding: 0 5px;
              box-sizing: border-box;
              font-weight: 500;
            }
            .card-image{
              width: 210px;
              height: 120px;
              overflow: hidden;
            }
          }
        `}
        </style>
      </>
    );
  }
 
export default CardFirstSteps;