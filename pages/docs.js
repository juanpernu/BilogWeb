import Layout from '../components/Layout';
import DocsWrapper from '../components/Docs/DocsWrapper';
import DocOdontologica from '../documentation/odontologica';
import DocsProvider from '../contexts/docContext';

const documentationContent = require('../documentation/content');

export default () => (
  <Layout>
    <DocsProvider content={documentationContent}>
      <DocsWrapper
        documentation={DocOdontologica}
      />
    </DocsProvider>
  </Layout>
);
