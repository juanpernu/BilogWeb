import Layout from '../components/Layout'
import Cover from '../components/Cover/Cover'
import Feature from '../components/Feature/Feature'
import FeatureImg from '../components/Feature/FeatureImg'

import MockedFeatures from '../mocks/auditoriaFeatures'

const FeaturesProps = MockedFeatures;

export default () => (
    <Layout>
      <Cover
        text="Llevá innovación y eficiencia a todas tus auditorías."
        paragraph="En unos pocos minutos realizá una auditoría de las liquidaciones de los prestadores, de acuerdo a las reglas definidas anteriormente por vos."
        position="lf"
        gradientBg="redish"
        hasButtons={true}
      />
      <Feature {...FeaturesProps} />
      <FeatureImg
        imgSrc="http://www.wifers.com/images/login.png"
        imgHref="/"
        imgAlt="Image feature"
        copy="¿Qué es?"
        hasCta={true}
      />
    </Layout>
)
