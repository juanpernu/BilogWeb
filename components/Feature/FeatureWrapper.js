import { Fragment, useContext, useEffect } from 'react';
import Cover from '../Cover/Cover';
import Feature from '../Feature/Feature';
import FeatureImg from '../Feature/FeatureImg'
import { FeatureContext } from '../../contexts/featureContext';
const FeatureWrapper = () => {
    const { productCover, banner, appCover, features, allContent } = useContext(FeatureContext);
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
            {appCover && 
            <Cover
                text={appCover.text}
                paragraph={appCover.paragraph}
                position={appCover.position}
                hasButtons={appCover.hasButtons}
                gradientBg={appCover.gradientBg}
                coverImage={appCover.coverImage}
            />}
            {banner && 
            <FeatureImg
                title={banner.title}
                description={banner.description}
                imgSrc={banner.imgSrc}
                imgAlt={banner.imgAlt}
                imageAlign={banner.imageAlign}
                bgGrey
                hasCta
                buttonText={banner.buttonText}
                buttonHref={banner.buttonHref}
            />}
        </Fragment>
    )
}
export default FeatureWrapper;