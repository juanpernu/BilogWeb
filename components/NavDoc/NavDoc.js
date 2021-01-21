import React, { Fragment } from 'react'

const NavDoc = (props)=>{
    const {name, urlHash} = props
    // const eltitulo = props
    
    return( 
        <Fragment>
            <seccion className="contenedor-menu">
                
                {eltitulo.map(()=>{
                    <NavDocItem>{}</NavDocItem>
                })}

                    {/*<a href={urlHash}>{name}</a>*/}
                
            </seccion>
        
            <style jsx>
            {`
            {/* STYLES FOR MOBILE }
            @media only screen and (max-width: 750px) {
            }

            {/* STYLES FOR DESKTOP }
            @media only screen and (min-width: 751px) {
                
                .contenedor-menu{
                display:flex;
                flex-direction: column;
                width: 30%;
                }
            }
            `}
            </style>
        </Fragment>
    )
}
export default NavDoc;