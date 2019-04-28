import Layout from '../components/Layout';
import Cover from '../components/Cover/Cover';
import BannerCta from '../components/Banner/BannerCta';
import Feature from '../components/Feature/Feature';
import FeatureImg from '../components/Feature/FeatureImg'

import GeneratedVideos from '../components/Videos/Videos'
import MockedFeatures from '../mocks/laboratoriosFeatures';

export default () => (
    <Layout>
      <Cover
        text="Ideado para vos."
        paragraph="Simplificá la administración de tu laboratorio con un completo conjunto de módulos e informes."
        position="lf"
        hasButtons={false}
        bgImg='11'
      />
      <Feature {...MockedFeatures} />
      <BannerCta
        title="Administrar tu laboratorio puede ser muy fácil. Mirá la demo."
        buttonText="Ver video"
        modalContent={<GeneratedVideos type='intro'/>}
        showModal={true}
      />
      <FeatureImg
        imgSrc="/static/laboratorios-pedidos.png"
        imgAlt="Laboratorio - Pedidos"
        copy="El proceso que seguimos"
        title="Pedidos"
        description="Cargas los pedidos realizados por los profesionales y vas a poder diferenciar, por colores, los pedidos a entregar hoy y los de próxima entrega."
        hasCta={false}
        imageAlign="left"
        bgGrey={false}
        buttonText="Ver más"
        buttonHref="/bilogApp"
      />
      <FeatureImg
        imgSrc="/static/laboratorios-finanzas.png"
        imgAlt="Laboratorio - Finanzas"
        copy="El proceso que seguimos"
        title="Finanzas"
        description="Una vez realizada la entrega, el remito tendrá el valor del trabajo realizado y el saldo acumulado en la cta. cte como recordatorio para el profesional, la cual podes mandar por mail."
        hasCta={false}
        imageAlign="right"
        bgGrey={true}
        buttonText="Ver más"
        buttonHref="/bilogApp"
      />
      <FeatureImg
        imgSrc="/static/laboratorios-estadisticas.png"
        imgAlt="Laboratorio - Estadísticas"
        copy="El proceso que seguimos"
        title="Estadísticas"
        description="Los informtes te permiten obtener estadísticas de trabajos pedidos, entregados y los que están pendientes de entrega. Con estadísticas inteligentes vas a poder corregir, si es necesario, la producción de tu laboratorio."
        hasCta={false}
        imageAlign="left"
        bgGrey={false}
        buttonText="Ver más"
        buttonHref="/bilogApp"
      />
    </Layout>
)
