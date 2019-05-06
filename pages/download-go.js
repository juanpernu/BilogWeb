import Layout from '../components/Layout'
import DownloadUtils from '../components/Download/DownloadUtils'
import Feature from '../components/Feature/Feature'

import MockedFeatures from '../mocks/downloadFeatures'

export default () => (
  <Layout>
    <DownloadUtils/>
    <Feature {...MockedFeatures} />
  </Layout>
)