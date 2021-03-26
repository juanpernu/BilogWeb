import { useContext, useEffect } from 'react';
import { FirstStepsContext } from '../../contexts/firstStepsContext';

const FirstStepsWrapper = () => {
    //const {props} = useContext(FirstStepsContext)
    const {} = useContext(FirstStepsContext);
    useEffect(() => {
        if(window) {
            const url = window.location.href;
            const regexp = new RegExp(/\#(.*)/gm)
            const contentId = url.match(regexp);
            allContent(contentId[0]);
        }
    }, []);
    return (
        <>
        </>
    )
}
export default FirstStepsWrapper;