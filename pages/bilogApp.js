import Layout from '../components/Layout'
import Cover from '../components/Cover/Cover'
import FeatureImg from '../components/Feature/FeatureImg'
import Carousel from '../components/Carousel'
import ArrowScrollDown from '../components/ArrowScrollDown'

const BilogApp = () => (
  <Layout>
    <Cover
      text="Presentamos Bilog App"
      paragraph="Administrá tu consultorio en tu celular. Con tu agenda siempre disponible y actualizada organizar tu día se va a volver muy fácil."
      position="lf"
      gradientBg="blue"
      coverImage="app"
      appButtons
      hasArrow
    />
    <FeatureImg
      imgSrc="/static/app-mockup.png"
      imgAlt="App mockup"
      copy="Bilog App"
      title="Sorprendentes funciones"
      description="Administrá tu consultorio en tu celular, tené tu agenda siempre disponible y actualizada."
      hasCta={false}
      imageAlign="left"
      bgGrey
    />
    <Carousel />
  </Layout>
)

export default BilogApp