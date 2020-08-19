import Layout from '../components/Layout';
import Feature from '../components/Feature/Feature';

import {downloadFeatures} from '../mocks/general'

export default () => (
  <Layout>
    <Feature {...downloadFeatures} />
  </Layout>
)