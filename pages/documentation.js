import Layout from '../components/Layout';
import DocsWrapper from '../components/Docs/DocsWrapper';
import DocsProvider from '../contexts/docContext';

const documentationContent = require('../documentation/content');

export default () => (
  <Layout>
    <DocsProvider content={documentationContent}>
      <DocsWrapper/>
    </DocsProvider>
  </Layout>
);
