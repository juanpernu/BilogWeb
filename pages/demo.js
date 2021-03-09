import Layout from "../components/Layout";
import Cover from "../components/Cover/Cover";

const Demo = ()=>{
    return(
        <Layout>
            <Cover
                text="Bienvenidos a la demo Bilog!"
                paragraph="Mirá la demostración guiada de nuestro software y descubrí por qué somos tu mejor opción como software dental."
                coverVideo="https://www.youtube.com/embed/aLe4pjyI4bA?start=4"/>
        </Layout>
    )
}

export default Demo;