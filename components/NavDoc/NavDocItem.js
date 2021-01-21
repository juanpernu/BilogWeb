import React from 'react'

const NavDocItem = (props) => {
    return(
        <>
        <section className="section-container">
            
        </section>
        <style jsx>
        {`
        {/* STYLES FOR MOBILE */}
        @media only screen and (max-width: 750px) {
        }

        {/* STYLES FOR DESKTOP */}
        @media only screen and (min-width: 751px) {
            
            .section-container {
            display:flex;
            flex-direction: column;
            width: 30%;
            }

            
        }
        `}
    </style>
    </>
    )
}

export default NavDocItem;