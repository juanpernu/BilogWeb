import Layout from '../components/Layout';
import Cover from '../components/Cover/Cover';
import CardUserList from '../components/CardUser/CardUserList'
import DownloadUtils from '../components/Download/DownloadUtils';

export default () => (
  <>
  <Layout>
    <Cover
      text="¡Bienvenido al centro de usuarios!"
      paragraph="Aqui podras encontrar documentación, las preguntas más frecuentes, testimonios y como ponerte en contacto."
      hasButtons={false}
    />
    <CardUserList/>
    <DownloadUtils/>
  </Layout>
  </>
);