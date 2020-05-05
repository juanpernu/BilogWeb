import Layout from '../components/Layout'
import Download from '../components/Download/Download'
import Feature from '../components/Feature/Feature'

import {downloadFeatures} from '../mocks/general'

export default () => (
  <Layout>
    <Download/>
    <Feature {...downloadFeatures} />
  </Layout>
)