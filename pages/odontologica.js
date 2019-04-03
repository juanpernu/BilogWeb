import Layout from '../components/Layout'
import Cover from '../components/Cover/Cover'
import FeatureImg from '../components/Feature/FeatureImg'
import Versions from '../components/Version/Versions'
import BannerCta from '../components/BannerCta'
import Feature from '../components/Feature/Feature'

import MockedFeatures from '../mocks/odontologicaFeatures'

export default () => (
    <Layout>
      <Cover
        text="El software que te merecés."
        paragraph="Tené en una sola ventana todo el control de tu clínica para una mejor gestión."
        position="lf"
        hasButtons={false}
        bgImg='10'
      />
      <Feature {...MockedFeatures} />
      <Versions />
      <BannerCta
        title="¿Todavía tenés dudas? Probalo ahora."
        buttonText="Descargar demo"
        buttonHref="/descargas"
      />
      <FeatureImg
        imgSrc="http://www.wifers.com/images/login.png"
        imgHref="/"
        imgAlt="Image feature"
        copy="¿Qué es?"
        hasCta={true}
        imageAlign="left"
        bgGrey={true}
      />
    </Layout>
)
