import Layout from '../components/Layout';
import Cover from '../components/Cover/Cover';
import Feature from '../components/Feature/Feature';
import Carousel from '../components/Carousel';
import ProductSlider from '../components/Product/ProductSlider';
import GeneratedVideos from '../components/Videos/Videos';
import { productCover, appCover, features } from '../mocks/odontologicaMock';

const Odontologica = () => (
  <Layout>
    <Cover
      text={productCover.text}
      paragraph={productCover.paragraph}
      position={productCover.position}
      hasButtons={productCover.hasButtons}
      gradientBg={productCover.gradientBg}
      coverImage={productCover.coverImage}
    />
    <Feature features={features} />
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
      text={appCover.text}
      paragraph={appCover.paragraph}
      hasButtons={appCover.hasButtons}
      buttonText={appCover.buttonText}
      buttonHref={appCover.buttonHref}
      position={appCover.position}
      gradientBg={appCover.gradientBg}
      coverImage={appCover.coverImage}
    />
    <Carousel />
  </Layout>
)
export default Odontologica;