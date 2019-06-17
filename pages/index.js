import Layout from '../components/Layout';
import Cover from '../components/Cover/Cover';
import Feature from '../components/Feature/Feature';
import FeatureImg from '../components/Feature/FeatureImg';
import Carousel from '../components/Carousel';
import Products from '../components/Product/Products';

import MockedFeatures from '../mocks/indexFeatures';

export default () => (
  <Layout>
    <Cover
      text="Más tiempo libre, mayor control y mejor gestión de tu consultorio o clínica."
      paragraph="Somos la empresa número uno en desarrollo de software para Odontología."
      hasButtons={false}
      position="lf"
      gradientBg="default"
      coverImage="home"
    />
    <Feature {...MockedFeatures} />
    <Products />
    <FeatureImg
      imgSrc="/static/bilog-app.png"
      imgAlt="Image feature"
      copy="Bilog App"
      title="Tu consultorio, a donde sea que vayas."
      description="Desde tu teléfono vas a poder llevar todo el control de tu Clínica o Consultorio."
      hasCta
      imageAlign="left"
      bgGrey
      buttonText="Ver más"
      buttonHref="/bilogApp"
    />
    <Carousel/>
  </Layout>
)
