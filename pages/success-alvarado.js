import Layout from '../components/Layout';
import SuccessImg from '../components/Success/Image';
import content from '../contents/success/content';

const SuccessCasesCalcagno = () => {
  const { title, bgImg, section: { first, second, third = null } } = content['alvarado'];
  return (
    <Layout>
      <section className="success-container">
        <h2 className="success-container--title">{title}</h2>
        <SuccessImg imgBg={bgImg[0].src} bgPosition={bgImg[0].position} />
        {
          first.map(el => <p className="success-container--text" dangerouslySetInnerHTML={{ __html: el }} />)
        }
        <SuccessImg imgBg={bgImg[1].src} bgPosition={bgImg[1].position} />
        {
          second.map(el => <p className="success-container--text" dangerouslySetInnerHTML={{ __html: el }} />)
        }
        <SuccessImg imgBg={bgImg[2].src} bgPosition={bgImg[2].position} />
        {
          third && third.map(el => <p className="success-container--text" dangerouslySetInnerHTML={{ __html: el }} />)
        }
        <p className="success-container--text cta">Si querés saber más sobre cómo llevar tu consultorio o clínica al nivel más alto, <a href="/contact">contactanos</a>.</p>
      </section>
      <style jsx>
        {`
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
        .success-container {
          color: #505656;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }
        .success-container--title {
          margin: 0 auto;
          font-size: 22px;
          padding: 20px;
        }
        .success-container--text {
          font-size: 16px;
          line-height: 1.6;
          padding: 10px 20px;
        }
        .success-container--text.cta {
          color: #000;
          font-weight: 600;
        }
        .success-container--text.cta a {
          color: #0090ff;
          text-decoration: none;
          transition: 0.3s ease;
        }
      }

      {/* STYLES FOR DESKTOP */}
      @media only screen and (min-width: 751px) {
        .success-container {
          color: #505656;
          max-width: 1024px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          padding-top: 86px;
        }
        .success-img {
          width: 100%;
          height: 350px;
          display: block;
          background-size: cover;
          background-position: center center;
        }
        .success-container--title {
          margin: 0;
          padding: 50px 0 25px;
          font-size: 32px;
        }
        .success-container--text {
          font-size: 16px;
          padding: 0;
          line-height: 1.75;
          margin-bottom: 30px;
        }
        .success-container--text.cta {
          color: #000;
          font-weight: 600;
        }
        .success-container--text.cta a {
          color: #0090ff;
          text-decoration: none;
          transition: 0.3s ease;
        }
      }
    `}
      </style>
    </Layout>
  )
};

export default SuccessCasesCalcagno;
