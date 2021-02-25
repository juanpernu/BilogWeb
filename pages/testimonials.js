import Layout from '../components/Layout';
import Cover from '../components/Cover/Cover';
import Testimonials from '../components/Testimonials';

export default () => (
  <Layout>
    <Cover
      text="¡Bienvenido a los Testimonios!"
      paragraph="Aqui podra leer todos los testimonios de nuestros clientes."
      hasButtons={false}
    />
    <Testimonials />
  </Layout>
);