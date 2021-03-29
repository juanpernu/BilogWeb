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
    {
      featureImg.map(el => <FeatureImg
        imgSrc={el.imgSrc}
        imgAlt={el.imgAlt}
        copy={el.copy}
        title={el.title}
        description={el.description}
        imageAlign={el.imageAlign}
        bgGrey={el.bgGrey}
        hasCta={el.hasCta}
        buttonText={el.buttonText}
        buttonHref={el.buttonHref}
      />)
    }
    <Feature features={features} />
    <Carousel />
    <BannerCta
      title={bannerCta.title}
      buttonText={bannerCta.buttonText}
      buttonHref={bannerCta.buttonHref}
    />
  </Layout>
)

export default BilogApp