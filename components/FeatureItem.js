const FeatureItem = ({title, description}) => (
  <div className="feature-item">
    <h3 className="feature-item--title">{title}</h3>
    <p className="feature-item--description">{description}</p>
    <style jsx>
    {`
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
        .feature-item--title {
          color: rgb(0, 0, 0);
          font-size: 18px;
          margin: 0 0 10px;
          padding: 0;
          font-weight: 600;
        }
        .feature-item--description {
          font-size: 14px;
          line-height: 25px;
          color: rgb(102, 102, 102);
          margin: 0 0 24px;
          padding: 0;
        }
      }

      {/* STYLES FOR DESKTOP */}
      @media only screen and (min-width: 751px) {
        
      }
    `}
    </style>
  </div>
)

export default FeatureItem