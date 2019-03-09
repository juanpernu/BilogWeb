import Layout from '../components/Layout'
import Cover from '../components/Cover/Cover'
import FeatureImg from '../components/Feature/FeatureImg'
import Versions from '../components/Version/Versions'

export default () => (
    <Layout>
      <Cover
        text="El software que te merecés."
        paragraph="Tené en una sola ventana todo el control de tu clínica o consultorio con estadísticas para una mejor gestión."
        position="lf"
        hasButtons={true}
      />
      <Versions />
      <FeatureImg
        imgSrc="http://www.wifers.com/images/login.png"
        imgHref="/"
        imgAlt="Image feature"
        copy="¿Qué es?"
        hasCta={true}
        imageAlign="left"
      />
    </Layout>
)
