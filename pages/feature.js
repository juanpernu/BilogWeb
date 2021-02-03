import Layout from '../components/Layout';
import Cover from '../components/Cover/Cover';
import Feature from '../components/Feature/Feature';
import { productCover, appCover, features } from '../mocks/featureTest';

export default () => (
    <Layout>
        <Cover
            text={productCover.text}
            paragraph={productCover.paragraph}
            position={productCover.position}
            hasButtons={productCover.hasButtons}
            gradientBg={productCover.gradientBg}
            coverImage={productCover.coverImage}
        />
        <Feature features={features} />
        <Cover
            text={appCover.text}
            paragraph={appCover.paragraph}
            hasButtons={appCover.hasButtons}
            buttonText={appCover.buttonText}
            buttonHref={appCover.buttonHref}
            position={appCover.position}
            gradientBg={appCover.gradientBg}
            coverImage={appCover.coverImage}
        />
    </Layout>
)