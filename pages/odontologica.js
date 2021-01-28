import Layout from '../components/Layout';
import Cover from '../components/Cover/Cover';
import BannerCta from '../components/Banner/BannerCta';
import Feature from '../components/Feature/Feature';
import Carousel from '../components/Carousel';
import ProductSlider from '../components/Product/ProductSlider';
import GeneratedVideos from '../components/Videos/Videos'
import MockedFeatures from '../mocks/odontologicaFeatures';
import  Data  from '../mocks/odontologicaMock';

export default () => (
    <Layout>
      <Cover
        text={Data.productCover.text}
        paragraph={Data.productCover.paragraph}
        position={Data.productCover.position}
        hasButtons={Data.productCover.hasButtons}
        gradientBg={Data.productCover.gradientBg}
        coverImage={Data.productCover.coverImage}
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
        text={Data.appCover.text}
        paragraph={Data.appCover.paragraph}
        hasButtons={Data.appCover.hasButtons}
        buttonText={Data.appCover.buttonText}
        buttonHref={Data.appCover.buttonHref}
        position={Data.appCover.position}
        gradientBg={Data.appCover.gradientBg}
        coverImage={Data.appCover.coverImage}
      />
      <Carousel/>
    </Layout>
)
