import { Fragment, useContext } from 'react';
import Cover from '../Cover/Cover';
import Feature from '../Feature/Feature';
import { FeatureContext } from '../../contexts/featureContext';

const FeatureWrapper = () => {
    const { productCover, appCover, features, allContent } = useContext(FeatureContext);

    return (
        <Fragment>
            <Cover
                text={productCover.text}
                paragraph={productCover.paragraph}
                position={productCover.position}
                hasButtons={productCover.hasButtons}
                gradientBg={productCover.gradientBg}
                coverImage={productCover.coverImage}
            />
            <Feature
                features={features}
            />
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
        </Fragment>
    )
}

export default FeatureWrapper;