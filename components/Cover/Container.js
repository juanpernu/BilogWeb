import WrapperCta from './WrapperCta';
import StoreButton from '../Buttons/StoreButtons';
import Title from './Title';

const Container = ({ text, paragraph, position, hasButtons, buttonText, buttonHref, withImage, appButtons }) => {
  return(
    <div className={`cover--container ${!withImage && 'strech' } ${position}`}>
      <Title
        text={text}
      />
      <p className="cover--container-paragraph">
        {paragraph}
      </p>
      {hasButtons && <WrapperCta
        position={position}
        buttonText={buttonText}
        buttonHref={buttonHref}
      />}
      {
        appButtons && <StoreButton/>
      }
      <style jsx>
      {`
        {/* STYLES FOR MOBILE */}
        @media only screen and (max-width: 750px) {
          .cover--container {
            padding: 50px 30px 0px;
            text-align: left;
            color: #fff;
          }
          .cover--container.strech {
            padding: 30px;
          }
          .cover--container.strech .cover--container-paragraph {
            margin-bottom: 0;
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

export default Container