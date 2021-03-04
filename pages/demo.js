import Cover from "../components/Cover/Cover";
import CoverVideo from "../components/CoverVideo/CoverVideo";
import Layout from "../components/Layout";

const Demo = ()=>{
    return(
        <Layout>
            <Cover
                text="Bienvenidos a la demo Bilog!"
                paragraph="Observa la demostración guiada de Bilog y descubre por qué somos tu mejor opción como software dental."/>
            <CoverVideo 
                text="DEMO BILOG"
                copy="Observa la demostración guiada de DENTALINK y descubre por qué somos tu mejor opción como software dental"
                src="https://www.youtube.com/embed/aLe4pjyI4bA?start=4"/>
        </Layout>
    )
}

export default Demo;