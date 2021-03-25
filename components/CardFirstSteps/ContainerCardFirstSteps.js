import CardFirstSteps from "./CardFirstSteps"

const ContainerCardFirstSteps = () => {
    return ( 
      <>
        <h2 className="title">Primeros pasos con Bilog ! Elegi tu version y comenza: </h2>
        <section className="container">
            <CardFirstSteps
                title="Small "
                paragraph="Esta es la version Small"
                imageSrc="../../static/small.png"
                imageAlt="Version Small"
                buttonHref="/first-steps"
                buttonText="Ver mas"
                customClass="primary"
                external={true}
            />
            <CardFirstSteps
                title="Small Premium"
                paragraph="Esta es la version Small Premium"
                imageSrc="../../static/small-premium.png"
                imageAlt="Version Small Premiun"
                buttonHref="/first-steps"
                buttonText="Ver mas"
                customClass="primary"
                external={true}
            />
            <CardFirstSteps
                title="Standard"
                paragraph="Esta es la version Standard"
                imageSrc="../../static/standard.png"
                imageAlt="Version Standard"
                buttonHref="/first-steps"
                buttonText="Ver mas"
                customClass="primary"
                external={true}
            />
            <CardFirstSteps
                title="Full"
                paragraph="Esta es la version Full"
                imageSrc="../../static/standard.png"
                imageAlt="Version Small Full"
                buttonHref="/first-steps"
                buttonText="Ver mas"
                customClass="primary"
                external={true}
            />
        </section>    
        <style jsx>
        {`
            {/* STYLES FOR MOBILE */}
            @media only screen and (max-width: 750px) {
                .title{
                    margin: 20px 25px;
                    padding: 0px;
                    box-sizing: border-box;
                    text-align: center;
                    font-weight: 600;
                    font-size: 24px;
                }
                .container{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
            }
    
            {/* STYLES FOR DESKTOP */}
            @media only screen and (min-width: 751px) {
                .title{
                    margin: 35px 0px;
                    padding: 0px;
                    box-sizing:border-box;
                    text-align: center;
                    font-weight: 600;
                    font-size: 30px;
                }
                .container{
                    height: 400px;
                    width:99.5%;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:row;
                }
            }
        `}
        </style>
      </>
    );
}
 
export default ContainerCardFirstSteps;