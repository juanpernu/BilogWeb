import Layout from '../components/Layout'
import Download from '../components/Download/Download'
import Feature from '../components/Feature/Feature'

import MockedFeatures from '../mocks/downloadFeatures'

export default () => (
  <Layout>
    <Download/>
    <Feature {...MockedFeatures} />
  </Layout>
)