import Layout from '../components/Layout';
import content from '../contents/success/content';
import Cover from '../components/Cover/Cover';
import Case from '../components/Case';

export default () => {
  return (
    <Layout>
      <Cover
        text="Casos de éxito"
        paragraph="Conocé porque los más prestigiosos nos están eligiendo. Inspirate con casos reales e implementaciones exitosas."
        hasButtons={false}
        gradientBg="green"
      />
      <section className="success-list-container">
        <Case cases={content['main']} />
      </section>
      <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .success-list-container {
              color: #505656;
              margin: 0 auto;
              padding: 20px;
              display: flex;
              flex-direction: column;
            }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .success-list-container {
              color: #505656;
              max-width: 1024px;
              margin: 0 auto 40px;
              display: flex;
              flex-direction: column;
              padding-top: 86px;
            }
          }
        `}
      </style>
    </Layout>
  )
};
