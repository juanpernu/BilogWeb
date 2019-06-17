import Layout from '../components/Layout'
import Cover from '../components/Cover/Cover'
import FeatureImg from '../components/Feature/FeatureImg'

export default () => (
  <Layout>
    <Cover
      text="Somos la compañia tecnológica líder en gestión odontológica de Argentina"
      paragraph="Nuestro propósito es facilitar la administración de los 2.000 consultorios y clínicas que confían en nosotros día a día."
      gradientBg="green"
      hasButtons={false}
    />
    <FeatureImg
      imgSrc="/static/illus-para-vos.svg"
      imgAlt="About - Pensado para vos"
      copy={false}
      title="Pensado para vos"
      description="Bilog es un software simple, pensado
      y diseñado especialmente para Odontólogos y sus asistentes.
      Gracias a su diseño intuitivo, fácil y nuestro
      permanentesoporte, no necesitás pasar horas para
      aprender a usarlo."
      hasCta={false}
      imageAlign="left"
      bgGrey={false}
      buttonText="Ver más"
      buttonHref="/bilogApp"
    />
    <FeatureImg
      imgSrc="/static/illus-elegirnos.svg"
      imgAlt="About - Porque elegirnos"
      copy={false}
      title="¿Por qué elegirnos?"
      description="Nuestro objetivo es facilitar las
      tareas administrativas para que hagas foco en
      lo importante. Por eso, con Bilog, dar turnos,
      hacer la ficha del paciente, cargar el odontograma,
      agregar imágenes y manejar el dinero, es rápido,
      fácil y eficiente."
      hasCta
      imageAlign="right"
      bgGrey
      buttonText="Contactate ahora"
      buttonHref="/contact"
    />
  </Layout>
)
