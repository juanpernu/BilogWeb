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
      <BannerCta
        title="¿Todavía tenés dudas? Mirá la demo."
        buttonText="Ver video"
        modalContent={<GeneratedVideos type='intro'/>}
        showModal
      />
      <ProductSlider />
      <Cover
        text="Te presentamos Bilog App"
        paragraph="Tu consultorio, a donde sea que vayas."
        hasButtons
        buttonText="Ver más"
        buttonHref="/bilogApp"
        product
        position="lf"
        gradientBg="default"
        coverImage="app"
      />
      <Carousel/>
    </Layout>
)
