import { useEffect } from 'react';
import Layout from '../components/Layout';
import FeatureProvider from '../contexts/featureContext';
import FeatureWrapper from '../components/Feature/FeatureWrapper';

const featureContent = require('../contents/feature/content');

function Features() {
    return (
        <Layout>
            <FeatureProvider data={featureContent} >
                <FeatureWrapper />
            </FeatureProvider>
        </Layout>
    )
}

export default Features;