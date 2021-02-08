import Layout from '../components/Layout';
import FeatureProvider from '../contexts/featureContext';
import FeatureWrapper from '../components/Feature/FeatureWrapper';

const featureContent = require('../contents/feature/content');

Features.getInitialProps = ctx => {
    const { key } = ctx.query;
    return { hash: key };
}

function Features({ hash }) {
    return (
        <Layout>
            <FeatureProvider data={featureContent} hash={hash} >
                <FeatureWrapper />
            </FeatureProvider>
        </Layout>
    )
}

export default Features;