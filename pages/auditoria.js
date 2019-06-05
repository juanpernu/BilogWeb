import Layout from '../components/Layout'
import Cover from '../components/Cover/Cover'
import Feature from '../components/Feature/Feature'
import FeatureImg from '../components/Feature/FeatureImg'

import MockedFeatures from '../mocks/auditoriaFeatures'

const FeaturesProps = MockedFeatures;

export default () => (
    <Layout>
      <Cover
        text="Innovación y eficiencia en todas tus auditorías."
        paragraph="Hacé en pocos minutos una auditoría de las liquidaciones de los prestadores, de acuerdo a las reglas definidas anteriormente por vos."
        position="lf"
        gradientBg="redish"
        hasButtons={false}
        gradientBg="redish"
        coverImage="auditoria"
      />
      <Feature {...FeaturesProps} />
      <FeatureImg
        imgSrc="/static/illus-aud-tablas.svg"
        imgAlt="Auditoría - Tablas"
        copy="El proceso que seguimos"
        title="Tablas"
        description="Definí todas las normas y reglas, que se deben seguir para cumplir una auditoría óptima, desde una sola pantalla."
        hasCta={false}
        imageAlign="left"
        bgGrey={false}
        buttonText="Ver más"
        buttonHref="/bilogApp"
      />
      <FeatureImg
        imgSrc="/static/illus-aud-auditoria.svg"
        imgAlt="Auditoría - Auditoría"
        copy="El proceso que seguimos"
        title="Auditoría"
        description="Vas a ver en distintos colores el estado de los afiliados y vas a tener la posibilidad de auditar las prácticas de forma manual o dejar que el sistema lo haga por sí mismo, para luego, mandar la liquidación a la obra social y llevar un seguimiento del pago."
        hasCta={false}
        imageAlign="right"
        bgGrey={true}
        buttonText="Ver más"
        buttonHref="/bilogApp"
      />
      <FeatureImg
        imgSrc="/static/illus-aud-informes.svg"
        imgAlt="Auditoría - Informes"
        copy="El proceso que seguimos"
        title="Informes"
        description="Vas a tener a simple vista las liquidaciones realizadas por períodos, listar los consumos por afiliado y obtener estadísticas de prácticas odontológicas realizadas por profesional para tomar decisiones más inteligentes."
        hasCta={false}
        imageAlign="left"
        bgGrey={false}
        buttonText="Ver más"
        buttonHref="/bilogApp"
      />
    </Layout>
)
