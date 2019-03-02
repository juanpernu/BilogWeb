import Button from '../Button'

const WrapperCta = ({ }) => {
  return(
    <div className="cover--container-cta">
      <Button customClass="success">Contratar ahora</Button>
      <Button customClass="secondary">Ver casos de éxito</Button>
      <style jsx>
      {`
        {/* STYLES FOR MOBILE */}
        @media only screen and (max-width: 750px) {
          .cover--container-cta {
            padding: 10px 0;
            position: relative;
            z-index: 100;
          }
        }

        {/* STYLES FOR DESKTOP */}
        @media only screen and (min-width: 751px) {
          .cover--container-cta {
            width: 400px;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
          }
        }
      `}
      </style>
    </div>
  )
}

export default WrapperCta