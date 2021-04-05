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
      coverImage="illus-odontologica.svg"
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
    <Cover
      text="Te presentamos Bilog App"
      paragraph="Tu consultorio, a donde sea que vayas."
      hasButtons={true}
      buttonText="Ver más"
      buttonHref="/bilogApp"
      product={true}
      position="lf"
      gradientBg="default"
      coverImage="app"
    />
    <Carousel />
  </Layout>
)
