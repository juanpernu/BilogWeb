import Layout from "../components/Layout";
import Cover from "../components/Cover/Cover";
import Feature from "../components/Feature/Feature";
import MockedFeatures from '../mocks/demoFeatures';
import BannerCta from "../components/Banner/BannerCta";
import Carousel from '../components/Carousel';

const Demo = () => {
    return (
        <Layout>
            <Cover
                text="Demostración de Bilog"
                paragraph="Mirá la demostración guiada de nuestro software y descubrí por qué somos la mejor opción."
                coverVideo="https://www.youtube.com/embed/aLe4pjyI4bA?start=4" />
            <Feature {...MockedFeatures} />
            <BannerCta
                title="¿Querés saber más sobre Bilog? Llamanos"
                buttonText="Agendar llamada"
                buttonHref="/contact" />
            <Carousel />
        </Layout>
    )
}

export default Demo;
