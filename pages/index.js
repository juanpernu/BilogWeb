import Layout from '../components/Layout'
import Cover from '../components/Cover/Cover'
import Feature from '../components/Feature/Feature'
import Carousel from '../components/Carousel'
import Products from '../components/Product/Products'

import MockedFeatures from '../mocks/indexFeatures'

export default () => (
    <Layout>
      <Cover
        text="Más tiempo libre, mayor control y mejor gestión de tu consultorio o clínica."
        paragraph="Somos la empresa número uno en desarrollo de software para Odontología."
        hasButtons={false}
        bgImg='03'
      />
      <Feature {...MockedFeatures} />
      <Products />
      <Carousel/>
    </Layout>
)
