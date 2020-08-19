import Icons from '../Icons/Icons';
import ExternalButton from '../ExternalButton';

const FeatureItem = ({title, description, icons, button}) => (
  <div className="feature-item">
    {icons && <Icons type={icons}/>}
    <h3 className="feature-item--title">{title}</h3>
    <p className="feature-item--description">{description}</p>
    {button && <ExternalButton
      externalLink={button.link}
      text={button.text}
    />}
    <style jsx>
    {`
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
        .feature-item--title {
          font-size: 18px;
          margin: 10px 0 10px;
          padding: 0;
          font-weight: 600;
        }
        .feature-item--description {
          font-size: 14px;
          line-height: 25px;
          margin: 0 0 24px;
          padding: 0;
        }
      }

      {/* STYLES FOR DESKTOP */}
      @media only screen and (min-width: 751px) {
        .feature-item {
          margin: 0 20px;
          text-align: left;
          max-width: 400px;
        }
        .feature-item--title {
          font-size: 20px;
          font-weight: 600;
          margin-top: 16px;
          margin-bottom: 13px;
        }
        .feature-item--button {

        }
      }
    `}
    </style>
  </div>
)

export default FeatureItem;
