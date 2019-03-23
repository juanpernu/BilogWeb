import Layout from '../components/Layout'
import Cover from '../components/Cover/Cover'
import Feature from '../components/Feature/Feature'
import Carousel from '../components/Carousel'
import Versions from '../components/Version/Versions'

import MockedFeatures from '../mocks/indexFeatures'

export default () => (
    <Layout>
      <Cover
        text="Más tiempo libre, mayor control y mejor gestión de tu consultorio o clínica."
        paragraph="Somos la empresa número uno en desarrollo de software para Odontología."
        hasButtons={true}
        bgImg='03'
      />
      <Feature {...MockedFeatures} />
      <Versions />
      <Carousel/>
    </Layout>
)
