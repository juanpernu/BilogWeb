import { Fragment, useContext, useEffect } from 'react';
import Cover from '../Cover/Cover'

import { FirstStepsContext } from '../../contexts/firstStepsContext';

const FirstStepsWrapper = () => {
    const {productCover, allContent} = useContext(FirstStepsContext)

    useEffect(() => {
        if(window) {
            const url = window.location.href;
            const regexp = new RegExp(/\#(.*)/gm)
            const contentId = url.match(regexp);
            contentId && allContent(contentId[0]);
        }
    }, []);

    return (
        <Fragment>
            {productCover &&
            <Cover
                text={productCover.text}
                paragraph={productCover.paragraph}
                position={productCover.position}
                hasButtons={productCover.hasButtons}
                gradientBg={productCover.gradientBg}
                coverImage={productCover.coverImage}
            />
            }
        </Fragment>
    )
}
export default FirstStepsWrapper;