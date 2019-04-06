import ButtonLink from '../Buttons/ButtonLink'

const WrapperCta = ({ position, buttonText, buttonHref }) => {
  return(
    <div className={`cover--container-cta ${position}`}>
      <ButtonLink
        customClass="primary"
        buttonHref={buttonHref}
        buttonText={buttonText}
      />
      <style jsx>
      {`
        {/* STYLES FOR MOBILE */}
        @media only screen and (max-width: 750px) {
          .cover--container-cta {
            padding: 10px 0;
            position: relative;
            z-index: 100;
          }
          .cover--container-cta.lf {
            margin: 0;
          }
        }

        {/* STYLES FOR DESKTOP */}
        @media only screen and (min-width: 751px) {
          .cover--container-cta {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .cover--container-cta.lf {
            margin: 0;
            justify-content: flex-start;
          }
        }
      `}
      </style>
    </div>
  )
}

export default WrapperCta