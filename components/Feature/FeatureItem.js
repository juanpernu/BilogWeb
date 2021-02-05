import Icons from '../Icons/Icons';
import Button from '../Buttons/Button';

const FeatureItem = ({ title, description, icons, button, onClickHandler }) => (
  <div className="feature-item">
    {icons && <Icons type={icons} />}
    <h3 className="feature-item--title">{title}</h3>
    <p className="feature-item--description">{description}</p>
    {button &&
      <Button onClick={() => onClickHandler(button.link)}>
        {button.text}
      </Button>
    }
    <style jsx>
      {`
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
        .feature-item {
          margin: 10px 0 30px 0;
        }
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
          margin: 0 20px 20px;
          text-align: left;
          max-width: 400px;
        }
        .feature-item--title {
          font-size: 20px;
          font-weight: 600;
          margin-top: 16px;
          margin-bottom: 13px;
        }
      }
    `}
    </style>
  </div>
)

export default FeatureItem;
