import Layout from '../components/Layout'
import Cover from '../components/Cover/Cover'
import Feature from '../components/Feature/Feature'
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
    </Layout>
)
