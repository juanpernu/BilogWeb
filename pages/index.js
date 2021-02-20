import Layout from '../components/Layout';
import Cover from '../components/Cover/Cover';
import Feature from '../components/Feature/Feature';
import FeatureImg from '../components/Feature/FeatureImg';
import Carousel from '../components/Carousel';
import Products from '../components/Product/Products';
import { indexFeatures } from '../mocks/general';

export default () => (
  <Layout>
    <Cover
      appButtons
      hasArrow
      gradientBg="default"
      position="lf"
      text="Nueva Bilog App"
      paragraph="La gestión de tu consultorio al alcance de tu mano."
      coverImage="landing-nativa/mobile-1.png"
    />
    {/* We will be back to this
      <Cover
      text="Más tiempo libre, mayor control y mejor gestión de tu consultorio o clínica."
      paragraph="Somos la empresa número uno en desarrollo de software para Odontología."
      hasButtons={false}
      position="lf"
      gradientBg="default"
      coverImage="illus-home.svg"
    /> */}
    <Feature {...indexFeatures} />
    <Products />
    <FeatureImg
      imgSrc="/static/landing-nativa/illustration.png"
      imgAlt="Bilog app illustration"
      copy="¡Nueva!"
      title="Organizá y optimizá el rendimiento de tu clínica con Bilog App"
      description="Administrá tu consultorio en tu celular, tené tu agenda siempre disponible y actualizada."
      hasCta
      imageAlign="left"
      bgGrey
      buttonText="Descargá la app"
      buttonHref="/bilogApp"
    />
    <Carousel/>
  </Layout>
)
