import { Fragment, useContext, useEffect } from 'react';
import Cover from '../Cover/Cover';
import Feature from '../Feature/Feature';
import { FeatureContext } from '../../contexts/featureContext';

const FeatureWrapper = () => {
    const { productCover, appCover, features, allContent } = useContext(FeatureContext);
    useEffect(() => {
        if(window) {
            const url = window.location.href;
            const regexp = new RegExp(/\#(.*)/gm)
            const contentId = url.match(regexp);
            allContent(contentId[0]);
        }
    }, []);

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