import Layout from '../components/Layout.js'
import Cover from '../components/Cover/Cover.js'
import Feature from '../components/Feature.js'
import MockedFeatures from '../mocks/features.js'

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
