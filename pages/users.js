import Layout from '../components/Layout';
import Cover from '../components/Cover/Cover';
import CardUserList from '../components/CardUser/CardUserList'

export default () => (
  <>
  <Layout>
    <Cover
      text="¡Bienvenido al centro de Usarios!"
      paragraph="Aqui podras encontrar documentación, preguntas mas frecuentes, testimonios y como ponerte en contacto."
      hasButtons={false}
    />
    <CardUserList/>

  </Layout>
  </>
);