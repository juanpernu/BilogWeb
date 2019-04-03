const Title = ({title, subtitle, alignCenter}) => {
  return (
    <div className={alignCenter && 'text-align-center'}>
      <h2 className="feature--title">{title}</h2>
      <p className="feature--subtitle">{subtitle}</p>
      <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .feature--title {
              font-size: 28px;
              text-align: left;
              font-weight: 600;
              margin-top: 0px;
              margin-bottom: 24px;
            }
            .feature--subtitle {
              font-size: 16px;
              line-height: 26px;
              margin-bottom: 24px;
            }
            .text-align-center .feature--title {
              text-align: center;
            }
            .text-align-center .feature--subtitle {
              text-align: center;
              margin-bottom: 50px;
            }
            :global(.feature-section.color-background .feature--subtitle) {
              color: #666;
            }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .feature--title {
              font-size: 40px;
              font-weight: 600;
              margin-top: 0px;
              margin-bottom: 24px;
            }
            .feature--subtitle {
              font-weight: 300;
              color: #505656;
              font-size: 20px;
              line-height: 1.5;
              margin-bottom: 30px;
            }
            .text-align-center .feature--title {
              text-align: center;
            }
            .text-align-center .feature--title {
              text-align: center;
            }
            .text-align-center .feature--subtitle {
              text-align: center;
            }
            :global(.feature-section.color-background .feature--subtitle) {
              color: #666;
            }
          }
        `}
        </style>
    </div>
  )
}

export default Title
