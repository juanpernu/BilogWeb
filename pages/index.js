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
      hasButtons
      buttonText='Ver más información'
      buttonHref='/bilogApp'
      gradientBg="default"
      position="lf"
      text="¡Nueva Bilog App!"
      paragraph="Ya está disponible en todos los stores la nueva app de Bilog. ¿Ya te la bajaste?"
      coverImage="landing-nativa/illustration.png"
    />
    {/* Will be back to this after release
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
    {/* Will be back to this after release
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
    /> */}
    <Carousel/>
  </Layout>
)
