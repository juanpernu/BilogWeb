import Layout from '../components/Layout';
import FeatureProvider from '../contexts/featureContext';
import FeatureWrapper from '../components/Feature/FeatureWrapper';

const featureContent = require('../contents/feature/content');

const Features = () => (
    <Layout>
        <FeatureProvider data={featureContent}>
            <FeatureWrapper />
        </FeatureProvider>
    </Layout>
)

export default Features;