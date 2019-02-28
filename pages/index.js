import Layout from '../components/Layout.js'
import Cover from '../components/Cover.js'
import Feature from '../components/Feature.js'
import MockedFeatures from '../mocks/features.js'

const FeaturesProps = MockedFeatures;

export default () => (
    <Layout>
       <Cover />
       <Feature {...FeaturesProps} />
    </Layout>
)
