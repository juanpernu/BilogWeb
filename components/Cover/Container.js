import PropTypes from 'prop-types'
import WrapperCta from './WrapperCta'
import Title from './Title'

const Container = ({ text, paragraph, position, hasButtons, buttonText, buttonHref, withImage }) => {
  const renderButtons = (hasButtons) => {
    if(hasButtons){
      return (
        <WrapperCta
          position={position}
          buttonText={buttonText}
          buttonHref={buttonHref}
        />
      )
    }
    return null;
  }
  
  return(
    <div className={`cover--container ${!withImage && 'strech' } ${position}`}>
      <Title
        text={text}
      />
      <p className="cover--container-paragraph">
        {paragraph}
      </p>
        {renderButtons(hasButtons)}
      <style jsx>
      {`
        {/* STYLES FOR MOBILE */}
        @media only screen and (max-width: 750px) {
          .cover--container {
            padding: 50px 30px 0px;
            text-align: left;
            color: #fff;
          }
        }

        {/* STYLES FOR DESKTOP 1200px */}
        @media only screen and (min-width: 751px) {
          .cover--container {
            padding: 200px 0;
            text-align: center;
            color: #fff;
          }
          .cover--container.strech {
            padding: 100px 0;
          }
          .cover--container.lf {
            text-align: left;
            margin: 0 auto;
            box-sizing: border-box;
          }
          .cover--container.lf .cover--container-cta {
            margin: 0;
          }
          .cover--container .cover--container-paragraph {
            font-size: 22px;
          }
        }

        {/* STYLES FOR DESKTOP +1200px */}
        @media only screen and (min-width: 751px) {
          .cover--container {
            padding: 200px 0;
            text-align: center;
            color: #fff;
          }
          .cover--container.lf {
            text-align: left;
            margin: 0 auto;
            box-sizing: border-box;
          }
          .cover--container.lf .cover--container-cta {
            margin: 0;
          }
          .cover--container .cover--container-paragraph {
            font-size: 22px;
          }
        }
      `}
      </style>
    </div>
  )
}

Container.propTypes = {
  gradientBg: PropTypes.string,
}

Container.defaultProps = {
  gradientBg: '',
}

export default Container