import Layout from '../components/Layout';
import DocsWrapper from '../components/Docs/DocsWrapper';
import DocOdontologica from '../documentation/odontologica';

export default () => (
  <Layout>
    <DocsWrapper
      documentation={DocOdontologica}
    />
  </Layout>
)
