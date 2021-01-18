import Layout from '../components/Layout';
import Cover from '../components/Cover/Cover';
import CardUserList from '../components/CardUser/CardUserList'
import DownloadUtils from '../components/Download/DownloadUtils';

export default () => (
  <>
  <Layout>
    <Cover
      text="¡Bienvenido al centro de clientes!"
      paragraph="Aqui podras encontrar documentación, preguntas mas frecuentes, testimonios y como ponerte en contacto."
      hasButtons={false}
    />
    <CardUserList/>
    <DownloadUtils/>
  </Layout>
  </>
);