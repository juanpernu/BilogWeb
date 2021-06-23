import Layout from "../components/Layout";
import Cover from "../components/Cover/Cover";
import Feature from "../components/Feature/Feature";
import MockedFeatures from "../mocks/demoFeatures";
import BannerCta from "../components/Banner/BannerCta";
import Carousel from "../components/Carousel";
import FeatureImage from "../components/Feature/FeatureImg";

const Demo = () => {
  return (
    <Layout>
      <Cover
        text="Demostración de Bilog"
        paragraph="Mirá la demostración guiada de nuestro software y descubrí por qué somos la mejor opción."
        coverVideo="https://www.youtube.com/embed/-k0AR8PpKF8"
      />
      <Feature {...MockedFeatures} />
      <FeatureImage
        imgSrc="/static/illus-labo-estadisticas.svg"
        imgAlt="Demo - Beneficios"
        copy="¿Sabías que?"
        title="Reducí hasta un 40% de trabajo"
        description="Implementando nuestro software de gestión podes reducir hasta un 40% el trabajo administrativo de tu consultorio o clínica y tener más tiempo para vos."
        hasCta={false}
        imageAlign="left"
        bgGrey={false}
      />
      <BannerCta
        title="¿Querés saber más sobre Bilog? Llamanos"
        buttonText="Agendar llamada"
        buttonHref="/contact"
      />
      <Carousel />
    </Layout>
  );
};

export default Demo;
