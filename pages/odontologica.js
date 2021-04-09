import Layout from '../components/Layout';
import Cover from '../components/Cover/Cover';
import FeatureImg from '../components/Feature/FeatureImg';
import BannerCta from '../components/Banner/BannerCta';
import Feature from '../components/Feature/Feature';
import Carousel from '../components/Carousel';
import ProductSlider from '../components/Product/ProductSlider';

import GeneratedVideos from '../components/Videos/Videos'
import MockedFeatures from '../mocks/odontologicaFeatures';

export default () => (
  <Layout>
    <Cover
      text="El software que te merecés."
      paragraph="Tené en una sola ventana todo el control de tu clínica para una mejor gestión."
      position="lf"
      hasButtons={false}
      gradientBg="default"
      coverImage="/static/illus-odontologica.svg"
    />
    <Feature {...MockedFeatures} />
    {/* 
        TODO: Update the video of this banner to render this component
        <BannerCta
        title="¿Todavía tenés dudas? Mirá la demo."
        buttonText="Ver video"
        modalContent={<GeneratedVideos type='intro'/>}
        showModal={true}
      /> */}
    <ProductSlider />
    <BannerCta
      title="¡Vení a ver la demostración guiada!"
      buttonText="Ver demo"
      buttonHref="/demo"
    />
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
    <Carousel />
  </Layout>
)
