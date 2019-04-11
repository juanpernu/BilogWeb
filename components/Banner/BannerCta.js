import ButtonLink from '../Buttons/ButtonLink'
import Modal from './Modalize'

const BannerCta = ({ title, buttonText, buttonHref, showModal, modalContent }) => {

  const renderModal = () => {
    return <Modal modalContent={modalContent} buttonText={buttonText} />
  }

  const renderButton = () => {
    return (
      <ButtonLink
        customClass="terciary"
        buttonHref={buttonHref}
        buttonText={buttonText}
      />
    )
  }

  return(
    <div className="bannerCta--container">
      <div className="bannerCta--content">
        <h4 className="bannerCta--title">{title}</h4>
        <div className="bannerCta--buttons">
          {showModal ? renderModal() : renderButton()}
        </div>
      </div>
      <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .bannerCta--container {
              background: linear-gradient(to right,#0794f8,#174fce);
            }
            .bannerCta--content {
              padding: 50px 30px;
              display: flex;
              align-items: center;
              flex-direction: column;
            }
            .bannerCta--title {
              font-size: 36px;
              font-weight: 600;
              line-height: 1.1;
              margin: 0;
              padding: 10px 0 30px;
              color: #fff;
            }
            .bannerCta--buttons {
              width: 100%;
            }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .bannerCta--container {
              background: linear-gradient(to right,#0794f8,#174fce);
            }
            .bannerCta--content {
              padding: 50px 0;
              height: 150px;
              max-width: 1024px;
              display: flex;
              align-items: center;
              justify-content: space-around;
              margin: auto;
            }
            .bannerCta--title {
              font-size: 36px;
              font-weight: 600;
              margin: 0;
              padding: 0;
              color: #fff;
              max-width: 600px;
            }
        `}
        </style>
    </div>
  )
}

export default BannerCta
