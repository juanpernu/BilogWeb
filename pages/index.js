import Layout from '../components/Layout'
import Cover from '../components/Cover/Cover'
import Feature from '../components/Feature/Feature'
import FeatureImg from '../components/Feature/FeatureImg'
import BannerCta from '../components/BannerCta'
import MockedFeatures from '../mocks/indexFeatures'

const FeaturesProps = MockedFeatures;

export default () => (
    <Layout>
      <Cover
        text="Más tiempo libre, mayor control y mejor gestión de tu consultorio o clínica."
        paragraph="Tecnología de vanguardia para la odontología."
        hasButtons={true}
      />
      <Feature {...FeaturesProps} />
      <FeatureImg
        imgSrc="http://www.wifers.com/images/login.png"
        imgHref="/"
        imgAlt="Image feature"
        copy="¿Qué es?"
        hasCta={true}
        imageAlign="left"
      />
      <FeatureImg
        imgSrc="http://www.wifers.com/images/local.png"
        imgHref="/"
        imgAlt="Image feature"
        copy="¿Qué es?"
        hasCta={false}
        imageAlign="right"
        bgGrey={true}
      />
      <BannerCta
        title="Todo el control en tus manos."
      />
    </Layout>
)
