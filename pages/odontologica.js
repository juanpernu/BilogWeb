import Layout from '../components/Layout';
import Cover from '../components/Cover/Cover';
import Versions from '../components/Version/Versions';
import BannerCta from '../components/Banner/BannerCta';
import Feature from '../components/Feature/Feature';
import Carousel from '../components/Carousel';

import GeneratedVideos from '../components/Videos/Videos'
import MockedFeatures from '../mocks/odontologicaFeatures';

export default () => (
    <Layout>
      <Cover
        text="El software que te merecés."
        paragraph="Tené en una sola ventana todo el control de tu clínica para una mejor gestión."
        position="lf"
        hasButtons={false}
        bgImg='10'
      />
      <Feature {...MockedFeatures} />
      <BannerCta
        title="¿Todavía tenés dudas? Mirá la demo."
        buttonText="Ver video"
        modalContent={<GeneratedVideos type='intro'/>}
        showModal={true}
      />
      <Versions />
      <Cover
        text="Te presentamos Bilog App"
        paragraph="Tu consultorio, a donde sea que vayas."
        hasButtons={true}
        buttonText="Ver más"
        buttonHref="/bilogApp"
        product={true}
        position="lf"
        bgImg='12'
      />
      <Carousel/>
    </Layout>
)
