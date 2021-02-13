import Layout from '../components/Layout';
import Cover from '../components/Cover/Cover';
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
      coverImage="odontologica"
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
      text="Bilog App"
      paragraph="La gestión de tu consultorio al alcance de tu mano."
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
