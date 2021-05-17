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
      coverImage="static/landing-nativa/illustration.png"
    />
    <Feature {...indexFeatures} />
    <Products />
    <FeatureImg
      imgSrc="/static/landing-nativa/illustration.png"
      imgAlt="Bilog app illustration"
      copy="¡Nueva Bilog App!"
      title="Organizá y optimizá el rendimiento de tu clínica con Bilog App"
      description="Ya está disponible en todos los stores la nueva app de Bilog. ¿Ya te la bajaste?"
      hasCta
      imageAlign="left"
      bgGrey
      buttonText="Descargá la app"
      buttonHref="/bilogApp"
    />
    <Carousel/>
  </Layout>
)
