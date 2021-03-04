import Cover from "../components/Cover/Cover";
import Layout from "../components/Layout";
import Feature from "../components/Feature/Feature"
import MockedFeatures from '../mocks/odontologicaFeatures'

const Demo = ()=>{
    return(
        <Layout>
            <Cover
                text="Bienvenidos a la demo Bilog!"
                paragraph="Observa la demostración guiada de Bilog y descubre por qué somos tu mejor opción como software dental."/>
            <Feature {...MockedFeatures} />
        </Layout>
    )
}

export default Demo;