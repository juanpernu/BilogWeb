import Layout from '../components/Layout';
import Cover from '../components/Cover/Cover';
import DownloadUtils from '../components/Download/DownloadUtils';

export default () => (
  <Layout>
    <Cover
      text="¡Bienvenido al centro de Usarios!"
      paragraph="Aqui podras encontrar documentación, preguntas mas frecuentes, testimonios y como ponerte en contacto."
      hasButtons={false}
    />
    <DownloadUtils/>
  </Layout>
);