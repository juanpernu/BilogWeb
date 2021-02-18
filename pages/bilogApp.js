import Layout from '../components/Layout'
import Cover from '../components/Cover/Cover'
import Feature from '../components/Feature/Feature'
import FeatureImg from '../components/Feature/FeatureImg'
import BannerCta from '../components/Banner/BannerCta'
import Carousel from '../components/Carousel'
import { productCover, appCover, bannerCta, featureImg, features } from '../mocks/landingMock'

const BilogApp = () => (
  <Layout>
    <Cover
      text={productCover.text}
      paragraph={productCover.paragraph}
      position={productCover.position}
      gradientBg={productCover.gradientBg}
      coverImage={productCover.coverImage}
      appButtons
      hasArrow
    />
    <Feature features={features} />
    <FeatureImg
      imgSrc={featureImg.imgSrc}
      imgAlt={featureImg.imgAlt}
      copy={featureImg.copy}
      title={featureImg.title}
      description={featureImg.description}
      hasCta={featureImg.hasCta}
      imageAlign={featureImg.imageAlign}
      bgGrey
    />
    <BannerCta
      title={bannerCta.title}
      buttonText={bannerCta.buttonText}
      buttonHref={bannerCta.buttonHref}
    />
    <Carousel />
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
  </Layout>
)

export default BilogApp