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
            //El problema: Cuando estamos en /first-steps nos llega como null contentId y no puede buscar la posicion 0 del array. 
            /* allContent(contentId[0]); */
            console.log(regexp)
            console.log(contentId)
            //Intento de solucion de Rodri
            /*switch(contentId){
                case contentId === null:
                    console.log("Estoy en uno")
                    return contentId[1]
                case contentId === 1:
                    return contentId[1]
                case contentId === [2]:
                    return contentId[2]
                case contentId === 3:
                    return contentId[3]
                case contentId === 4:
                    return contentId[4]
                default: return contentId[1]    
            }
            */
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