import Layout from '../components/Layout'
import Cover from '../components/Cover/Cover'
import Feature from '../components/Feature/Feature'
import FeatureImg from '../components/Feature/FeatureImg'
import Carousel from '../components/Carousel'

import MockedFeatures from '../mocks/appFeatures'

export default () => (
  <Layout>
    <Cover
      text="Presentamos Bilog App"
      paragraph="Administrá tu consultorio en tu celular. Con tu agenda siempre disponible y actualizada organizar tu día se va a volver muy fácil."
      hasButtons={true}
      position="lf"
      buttonText="Descargar App"
      buttonHref="/bilogApp"
      gradientBg="blue"
      coverImage="app"
    />
    <Feature {...MockedFeatures} />
    <Carousel/>
  </Layout>
)
