import BannerCta from "../components/Banner/BannerCta";
import Cover from "../components/Cover/Cover";
import Layout from "../components/Layout";

const Demo = ()=>{
    return(
        <Layout>
            <Cover
                text="Bienvenidos a la demo Bilog!"
                paragraph="Observa la demostración guiada de Bilog y descubre por qué somos tu mejor opción como software dental." />
            <BannerCta
                title="¿Todavia tenés dudas? Contactanos."
                buttonText="Ir a contactos"
                buttonHref="/contact" />
        </Layout>
    )
}

export default Demo;